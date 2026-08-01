import { NextResponse, type NextRequest } from "next/server";

import { legacyRedirectMap } from "@/content/taxonomy";
import { LOCALE_COOKIE } from "@/lib/locale-cookie";
import { defaultLocale, isLocale, type Locale } from "@/lib/locales";

/** Cookie first (explicit user choice), then Accept-Language, then default. */
function pickLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  if (saved && isLocale(saved)) return saved;

  const header = request.headers.get("accept-language");
  if (header) {
    const ranked = header
      .split(",")
      .map((part) => {
        const [tag, q] = part.trim().split(";q=");
        return { tag: tag.toLowerCase(), q: q ? Number(q) : 1 };
      })
      .sort((a, b) => b.q - a.q);

    for (const { tag } of ranked) {
      const base = tag.split("-")[0];
      if (base === "ru") return "ru";
      if (base === "ro" || base === "mo") return "ro";
    }
  }

  return defaultLocale;
}

/** Split "/ru/piese" into its locale (if present) and the remainder. */
function splitLocale(pathname: string): { locale: Locale | null; rest: string } {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length && isLocale(segments[0])) {
    return { locale: segments[0], rest: `/${segments.slice(1).join("/")}` };
  }
  return { locale: null, rest: pathname };
}

const strip = (path: string) => path.replace(/\/+$/, "") || "/";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const { locale: current, rest } = splitLocale(pathname);
  const bare = strip(rest);

  /*
   * Built from `request.url` rather than `nextUrl.clone()` on purpose: a cloned
   * NextURL remembers whether the incoming path had a trailing slash and
   * re-appends it when serialised, which turns every normalisation into a loop.
   */
  const redirect = (to: string, status?: 307 | 308) => {
    const url = new URL(to, request.url);
    url.search = request.nextUrl.search;
    return status
      ? NextResponse.redirect(url, status)
      : NextResponse.redirect(url);
  };

  // 1. Old starterplus.md URLs -> new paths. Handled before trailing-slash
  //    normalisation (see `skipTrailingSlashRedirect` in next.config.ts) so the
  //    real inbound links, which all end in "/", resolve in a single 308.
  // `!== undefined` rather than truthiness: the homepage target is "".
  const moved = legacyRedirectMap[bare];
  if (moved !== undefined) {
    return redirect(`/${current ?? pickLocale(request)}${moved}`, 308);
  }

  // 2. Normalise a trailing slash ourselves, now that Next isn't doing it.
  const normalised = strip(pathname);
  if (normalised !== pathname) {
    return redirect(normalised, 308);
  }

  // 3. Already localised — carry on.
  if (current) return NextResponse.next();

  // 4. No locale in the path — add one and remember the choice.
  const locale = pickLocale(request);
  const response = redirect(pathname === "/" ? `/${locale}` : `/${locale}${pathname}`);
  response.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: [
    // Everything except Next internals, the API, and files with an extension.
    "/((?!_next|api|.*\\.).*)",
  ],
};
