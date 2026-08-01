import type { Article } from "@/content/types";

export const article: Article = {
  title: "Atelierul nostru",
  short: "Atelierul nostru",
  excerpt:
    "Două fotografii din hala din str. Uzinelor 104 și ce înseamnă, practic, un atelier care face doar demaroare și alternatoare.",
  lead: "Un service general „face și electrică”: demontează demarorul, îl înlocuiește cu altul și trece la mașina următoare. Un atelier specializat face altceva — desface agregatul și măsoară fiecare piesă din el. De aici vine diferența, atât la diagnostic, cât și la nota de plată.",
  highlights: [
    "Atelier dedicat demaroarelor și alternatoarelor, nu un service general",
    "Autoturisme, camioane și utilaj special, instalații de 12 V și 24 V",
    "Agregatul pleacă din atelier doar după proba pe bancul de testare",
  ],
  body: [
    {
      type: "p",
      text: "Practic, asta înseamnă un banc de probă și un raft de piese pentru demaroare și alternatoare: bendixuri, rotoare, relee de cuplare, punți de diode, relee regulatoare de tensiune, perii colectoare, bucșe și rulmenți. Când agregatul dumneavoastră este desfăcut pe masă, piesa de schimb se caută pe raftul din atelier, nu într-un catalog. Suntem una dintre primele firme din Moldova specializate în repararea demaroarelor și alternatoarelor pentru autoturisme și camioane, iar tot ce vedeți mai jos este hala din str. Uzinelor 104.",
    },
    {
      type: "figure",
      src: "/img/atelier-1.jpg",
      width: 832,
      height: 624,
      alt: "Hala acoperită a atelierului Starter Plus: autoturisme parcate pe rânduri, câteva cu capota ridicată, un mecanic lucrând la un motor.",
      caption: "O zi obișnuită de lucru în hala din str. Uzinelor 104 (Lunca Bâcului 35 A).",
    },
    { type: "h2", text: "Ce se întâmplă cu un demaror sau un alternator ajuns la noi" },
    {
      type: "steps",
      items: [
        {
          title: "Demontare și curățare",
          text: "Agregatul se desface în piesele componente, iar fiecare piesă se curăță și se spală. Pe un colector acoperit de praf de cărbune sau pe un bobinaj plin de unsoare arsă nu se vede nici o fisură, nici o urmă de scurtcircuit.",
        },
        {
          title: "Măsurători pe fiecare componentă",
          text: "Bobinaj și colector, perii colectoare și suport de perii, bendix, releu de cuplare, punte de diode, releu regulator de tensiune, bucșe, rulmenți și fulie. Fiecare piesă se verifică separat, nu „la ochi”, cu agregatul asamblat.",
        },
        {
          title: "Devizul, confirmat cu dumneavoastră",
          text: "Vă spunem ce s-a defectat, de ce s-a defectat și cât costă lucrarea. De regulă, verificarea și devizul se fac în aceeași zi. Dacă refuzați reparația, asamblăm agregatul cu grijă și vi-l returnăm în starea în care l-am primit.",
        },
        {
          title: "Înlocuirea pieselor defecte",
          text: "Piesele ieșite din funcțiune se schimbă cu piese noi echivalente, originale sau fabricate sub licență. O piesă care trebuie înlocuită nu se „drege” ca să iasă mai ieftin — se înlocuiește.",
        },
        {
          title: "Asamblare și probă sub sarcină",
          text: "Agregatul asamblat se testează pe bancul de probă: curentul absorbit, tensiunea de ieșire la diferite regimuri de rotație, cuplarea și decuplarea bendixului, zgomotul bucșelor și al rulmenților. Iese din atelier doar după ce valorile corespund.",
        },
      ],
    },
    {
      type: "figure",
      src: "/img/atelier-2.jpg",
      width: 784,
      height: 588,
      alt: "Aceeași hală de atelier cu vehicule comerciale: un camion cu furgon alb în prim-plan, un cap tractor roșu și o remorcă în fundal.",
      caption: "În hală intră și camioane, nu doar autoturisme.",
    },
    {
      type: "p",
      text: "Un demaror de camion sau de utilaj special este mai mare, are altă putere și lucrează adesea la 24 V, dar trece prin exact aceiași pași: demontare, curățare, măsurători, deviz, probă pe banc. Aceeași procedură și aceleași măsurători pentru un autoturism și pentru un cap tractor.",
    },
    {
      type: "note",
      text: "Fotografiile sunt făcute în hală, într-o zi de lucru, nu într-un studio. Le păstrăm așa: arată atelierul cum este, nu cum ar arăta pregătit pentru poze.",
    },
    {
      type: "cta",
      title: "Veniți cu agregatul la noi",
      text: "str. Uzinelor 104, Chișinău (Lunca Bâcului 35 A). Luni–vineri 09:00–18:00, sâmbătă 09:00–16:00.",
      label: "Contacte și hartă",
      href: "contacte",
    },
  ],
  seo: {
    title: "Atelierul nostru: cum arată o zi de lucru",
    description:
      "Fotografii din atelierul din str. Uzinelor 104, Chișinău, și ce înseamnă un atelier specializat doar pe demaroare și alternatoare: măsurători și probă pe banc.",
  },
  date: "2021-05-06",
  readingMinutes: 2,
  tag: "Atelier",
};
