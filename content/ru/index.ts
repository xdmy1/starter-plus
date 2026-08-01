import type { Dictionary } from "@/content/types";

import { articles } from "./articles";
import { common } from "./common";
import { contact } from "./contact";
import { home } from "./home";
import { info } from "./info";
import { parts } from "./parts";
import { services } from "./services";

const dictionary: Dictionary = {
  common,
  home,
  parts,
  services,
  info,
  articles,
  contact,
};

export default dictionary;
