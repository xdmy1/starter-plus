import type { Article } from "@/content/types";

export const article: Article = {
  title: "Componentele demarorului: ce face fiecare piesă",
  short: "Componentele demarorului",
  excerpt:
    "Schema în secțiune a unui demaror cu reductor planetar și rolul fiecărei componente, de la bornele releului până la pinionul care intră în coroana volantei.",
  lead: "Devizul pentru un demaror arată aproape întotdeauna ca o listă de trei-patru piese. Dacă știți ce este fiecare dintre ele și ce face, puteți întreba de ce anume trebuie schimbată — în loc să acceptați suma pe încredere. Desenul de mai jos are toate piesele marcate, iar tabelul le explică una câte una.",
  highlights: [
    "Secțiune printr-un demaror cu reductor planetar, cu toate piesele marcate",
    "20 de componente, fiecare cu rolul explicat în două rânduri",
    "Ce se uzează primul: perii, contactele releului, bendix, bucșe",
    "Ce se recondiționează pe piese și ce se înlocuiește întreg",
  ],
  body: [
    {
      type: "p",
      text: "Traseul curentului prin demaror este scurt și merită ținut minte, pentru că aproape toate defecțiunile se așează pe el. Contactul de pornire alimentează bobinajele releului de cuplare; releul își trage miezul, care apasă placa de contact peste bornele de forță și, prin furcă, împinge bendixul cu pinion spre volantă; curentul intră în stator și, prin perii și colector, în rotor; reductorul planetar transformă turația rotorului în cuplu, iar pinionul rotește coroana volantei până când motorul pornește singur.",
    },
    {
      type: "figure",
      src: "/img/schema-demaror.jpg",
      width: 500,
      height: 274,
      alt: "Secțiune printr-un demaror cu reductor planetar, cu toate componentele marcate: releu de cuplare, furcă, rotor, stator, reductor planetar, bendix și pinion.",
      caption:
        "Secțiune printr-un demaror cu reductor planetar. Etichetele desenate pe imagine sunt în limba rusă, așa cum apar în documentația originală — denumirile în română sunt în tabelul de mai jos, în aceeași ordine.",
    },
    { type: "h2", text: "Ce face fiecare piesă din desen" },
    {
      type: "table",
      head: ["Componenta", "Ce face"],
      rows: [
        [
          "Carcasa (corpul cilindric)",
          "Închide circuitul magnetic al statorului și ține tot agregatul în ansamblu.",
        ],
        [
          "Cablajul de forță (jgheabul)",
          "Conductorul dintre bornele releului, bobinajele statorului și perii: prin el trece curentul de lucru.",
        ],
        [
          "Bornele de contact",
          "Bornele de forță ale releului: pe una intră plusul de la baterie, de pe cealaltă pleacă curentul în demaror.",
        ],
        [
          "Placa de contact",
          "Puntea de cupru care leagă cele două borne când releul cuplează. Se arde mai des decât orice altă piesă a releului.",
        ],
        [
          "Bobinajul de atragere și bobinajul de menținere",
          "Primul trage miezul cu forță maximă, al doilea îl ține pe poziție cu un curent mult mai mic.",
        ],
        [
          "Miezul releului de cuplare",
          "Piesa mobilă a releului: transformă câmpul bobinajelor în mișcare mecanică.",
        ],
        [
          "Furca",
          "Pârghia care duce mișcarea miezului la bendix și introduce pinionul în coroana volantei.",
        ],
        [
          "Arcul",
          "Readuce miezul, furca și pinionul în poziția de repaus în momentul în care curentul se întrerupe.",
        ],
        [
          "Masca demarorului",
          "Partea frontală a carcasei, cu flanșa de prindere pe motor; asigură coaxialitatea pinionului cu coroana volantei.",
        ],
        ["Bucșa din față", "Lagărul axului dinspre pinion."],
        [
          "Periile colectoare",
          "Transmit curentul spre colectorul rotorului aflat în mișcare. Piesă de consum.",
        ],
        ["Bucșa din spate", "Lagărul axului dinspre colector."],
        [
          "Colectorul",
          "Lamelele de cupru de pe axul rotorului; prin ele curentul este distribuit în bobinaj.",
        ],
        [
          "Suportul de perii",
          "Portperiile cu arcuri: mențin apăsarea constantă a periilor și le izolează de carcasă.",
        ],
        [
          "Rotorul de demaror (indusul)",
          "Partea rotitoare, cu bobinaj și canelură pe ax: aici se produce cuplul.",
        ],
        [
          "Statorul",
          "Partea fixă, cu bobinaje de excitație sau magneți permanenți: creează câmpul magnetic.",
        ],
        [
          "Reductorul planetar",
          "Reduce turația rotorului și mărește cuplul; de aceea demarorul poate fi mai mic și mai ușor la aceeași putere.",
        ],
        [
          "Cuplajul unisens (bendixul)",
          "Transmite rotația la pinion și se decuplează imediat ce motorul a pornit, ca motorul să nu antreneze demarorul.",
        ],
        [
          "Pinionul",
          "Intră în angrenaj cu coroana volantei și rotește motorul.",
        ],
        [
          "Inelul de siguranță",
          "Limitează cursa bendixului pe ax și nu îl lasă să iasă de pe canelură.",
        ],
      ],
    },
    {
      type: "cta",
      title: "Piesele din desen, pe categorii",
      text: "În catalog găsiți demaroare complete, noi și recondiționate, plus pagini separate pentru rotor de demaror, releu de cuplare și perii colectoare.",
      label: "Demaroare și piese",
      href: "piese/demaroare",
    },
    { type: "h2", text: "Piesele care se uzează primele" },
    {
      type: "ul",
      items: [
        "Periile colectoare — se consumă prin frecare; când rămân scurte, demarorul rotește slab sau pornește abia de la a doua încercare.",
        "Placa de contact și bornele releului de cuplare — se ard și se acoperă cu oxid; simptomul clasic este un clic, apoi liniște.",
        "Cuplajul unisens (bendixul) — patinează sau nu mai iese complet; se aude cum demarorul se învârte în gol, fără să antreneze motorul.",
        "Bucșele din față și din spate — capătă joc, rotorul începe să frece statorul și zgomotul devine metalic.",
        "Colectorul — se uzează neuniform și se umple cu praf de cărbune între lamele; periile scânteiază și pierd contactul.",
        "Reductorul planetar — sateliții și axele lor cedează după porniri lungi și repetate; se aude un zgomot de angrenaj la fiecare cuplare.",
        "Bobinajele rotorului și statorului — se scurtcircuitează la supraîncălzire; demarorul trage curent mare și rotește tot mai încet.",
      ],
    },
    {
      type: "cta",
      title: "Bendixul este piesa schimbată cel mai des",
      text: "Bendixuri pentru autoturisme, camioane și utilaj special, în mărcile pe care le ținem în stoc. Dacă nu știți care se potrivește, veniți cu piesa veche.",
      label: "Bendix pentru demaror",
      href: "piese/bendix",
    },
    { type: "h2", text: "Ce se repară și ce se înlocuiește" },
    {
      type: "p",
      text: "Se recondiționează: rotorul de demaror (colector strunjit, lamele curățate, bobinaj rebobinat), statorul cu bobinajele lui, iar releul de cuplare atunci când este suficient să se schimbe placa și bornele de contact. Bucșele și inelul de siguranță se schimbă la orice desfacere, pentru că sunt ieftine și pentru că refacerea lor ulterioară costă o a doua demontare.",
    },
    {
      type: "p",
      text: "Se înlocuiesc întregi: bendixul, periile împreună cu suportul lor atunci când arcurile și-au pierdut apăsarea, iar carcasa și masca demarorului doar când sunt fisurate sau au filetele rupte. Un lucru care nu se vede pe desen, dar se verifică obligatoriu: dacă dinții pinionului sunt bătuți, controlați și coroana volantei — o coroană uzată tocește un pinion nou în câteva săptămâni. La stand se măsoară consumul de curent și comportarea sub sarcină; abia atunci se vede dacă reparația pe piese are sens sau dacă un agregat recondiționat este soluția mai ieftină.",
    },
    {
      type: "cta",
      title: "Nu sunteți sigur ce piesă a cedat?",
      text: "Aduceți demarorul în atelierul din str. Uzinelor 104 (Lunca Bâcului 35 A). Examinarea și devizul se fac în ziua în care primim agregatul.",
      label: "Reparație demaroare",
      href: "servicii/reparatii-demaroare",
    },
  ],
  seo: {
    title: "Componentele demarorului: schemă și rolul pieselor",
    description:
      "Schemă în secțiune a unui demaror cu reductor planetar și rolul fiecărei componente, plus piesele care se uzează primele. Atelier Starter Plus, Chișinău.",
  },
  date: "2021-05-01",
  readingMinutes: 4,
  tag: "Demaroare",
};
