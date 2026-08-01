import type { Article } from "@/content/types";

export const article: Article = {
  title: "Alternator defect: semne, cauze și măsuri de precauție",
  short: "Alternator defect",
  excerpt: "Becul de baterie aprins, un vuiet nou dinspre curea, o baterie care se descarcă peste noapte — cum recunoașteți un alternator defect, de ce cedează și ce îl protejează.",
  lead: "Un alternator rareori se oprește dintr-odată. De obicei anunță problema cu zile sau săptămâni înainte, prin semne pe care majoritatea șoferilor le observă, dar le amână. Mai jos sunt semnele care merită luate în serios, cauzele reale ale defecțiunilor și regulile care țin agregatul în viață mai mult decât orice reparație.",
  date: "2021-05-14",
  readingMinutes: 5,
  tag: "Alternatoare",
  highlights: [
    "Becul de control al încărcării este primul semnal, dar nu spune ce s-a defectat.",
    "Zgomotul nou și vibrația crescută trimit aproape întotdeauna la rulmenți.",
    "Fum de sub capotă: opriți motorul și nu mai rulați pe traseu.",
    "Cauza cea mai frecventă rămâne uzura normală, urmată de supraîncărcarea rețelei de bord.",
    "Polaritatea inversată și pornirea de la un redresor distrug alternatorul într-o secundă.",
  ],
  body: [
    { type: "h2", text: "Cum recunoașteți o defecțiune la alternator" },
    {
      type: "p",
      text: "Primul indiciu vine din bord: becul de control al încărcării — simbolul bateriei — se aprinde în mers sau nu se stinge după pornirea motorului. Lampa este comandată automat și nu vă spune ce anume s-a defectat, doar că tensiunea din rețeaua de bord nu mai este cea corectă. De aici încolo se măsoară, nu se ghicește.",
    },
    {
      type: "p",
      text: "Al doilea grup de indicii sunt semnele exterioare și zgomotele. Dacă în timpul mersului simțiți că vibrația s-a intensificat sau auziți că alternatorul lucrează mai zgomotos decât de obicei, problema este cel mai probabil chiar în el: rulmenți uzați, fulie slăbită, rotor care atinge statorul.",
    },
    {
      type: "p",
      text: "Există și un scenariu clasic. Bateria se descarcă până la capăt, ajungeți să opriți în drum, dar motorul continuă să funcționeze. Ridicați capota și verificați starea rulmenților — în cele mai multe cazuri veți găsi urme clare de supraîncălzire. Dacă alternatorul este vizibil supraîncălzit, iar de sub capotă iese fum, opriți motorul imediat și duceți automobilul la atelier fără să mai rulați pe drum lung.",
    },
    {
      type: "table",
      head: ["Ce observați", "Unde căutăm de obicei"],
      rows: [
        ["Becul de baterie rămâne aprins la ralanti și se stinge în accelerație", "Curea slăbită sau uzată, perii colectoare consumate, releu regulator"],
        ["Becul se aprinde intermitent, farurile pulsează", "Contact slab pe borna de forță, o diodă defectă din punte"],
        ["Vuiet sau scârțâit care crește cu turația", "Rulmenții alternatorului, fulie cu amortizor blocată"],
        ["Bateria se descarcă peste noapte, deși ziua totul pare normal", "Scurgere prin puntea de diode, consum parazit în instalație, baterie la finalul vieții"],
        ["Miros de izolație arsă, fum de sub capotă", "Bobinaj statoric ars — motorul se oprește imediat"],
      ],
    },
    {
      type: "p",
      text: "Tabelul arată direcția, nu diagnosticul. Un alternator se verifică demontat, la stand: bobinajul statoric și cel al rotorului, colectorul, periile, puntea de diode, releul regulator, rulmenții și bucșele. Abia atunci se știe dacă se schimbă o piesă de câțiva euro sau tot agregatul.",
    },

    { type: "h2", text: "Care sunt cauzele defectării" },
    {
      type: "p",
      text: "Cauzele pot fi mai multe, iar cea mai frecventă este cea mai banală: timpul și durata de exploatare. La un automobil care circulă de mulți ani, reparația și înlocuirea pieselor uzate sunt un lucru normal, nu un accident.",
    },
    {
      type: "p",
      text: "A doua cauză este rulajul. Aici apare și situația inversă, pe care o vedem des: automobilul este încă nou, nu a trecut un an de la cumpărare, dar kilometrajul a ajuns deja la o cifră rotundă. Un alternator nu numără anii, numără orele de rotație și temperatura la care a lucrat.",
    },
    {
      type: "p",
      text: "A treia cauză este exploatarea greșită. Fie ați montat un sistem audio prea puternic, fie ați spălat motorul. Cel mai des însă defecțiunea vine din supraîncărcarea rețelei de bord cu consumatori: cu cât automobilul are mai multe dotări — climatizare, instalație audio, scaune și oglinzi încălzite, proiectoare suplimentare — cu atât crește probabilitatea ca alternatorul să cedeze. El nu se arde brusc; lucrează permanent la limită, se supraîncălzește, iar bobinajul și puntea de diode îmbătrânesc de câteva ori mai repede.",
    },
    {
      type: "p",
      text: "Defecțiunea poate fi provocată și de apa și murdăria ajunse sub capotă. Apa intră prin fantele de ventilație direct pe bobinaj și pe colector, iar praful amestecat cu vaselina veche formează un strat care ține căldura în agregat.",
    },
    {
      type: "p",
      text: "Aceasta nu este, desigur, întreaga listă. Printre cauze intră și defecțiunile altor componente ale sistemului de încărcare — cureaua, întinzătorul, cablul de forță, bateria însăși. De aceea, când un alternator ajunge la noi ars a doua oară în același an, verificăm întotdeauna și restul instalației.",
    },
    {
      type: "cta",
      title: "Cum este construit sistemul de încărcare",
      text: "Statorul, rotorul, puntea de diode și releul regulator — ce face fiecare și de ce contează tensionarea curelei.",
      label: "Citiți articolul",
      href: "articole/sistem-de-incarcare-alternator",
    },

    { type: "h2", text: "Măsuri de precauție" },
    {
      type: "p",
      text: "Ca orice utilaj, alternatorul are nevoie de îngrijire. În primul rând de o curățare periodică: ștergeți-l, îndepărtați murdăria și resturile de vaselină. Un agregat curat se răcește singur, iar un agregat înfundat lucrează cu 20–30 de grade mai cald decât ar trebui.",
    },
    {
      type: "ul",
      items: [
        "Când legați alternatorul la baterie, respectați polaritatea bornelor — nu inversați plusul cu minusul. În caz contrar sistemul se arde, iar puntea de diode nu are nicio șansă.",
        "Dacă la automobil se execută lucrări de sudură, deconectați obligatoriu alternatorul de la baterie. Curentul de sudură își caută drumul de întoarcere și îl găsește prin punte și prin blocurile electronice.",
        "Pornirea motorului cu ajutorul unui redresor este categoric interzisă. Un redresor nu este o baterie: dă vârfuri de tensiune pe care nimic din rețeaua de bord nu are de ce să le suporte.",
        "Nu exagerați cu lubrifierea. Rulmenții sunt deja unși cu cantitatea necesară pentru toată durata de exploatare, iar vaselina adăugată din exterior atrage praf și strică etanșarea.",
        "Nu îndreptați jetul de presiune spre alternator când spălați compartimentul motor și nu porniți motorul imediat după spălare.",
        "Verificați periodic cureaua de antrenare și starea fuliei. O curea care patinează încarcă bateria doar pe jumătate, iar becul din bord se aprinde abia mai târziu, când bateria este deja obosită.",
      ],
    },
    {
      type: "note",
      text: "Când porniți cu cabluri de la alt automobil, verificați clemele de două ori înainte de a atinge borna. Inversarea polarității arde puntea de diode aproape sigur, iar de multe ori ia cu ea și calculatorul de bord. Cele două secunde de verificare sunt cea mai ieftină piesă din tot alternatorul.",
    },
    {
      type: "cta",
      title: "Verificăm alternatorul la stand",
      text: "Demontăm, măsurăm și vă dăm devizul în ziua în care primim agregatul. Reparația efectuată are garanție 12 luni.",
      label: "Reparații alternatoare",
      href: "servicii/reparatii-alternatoare",
    },
  ],
  seo: {
    title: "Alternator defect: semne, cauze și precauții",
    description: "Cum recunoașteți un alternator defect, de ce se arde și ce măsuri îl protejează. Explicat de atelierul de alternatoare Starter Plus din Chișinău.",
  },
};
