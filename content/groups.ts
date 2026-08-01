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

/** Short label for the "everything" chip in the catalog filter. */
export const allPartsLabel: Record<Locale, string> = {
  ro: "Toate piesele",
  ru: "Все запчасти",
};
