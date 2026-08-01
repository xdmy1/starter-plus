import type { Doc } from "@/content/types";

export const articlesIndex: Doc = {
  title: "Articole",
  short: "Articole",
  excerpt: "Ce vedem în atelier zi de zi: cum recunoașteți la timp un demaror sau un alternator care cedează, de ce se defectează și când reparația nu se mai justifică.",
  lead: "Textele de mai jos nu sunt scrise pentru motoarele de căutare. Sunt explicațiile pe care le dăm oricum, la telefon și la tejghea, de câte ori un client întreabă „de ce s-a ars?” sau „merită reparat?”. Le-am pus aici ca să le puteți citi înainte de a rămâne în drum.",
  highlights: [
    "Semnele care apar înainte de defecțiune, nu după.",
    "Cauzele reale, măsurate la stand, nu presupuse.",
    "Ce puteți verifica singur și ce este mai bine să nu atingeți.",
  ],
  body: [
    {
      type: "p",
      text: "Un demaror sau un alternator ajunge rar la noi fără preaviz. Aproape întotdeauna există un zgomot, o pornire mai lungă la rece, un bec aprins în bord sau o baterie care se descarcă peste noapte, semne pe care le-a observat cineva cu câteva săptămâni înainte. Diferența dintre o piesă de câțiva euro și un agregat nou stă, de regulă, în cât de repede a fost dus automobilul la verificare.",
    },
    {
      type: "ul",
      items: [
        "Semnele după care recunoașteți la timp un demaror sau un alternator care cedează.",
        "Cauzele reale ale defecțiunilor: ce ține de uzură, ce ține de exploatare și ce ține de instalația electrică a automobilului.",
        "Cum este construit sistemul de încărcare și ce rol are fiecare piesă din alternator.",
        "Când reparația se justifică și când este mai ieftin un agregat nou sau recondiționat.",
        "Verificările improvizate care ard puntea de diode sau blocul electronic — și ce se face în locul lor.",
        "Măsurile de întreținere care prelungesc viața agregatului cu ani, nu cu luni.",
      ],
    },
    {
      type: "cta",
      title: "Aveți deja simptomul, nu doar întrebarea",
      text: "Descrieți-ne ce se întâmplă cu automobilul. Examinarea și devizul se fac în ziua în care primim agregatul.",
      label: "Contacte",
      href: "contacte",
    },
  ],
  seo: {
    title: "Articole despre demaroare și alternatoare",
    description: "Articole practice de la atelierul Starter Plus din Chișinău: semnele defecțiunilor, cauzele lor, întreținerea demarorului și a alternatorului, când merită reparația.",
  },
};
