import type { Article } from "@/content/types";

export const article: Article = {
  title: "Sistemul de încărcare: cum este construit alternatorul și cum lucrează",
  short: "Sistemul de încărcare",
  excerpt: "Alternatorul este sursa principală de energie a automobilului: cum este construit, de ce are nevoie de releu regulator și cum se verifică încărcarea fără să distrugeți calculatorul de bord.",
  date: "2021-05-18",
  readingMinutes: 5,
  tag: "Alternatoare",
  highlights: [
    "Nu verificați niciodată încărcarea prin scoaterea bornei de la baterie.",
    "Alternatorul alimentează rețeaua de bord și reîncarcă bateria în timpul mersului.",
    "Tensionarea curelei se controlează prin flexiune, sub o forță dată.",
    "Releul regulator este piesa care ține tensiunea în limite la 7000 rot/min.",
  ],
  body: [
    {
      type: "note",
      text: "Atenție. Unii șoferi folosesc o metodă periculoasă de verificare a alternatorului: deconectează borna negativă de la bateria de acumulator cu motorul pornit. La un automobil cu motor cu carburator figura se poate face, cu prudență. La automobilele cu sistem modern de gestiune a motorului, adică cu bloc electronic de comandă, aceasta poate duce la distrugerea calculatorului și a altor elemente ale instalației electrice. Nu procedați așa.",
    },
    {
      type: "p",
      text: "Alternatorul este sursa principală de alimentare a echipamentelor și a sistemelor electrice ale automobilului. Lucrează prin rotație, iar mișcarea îi este transmisă de la arborele cotit al motorului printr-o curea de antrenare.",
    },
    {
      type: "note",
      text: "Notă. În timpul funcționării alternatorului, bateria de acumulator se reîncarcă până la nivelul necesar.",
    },

    { type: "h2", text: "Cureaua de antrenare" },
    {
      type: "p",
      text: "Pentru ca alternatorul să lucreze constant, trebuie urmărită permanent tensionarea curelei de antrenare. Ea se determină prin flexiunea curelei într-un punct anume, la aplicarea unei forțe stabilite de producător. Reglarea tensionării se face prin deplasarea alternatorului pe consola lui de montaj, iar la construcțiile mai noi prin întinzătorul automat.",
    },
    {
      type: "p",
      text: "O curea prea slăbită patinează pe fulie: alternatorul se rotește mai încet decât ar trebui, bateria primește doar o parte din curentul de încărcare, iar becul din bord se aprinde la ralanti și se stinge în accelerație. O curea prea întinsă distruge rulmenții alternatorului în câteva mii de kilometri. Ambele extreme ajung la același rezultat, doar pe drumuri diferite.",
    },

    { type: "h2", text: "Cum este construit alternatorul" },
    {
      type: "p",
      text: "Construcția este destul de simplă. În carcasă se află bobinajul fix al statorului. În aceeași carcasă sunt montați rulmenții, în care se rotește axul alternatorului cu rotorul instalat pe el. Rotorul are, la rândul lui, propriul bobinaj. Sub capacul alternatorului sunt montate blocul punții de diode — redresorul de curent — periile colectoare și regulatorul de tensiune.",
    },
    {
      type: "ul",
      items: [
        "Statorul: bobinajul fix din carcasă, în care se induce tensiunea alternativă. Piesa care se arde prima când agregatul lucrează supraîncărcat.",
        "Rotorul: axul cu bobinajul de excitație și cu inelele colectoare, sprijinit pe cei doi rulmenți.",
        "Rulmenții: singurele piese cu uzură mecanică din agregat; zgomotul lor se aude înainte de orice altă defecțiune.",
        "Puntea de diode: transformă tensiunea alternativă din stator în tensiune continuă pentru rețeaua de bord.",
        "Periile colectoare și suportul de perii: transmit curentul de excitație către bobinajul rotorului.",
        "Releul regulator de tensiune: limitează tensiunea la valoarea de care au nevoie bateria și consumatorii.",
        "Fulia: preia mișcarea de la curea; la multe modele are amortizor sau cuplaj unidirecțional, care se blochează cu timpul.",
      ],
    },

    { type: "h2", text: "Principiul de funcționare" },
    {
      type: "p",
      text: "La baza funcționării alternatorului stă efectul de inducție electromagnetică. Dacă o bobină — de exemplu din conductor de cupru — este străbătută de un flux magnetic, atunci la variația fluxului apare la bornele bobinei o tensiune electrică proporțională cu viteza de variație a acelui flux. Și invers: pentru a obține un flux magnetic este suficient să treceți un curent electric prin bobină. Așadar, pentru a obține curent alternativ sunt necesare o sursă de câmp magnetic variabil și o bobină de la care se culege tensiunea alternativă.",
    },
    {
      type: "p",
      text: "În alternator, bobinajul rotorului este alimentat prin perii și devine electromagnetul care creează câmpul. Rotorul se rotește, câmpul lui trece prin bobinajele statorului și induce în ele tensiune alternativă. Puntea de diode o redresează, iar rețeaua de bord primește tensiune continuă. Acesta este și motivul pentru care alternatorul nu poate încărca la turație de ralanti la fel ca la 2000 rot/min: cu cât fluxul variază mai repede, cu atât curentul debitat este mai mare.",
    },

    { type: "h2", text: "De ce alternatorul are nevoie de releu regulator" },
    {
      type: "p",
      text: "Regulatorul de tensiune este o piesă extrem de importantă în alternator. Tensiunea produsă depinde direct de numărul de rotații ale rotorului, iar acesta poate fi destul de mare, pentru că frecvența de rotație a arborelui cotit poate atinge 6000–7000 rot/min. Ca să nu se ardă consumatorii, în construcția alternatorului a fost introdus regulatorul de tensiune.",
    },
    {
      type: "p",
      text: "El nu frânează rotorul și nu limitează curentul: dozează curentul care ajunge la bobinajul de excitație, adică slăbește sau întărește câmpul magnetic de câteva sute de ori pe secundă. Rezultatul este o tensiune stabilă în rețeaua de bord, indiferent dacă motorul merge la ralanti sau la 5000 rot/min.",
    },
    {
      type: "p",
      text: "Când regulatorul cedează, o face în două feluri, ambele ușor de recunoscut. Dacă nu mai excită rotorul, alternatorul nu încarcă deloc și automobilul merge pe baterie până se oprește. Dacă rămâne permanent deschis, tensiunea urcă necontrolat: bateria fierbe și miroase acid, becurile se ard câte două-trei pe săptămână, iar blocurile electronice încep să dea erori fără legătură aparentă între ele.",
    },
    {
      type: "cta",
      title: "Releu regulator de tensiune pe stoc",
      text: "Regulatoare originale și licențiate pentru autoturisme, camioane și utilaj special, montate și verificate la stand.",
      label: "Vedeți piesa",
      href: "piese/releu-regulator",
    },

    { type: "h2", text: "Cum se verifică corect încărcarea" },
    {
      type: "p",
      text: "Verificarea corectă cere un voltmetru, nu o cheie de 10. Se măsoară tensiunea direct pe bornele bateriei: cu motorul oprit, apoi la ralanti, apoi cu motorul la circa 2000 rot/min și, la final, cu consumatorii porniți — faruri, ventilator, lunetă încălzită. Diferența dintre cele patru valori spune mai mult decât orice scânteie.",
    },
    {
      type: "p",
      text: "Metoda cu scoaterea bornei aparține epocii în care sub capotă nu exista nimic mai sensibil decât o bobină de inducție. Astăzi, în momentul în care bateria dispare din circuit, ea nu mai preia vârful de tensiune generat de alternator, iar acesta ajunge nefiltrat la calculatoare. Un motor care merge după deconectarea bornei nu dovedește că alternatorul este bun; dovedește doar că nu s-a ars nimic încă.",
    },
    {
      type: "cta",
      title: "Nu încarcă și nu știți de ce",
      text: "Verificăm alternatorul la stand și, dacă este nevoie, întreaga instalație de încărcare a automobilului.",
      label: "Reparații alternatoare",
      href: "servicii/reparatii-alternatoare",
    },
  ],
  seo: {
    title: "Sistemul de încărcare: alternatorul și cum lucrează",
    description: "Construcția alternatorului, principiul de funcționare, rolul releului regulator și cum se verifică încărcarea fără riscuri. Ghid de la Starter Plus, Chișinău.",
  },
};
