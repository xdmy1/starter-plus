import "server-only";

import type { Dictionary } from "@/content/types";
import type { Locale } from "./locales";

const loaders: Record<Locale, () => Promise<Dictionary>> = {
  ro: () => import("@/content/ro").then((m) => m.default),
  ru: () => import("@/content/ru").then((m) => m.default),
};

export function getDictionary(locale: Locale): Promise<Dictionary> {
  return loaders[locale]();
}
