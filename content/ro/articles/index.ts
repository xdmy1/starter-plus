import type { Article, Doc } from "@/content/types";

import { articlesIndex } from "./index-doc";
import { article as componenteleDemarorului } from "./componentele-demarorului";
import { article as componenteleAlternatorului } from "./componentele-alternatorului";
import { article as defectiuniDemarorCauzePreventie } from "./defectiuni-demaror-cauze-preventie";
import { article as defectiuniPrincipaleDemaror } from "./defectiuni-principale-demaror";
import { article as meritaReparatia } from "./merita-reparatia";
import { article as alternatorDefectCauzeMasuri } from "./alternator-defect-cauze-masuri";
import { article as sistemDeIncarcareAlternator } from "./sistem-de-incarcare-alternator";
import { article as cumDistrugiAlternatorulSiDemarorul } from "./cum-distrugi-alternatorul-si-demarorul";
import { article as atelierulNostru } from "./atelierul-nostru";

/** Keys must match `articles` in content/taxonomy.ts. */
export const articles: { index: Doc; items: Record<string, Article> } = {
  index: articlesIndex,
  items: {
    "componentele-demarorului": componenteleDemarorului,
    "componentele-alternatorului": componenteleAlternatorului,
    "defectiuni-demaror-cauze-preventie": defectiuniDemarorCauzePreventie,
    "defectiuni-principale-demaror": defectiuniPrincipaleDemaror,
    "merita-reparatia": meritaReparatia,
    "alternator-defect-cauze-masuri": alternatorDefectCauzeMasuri,
    "sistem-de-incarcare-alternator": sistemDeIncarcareAlternator,
    "cum-distrugi-alternatorul-si-demarorul": cumDistrugiAlternatorulSiDemarorul,
    "atelierul-nostru": atelierulNostru,
  },
};
