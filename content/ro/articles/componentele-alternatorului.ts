import type { Article } from "@/content/types";

export const article: Article = {
  title: "Componentele alternatorului: ce face fiecare piesă",
  short: "Componentele alternatorului",
  excerpt:
    "Schema în secțiune a unui alternator auto și rolul fiecărei componente: rotor, stator, punte de diode, releu regulator, rulmenți și fulie.",
  lead: "Când un alternator este dus la reparat, discuția se reduce de obicei la două-trei denumiri: „puntea”, „regulatorul”, „rulmenții”. Dacă știți unde stau aceste piese și ce fac, înțelegeți devizul și puteți întreba concret ce s-a măsurat. Desenul de mai jos are toate piesele marcate, iar tabelul le explică una câte una.",
  highlights: [
    "Secțiune printr-un alternator auto, cu toate piesele marcate",
    "11 componente, fiecare cu rolul explicat în două rânduri",
    "Ce cedează primul: perii, releu regulator, rulmenți, punte de diode",
    "Ce se recondiționează pe piese și ce se înlocuiește întreg",
  ],
  body: [
    {
      type: "p",
      text: "Alternatorul face un singur lucru: transformă o parte din puterea motorului în curent pentru baterie și pentru rețeaua de bord. Cureaua de accesorii rotește fulia, fulia rotește rotorul, iar bobinajul de excitație al rotorului creează un câmp magnetic în mișcare. Câmpul induce curent alternativ în bobinajul statoric, puntea de diode îl redresează în curent continuu, iar releul regulator de tensiune ține rezultatul în jurul a 14 V, indiferent de turație și de câți consumatori sunt aprinși.",
    },
    {
      type: "figure",
      src: "/img/schema-alternator.jpg",
      width: 500,
      height: 432,
      alt: "Secțiune printr-un alternator auto, cu componentele marcate: rulmenți, carcasă, stator, rotor, releu regulator, fulie, ventilator, punte de diode.",
      caption:
        "Secțiune printr-un alternator auto. Etichetele desenate pe imagine sunt în limba rusă, așa cum apar în documentația originală — denumirile în română sunt în tabelul de mai jos, în aceeași ordine.",
    },
    { type: "h2", text: "Ce face fiecare piesă din desen" },
    {
      type: "table",
      head: ["Componenta", "Ce face"],
      rows: [
        [
          "Rulmentul din față",
          "Lagărul axului dinspre fulie; preia sarcina laterală dată de cureaua de accesorii.",
        ],
        [
          "Carcasa, partea din față",
          "Jumătatea dinspre fulie, cu locașul rulmentului și punctele de prindere pe motor.",
        ],
        [
          "Statorul alternatorului",
          "Pachetul fix de tole în care sunt așezate bobinajele; aici se induce curentul.",
        ],
        [
          "Rotorul alternatorului",
          "Partea rotitoare, cu bobinajul de excitație și polii-gheare: creează câmpul magnetic în mișcare.",
        ],
        [
          "Releul regulator de tensiune",
          "Menține tensiunea de încărcare în jurul a 14 V, indiferent de turație și de consumatori.",
        ],
        [
          "Fulia alternatorului",
          "Preia mișcarea de la cureaua de accesorii; poate fi fixă sau cu cuplaj unisens (decuplator).",
        ],
        [
          "Ventilatorul rotorului",
          "Paletele care trec aer prin agregat și răcesc bobinajele, puntea de diode și releul regulator.",
        ],
        [
          "Bobinajul statoric",
          "Cele trei bobinaje de cupru în care se generează curentul alternativ.",
        ],
        [
          "Carcasa, partea din spate",
          "Jumătatea în care stau releul regulator, periile, puntea de diode și rulmentul din spate.",
        ],
        [
          "Rulmentul din spate",
          "Lagărul axului dinspre inelele colectoare; primul care începe să șuiere când rămâne fără unsoare.",
        ],
        [
          "Puntea de diode",
          "Redresează curentul alternativ în curent continuu pentru baterie și rețeaua de bord și blochează curentul invers.",
        ],
      ],
    },
    {
      type: "cta",
      title: "Piesele din desen, pe categorii",
      text: "În catalog găsiți alternatoare complete, noi și recondiționate, plus pagini separate pentru rotor de alternator, fulie și perii colectoare.",
      label: "Alternatoare și piese",
      href: "piese/alternatoare",
    },
    { type: "h2", text: "Piesele care cedează primele" },
    {
      type: "ul",
      items: [
        "Periile colectoare și inelele de pe rotor — se consumă; încărcarea devine neregulată, apoi dispare, iar becul de bord se aprinde intermitent.",
        "Releul regulator de tensiune — piesa schimbată cel mai des; dă fie prea puțin (bateria se descarcă în câteva zile), fie prea mult (becuri arse și electrolit fiert).",
        "Rulmenții — șuieră sau bâzâie, mai ales la rece; un rulment gripat blochează cureaua și poate opri motorul.",
        "Puntea de diode — cedează la scurtcircuit, la inversarea polarității bateriei și când se lucrează cu bornele desfăcute, motorul fiind pornit.",
        "Fulia cu cuplaj unisens — se blochează sau se învârte în gol; se aude un zgomot scurt la oprirea motorului.",
        "Bobinajul statoric — se arde la supraîncălzire sau când puntea este defectă; miros de lac ars și izolație închisă la culoare.",
      ],
    },
    {
      type: "cta",
      title: "Tensiune de încărcare în afara normei?",
      text: "Releul regulator nu se recondiționează, se înlocuiește. Avem regulatoare BOSCH, VALEO, CARGO, MOBILETRON, TRANSPO, UTM și WAI pentru mărcile curente.",
      label: "Releu regulator de tensiune",
      href: "piese/releu-regulator",
    },
    { type: "h2", text: "Ce se repară și ce se înlocuiește" },
    {
      type: "p",
      text: "Se recondiționează: bobinajul statoric se rebobinează, inelele colectoare ale rotorului se strunjesc sau se schimbă, iar rulmenții, periile cu suportul lor și puntea de diode se înlocuiesc separat, fără agregat nou. Se schimbă întregi: releul regulator, rotorul atunci când bobinajul de excitație este întrerupt sau are scurt la masă, și fulia cu cuplaj atunci când nu mai blochează într-un sens. Carcasa se înlocuiește doar dacă este fisurată sau dacă locașul rulmentului s-a ovalizat.",
    },
    {
      type: "p",
      text: "Înainte de orice piesă se măsoară tensiunea de încărcare și curentul debitat, la turații diferite și cu consumatorii aprinși. Fără măsurătoare se schimbă des un alternator bun pentru o curea slăbită, un cablu de masă corodat sau o baterie care nu mai ține sarcina — iar simptomul rămâne exact același după reparație.",
    },
    {
      type: "cta",
      title: "Verificăm alternatorul înainte să schimbați piese",
      text: "Atelierul este în str. Uzinelor 104 (Lunca Bâcului 35 A). Examinarea și devizul se fac în ziua în care primim agregatul.",
      label: "Reparație alternatoare",
      href: "servicii/reparatii-alternatoare",
    },
  ],
  seo: {
    title: "Componentele alternatorului: schemă și rolul pieselor",
    description:
      "Schemă în secțiune a alternatorului auto și rolul fiecărei piese: rotor, stator, punte de diode, releu regulator, rulmenți, fulie. Atelier în Chișinău.",
  },
  date: "2021-05-02",
  readingMinutes: 4,
  tag: "Alternatoare",
};
