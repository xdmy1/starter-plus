import type { Locale } from "@/lib/locales";

/**
 * Labels for the catalog's three part families. Kept out of the main
 * dictionaries because they belong to the taxonomy, not to page copy.
 */
export const partGroupLabels: Record<Locale, Record<"starter" | "alternator" | "shared", string>> = {
  ro: {
    starter: "Piese pentru demaror",
    alternator: "Piese pentru alternator",
    shared: "Piese comune",
  },
  ru: {
    starter: "Запчасти для стартера",
    alternator: "Запчасти для генератора",
    shared: "Общие запчасти",
  },
};

/**
 * What each phone line is for, shown beside the number on the contacts page.
 * Both repair lines cover starters AND alternators — the client asked for both
 * to be named, shortened to a slash pair so it fits the narrow label column.
 */
export const phoneRoleLabels: Record<Locale, Record<"repairs" | "autoElectric", string>> = {
  ro: {
    repairs: "Startere / generatoare",
    autoElectric: "Electrician auto",
  },
  ru: {
    repairs: "Стартеры / генераторы",
    autoElectric: "Автоэлектрик",
  },
};

/** Unit word for the warranty badge, so it reads "12 luni garanție". */
export const monthsWord: Record<Locale, string> = {
  ro: "luni",
  ru: "месяцев",
};

/** Short label for the "everything" chip in the catalog filter. */
export const allPartsLabel: Record<Locale, string> = {
  ro: "Toate piesele",
  ru: "Все запчасти",
};
