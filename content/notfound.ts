import type { Locale } from "@/lib/locales";

/**
 * 404 strings live here rather than in the main dictionaries: `not-found.tsx`
 * receives no route params, so it detects the locale on the client — and
 * importing a whole dictionary into a Client Component would ship both
 * languages to the browser.
 */
export const notFoundCopy: Record<
  Locale,
  { title: string; text: string; home: string; contact: string }
> = {
  ro: {
    title: "Pagina nu a fost găsită",
    text: "Adresa nu mai există sau a fost mutată. Puteți reveni la pagina principală, deschide catalogul de piese sau ne puteți suna direct.",
    home: "Pagina principală",
    contact: "Contacte",
  },
  ru: {
    title: "Страница не найдена",
    text: "Такого адреса больше нет или он изменился. Вернитесь на главную, откройте каталог запчастей или позвоните нам напрямую.",
    home: "На главную",
    contact: "Контакты",
  },
};
