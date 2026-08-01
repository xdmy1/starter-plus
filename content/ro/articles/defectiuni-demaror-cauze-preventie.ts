import type { Article } from "@/content/types";

export const article: Article = {
  title: "Defectarea demarorului: cauză și prevenție",
  short: "Cauză și prevenție",
  excerpt:
    "Cum verificați releul de cuplare cu un simplu conductor, de ce starea motorului distruge demarorul și ce puteți controla singur.",
  lead: "Un scrâșnet metalic sau alte zgomote străine în momentul pornirii înseamnă, aproape întotdeauna, o problemă la demaror. Înainte să demontați ceva, verificați releul de cuplare: durează câteva minute și scurtează mult lista cauzelor posibile.",
  highlights: [
    "Proba cu un conductor de 1,5 m arată în câteva minute dacă releul de cuplare este vinovat",
    "Uzura contactelor de cupru din releu este defecțiunea numărul unu",
    "Pornirea dificilă a motorului uzează demarorul mai repede decât kilometrajul",
    "Singura reparație de făcut singur: curățarea contactelor și înlocuirea conductorilor de alimentare",
  ],
  body: [
    { type: "h2", text: "Verificarea rapidă a releului de cuplare" },
    {
      type: "p",
      text: "Aveți nevoie de un conductor izolat de aproximativ 1,5 metri. Scoateți fișa de pe releul de cuplare al demarorului și alimentați borna releului direct de la plusul bateriei de acumulator, prin acest conductor. Dacă mașina nu pornește imediat, puneți selectorul în poziția „N” sau „P”. Cu un releu în stare bună, demarorul trebuie să antreneze motorul fără ezitări.",
    },
    {
      type: "note",
      text: "Faceți proba cu frâna de mână trasă și cu schimbătorul în punctul mort, iar conductorul să fie izolat pe toată lungimea.",
    },
    { type: "h2", text: "Ce se defectează în releul de cuplare" },
    {
      type: "p",
      text: "Cel mai des se uzează contactele de cupru — „pastilele” prin care trece curentul spre bobinajele demarorului. Uzura se citește în comportament: releul face „clac”, dar rotorul nu se rotește sau pornește abia de la a doua-a treia încercare. Pentru repararea releului, demarorul se demontează mai întâi de pe motor și se desface, iar abia apoi se desface releul propriu-zis.",
    },
    { type: "h2", text: "De ce cedează demarorul" },
    {
      type: "p",
      text: "Deseori vinovat nu este demarorul, ci starea tehnică a motorului. Majoritatea proprietarilor știu că motorul nu răspunde întotdeauna cerințelor:",
    },
    {
      type: "ul",
      items: [
        "ulei de calitate slabă, care se îngroașă rapid pe ger;",
        "formarea defectuoasă a amestecului în cilindri;",
        "defecte de fabricație și uzura mecanismelor motorului.",
      ],
    },
    {
      type: "p",
      text: "Toate acestea dau „pornire dificilă”: demarorul învârte motorul mai mult și mai greu decât ar trebui, iar sarcina suplimentară se transformă în uzură. Aceasta este cauza principală a defectării demaroarelor.",
    },
    { type: "h2", text: "Cât timp poate fi rotit demarorul" },
    {
      type: "p",
      text: "Nu depășiți durata de acționare indicată în manualul mașinii. Motivul nu este doar descărcarea bateriei: funcționarea de lungă durată nu intră în caracteristicile demarorului, iar peste timpul admis agregatul se supraîncălzește. Primele care simt asta sunt bobinajele, periile și releul.",
    },
    { type: "h2", text: "Prevenție" },
    {
      type: "p",
      text: "Pentru a urmări starea demarorului nu aveți nevoie de scule speciale. Ascultați cum lucrează: au apărut zgomote străine la cuplare și la decuplare, rotește mai slab decât săptămâna trecută? Ambele sunt semne timpurii.",
    },
    {
      type: "p",
      text: "Singura reparație care are sens să fie făcută pe cont propriu este curățarea contactelor și înlocuirea conductorilor care alimentează demarorul. Scăderea puterii apare adesea din coroziunea cablajului și a bornelor, nu din interiorul agregatului. Dacă după curățare nimic nu se schimbă, demarorul trebuie demontat și dus în atelier.",
    },
    {
      type: "p",
      text: "În atelier se stabilește ce piesă anume a cedat și se aleg componentele: releu de cuplare, perii colectoare, bendix, rotor de demaror. Reparația pe piese este aproape întotdeauna mai ieftină decât un agregat nou.",
    },
    {
      type: "cta",
      title: "Scrâșnet sau clicuri la pornire?",
      text: "Verificăm demarorul la stand, în atelierul din str. Uzinelor 104, și vă spunem exact ce piesă a cedat.",
      label: "Reparație demaroare",
      href: "servicii/reparatii-demaroare",
    },
  ],
  seo: {
    title: "Defectarea demarorului: cauză și prevenție",
    description:
      "Verificarea releului de cuplare cu un conductor de 1,5 m, cauzele reale ale defectării demarorului și ce puteți controla singur. Atelier în Chișinău.",
  },
  date: "2021-05-04",
  readingMinutes: 3,
  tag: "Demaroare",
};
