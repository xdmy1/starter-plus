import type { Doc, DocMap } from "@/content/types";

const index: Doc = {
  title: "Informații utile",
  short: "Informații utile",
  excerpt: "Garanția, condițiile de exploatare, colaborarea cu persoane juridice, modelul de contract și rechizitele firmei — toate documentele Starter Plus într-un singur loc.",
  lead: "Aici este partea scrisă a activității noastre: cât ține garanția, ce o anulează, cum lucrăm cu firmele și companiile de transport, ce semnăm la contract și pe ce date bancare se face plata. Citiți înainte de a aduce agregatul — vă scutește de întrebări la ghișeu.",
  highlights: [
    "12 luni garanție la agregate noi și la reparațiile executate",
    "3–6 luni garanție la demaroare, alternatoare și piese second-hand",
    "Model de contract publicat integral, verificabil înainte de semnare",
    "Rechizite complete pentru facturare și plată prin transfer",
  ],
  body: [
    { type: "h2", text: "Ce găsiți în această secțiune" },
    {
      type: "ul",
      items: [
        "Garanție pentru reparațiile efectuate — termenele de garanție și ce anume acoperă fiecare.",
        "Condițiile garanției — cele opt situații de exploatare în care garanția se pierde, fiecare cu explicația ei.",
        "Pentru persoane juridice — condițiile pentru firme cu parc auto, companii de transport și service-uri auto.",
        "Contract de colaborare — modelul integral al contractului de antrepriză, cu toate termenele și penalitățile.",
        "Rechizite — adresa juridică, codul fiscal, contul, IBAN-ul și banca, pentru facturi și plăți prin transfer.",
      ],
    },
    { type: "h2", text: "Garanția, pe scurt" },
    {
      type: "table",
      head: ["Obiectul garanției", "Termen"],
      rows: [
        ["Demaroare și alternatoare noi", "12 luni"],
        ["Reparație executată în atelierul nostru", "12 luni"],
        ["Demaroare, alternatoare și piese second-hand", "3–6 luni"],
        ["Lucrări executate în baza contractului de colaborare", "6 luni de la semnarea actului"],
      ],
    },
    { type: "p", text: "Garanția este documentară și se acordă pentru toate tipurile de lucrări. Ea acoperă subansamblurile și piesele înlocuite de noi, cu o condiție: demarorul sau alternatorul să fie exploatat corect. Un agregat reparat bine nu cedează singur — cedează pentru că este alimentat de o baterie descărcată, învârtit prea mult sau pus să lucreze cu o coroană de volantă uzată." },
    { type: "h2", text: "Termenele pe care ni le asumăm" },
    { type: "p", text: "Pentru clienții persoane juridice, contractul de antrepriză fixează în scris ritmul de lucru: examinarea agregatului și devizul în termen de o zi de la primire, execuția în cel mult 2 zile de la aprobarea devizului, actul lucrărilor executate în două exemplare și plata prin transfer în 5 zile bancare." },
    { type: "note", text: "Păstrați actul lucrărilor executate și documentul de plată pe toată durata termenului de garanție: pe baza lor stabilim data de la care curge garanția." },
    {
      type: "cta",
      title: "Aveți o întrebare despre garanție sau despre contract?",
      text: "Sunați și descrieți cazul. Vă spunem ce intră în garanție și ce trebuie verificat la fața locului.",
      label: "Contactați-ne",
      href: "contacte",
    },
  ],
  seo: {
    title: "Informații utile: garanție, contract, rechizite",
    description: "Documentele Starter Plus din Chișinău: termene de garanție la demaroare și alternatoare, condițiile garanției, colaborarea cu firmele, contract și rechizite.",
  },
};

const items: DocMap = {
  "garantie-reparatii": {
    title: "Garanție pentru reparațiile efectuate",
    short: "Garanție reparații",
    excerpt: "12 luni garanție la demaroarele și alternatoarele noi și la reparațiile executate, 3–6 luni la agregatele și piesele second-hand.",
    lead: "„STARTER PLUS” SRL garantează funcționarea corectă a tuturor subansamblurilor și pieselor înlocuite, cu condiția respectării regulilor de exploatare a demarorului și a alternatorului.",
    highlights: [
      "12 luni la agregate noi și la lucrările executate",
      "3–6 luni la demaroare, alternatoare și piese second-hand",
      "6 luni la lucrările pe contract, din ziua semnării actului",
      "Garanție documentară pentru toate tipurile de lucrări",
    ],
    body: [
      { type: "h2", text: "Termene de garanție" },
      {
        type: "table",
        head: ["Obiectul garanției", "Termen"],
        rows: [
          ["Demaroare și alternatoare noi", "12 luni"],
          ["Reparație executată în atelierul nostru", "12 luni"],
          ["Demaroare, alternatoare și piese second-hand", "3–6 luni"],
          ["Lucrări executate în baza contractului de colaborare", "6 luni de la semnarea actului lucrărilor executate"],
        ],
      },
      { type: "p", text: "Termenul de 3–6 luni pentru agregatele și piesele second-hand se stabilește în funcție de starea concretă a piesei și se scrie pe document la predare, ca să nu existe interpretări ulterioare. Pentru lucrările executate în baza contractului de colaborare, cele 6 luni se calculează din ziua semnării actului lucrărilor executate." },
      { type: "h2", text: "Ce acoperă garanția" },
      {
        type: "ul",
        items: [
          "Piesele și subansamblurile înlocuite de noi: bendix, releu de cuplare, rotor de demaror, rotor de alternator, releu regulator de tensiune, perii colectoare și suport de perii, punte de diode, rulmenți și bucșe.",
          "Lucrările executate în atelier: bobinaj, strunjirea colectorului, montajul și reglajul agregatului.",
          "Agregatele noi și cele recondiționate vândute de noi.",
        ],
      },
      { type: "p", text: "Garanția este documentară: se confirmă prin actul lucrărilor executate și prin documentul de plată. Pentru clienții pe contract, actul se întocmește în două exemplare, câte unul pentru fiecare parte." },
      { type: "h2", text: "Ce nu acoperă" },
      { type: "p", text: "Garanția nu se aplică defectelor provocate din exteriorul agregatului. Cele mai frecvente sunt bateria de acumulator descărcată, clemele murdare sau oxidate și masa slabă, rotirea demarorului mai mult de 10 secunde la pornire și coroana volantei uzată. Lista completă are opt puncte, fiecare cu explicația lui, și este publicată separat." },
      { type: "note", text: "Dacă agregatul a fost demontat sau reparat în altă parte, nu mai putem stabili cauza reală a defectului. Aduceți-l la noi înainte de orice altă intervenție." },
      { type: "h2", text: "Cum se rezolvă un caz de garanție" },
      {
        type: "steps",
        items: [
          { title: "Anunțați-ne", text: "Sunați la 069 30 77 08 sau 079 30 77 08 și descrieți simptomul: cum se manifestă, de când și în ce condiții a apărut." },
          { title: "Aduceți agregatul și documentul", text: "Avem nevoie de agregat și de actul lucrărilor executate sau de documentul de plată, ca să identificăm lucrarea și data." },
          { title: "Diagnosticare", text: "Verificăm dacă defectul provine din lucrarea noastră sau din instalația electrică a automobilului. Verdictul îl comunicăm cu explicația tehnică, nu doar cu un verdict." },
          { title: "Remediere", text: "Dacă defectul intră în garanție, îl înlăturăm pe cheltuiala noastră. Pentru clienții pe contract, termenul este de 5 zile din ziua primirii notificării." },
        ],
      },
      {
        type: "faq",
        items: [
          { q: "Ce documente confirmă garanția?", a: "Actul lucrărilor executate și documentul de plată. Pentru persoanele juridice, actul se semnează în două exemplare, câte unul pentru fiecare parte." },
          { q: "Cât durează o reparație?", a: "Examinarea agregatului și devizul — în ziua primirii. Reparația propriu-zisă — până la 2 zile din momentul aprobării devizului. Acestea sunt termenele fixate în contractul de colaborare." },
          { q: "Garanția acoperă și piesele second-hand?", a: "Da, între 3 și 6 luni. Termenul exact depinde de starea piesei și se indică la predare." },
          { q: "Ce se întâmplă dacă defectul nu intră în garanție?", a: "Vă arătăm cauza, întocmim devizul reparației și decideți dumneavoastră. Nu începem nicio lucrare plătită fără aprobarea dumneavoastră." },
        ],
      },
      {
        type: "cta",
        title: "Citiți condițiile garanției",
        text: "Opt situații de exploatare care anulează garanția. Merită două minute înainte de a monta agregatul.",
        label: "Vedeți condițiile",
        href: "info/conditii-garantie",
      },
    ],
    seo: {
      title: "Garanție 12 luni la reparații de demaroare și alternatoare",
      description: "Starter Plus Chișinău: 12 luni garanție la demaroare și alternatoare noi și la reparațiile executate, 3–6 luni la agregate și piese second-hand. Cum se aplică.",
    },
  },

  "conditii-garantie": {
    title: "Condițiile garanției",
    short: "Condițiile garanției",
    excerpt: "Garanția acoperă piesele și subansamblurile înlocuite doar dacă regulile de exploatare sunt respectate — opt situații o anulează.",
    lead: "„STARTER PLUS” SRL garantează funcționarea corectă a tuturor subansamblurilor și pieselor înlocuite, cu condiția respectării regulilor de exploatare a demarorului. Situațiile de mai jos sunt strict interzise: fiecare dintre ele distruge agregatul din exterior, indiferent de calitatea reparației.",
    highlights: [
      "Opt situații care anulează garanția",
      "Cauza cea mai frecventă: bateria descărcată și clemele oxidate",
      "Maximum 10 secunde de rotire continuă la pornire",
      "Coroana volantei uzată distruge orice demaror, inclusiv nou",
    ],
    body: [
      { type: "h2", text: "Garanția se pierde dacă:" },
      {
        type: "ul",
        items: [
          "Demarorul este rotit simultan cu motorul în funcțiune (defectarea grupului de contacte al contactului de pornire, alimentarea electrică forțată a demarorului, scurtcircuit în instalația electrică etc.).",
          "Motorul este pornit cu o baterie de acumulator descărcată.",
          "Clemele de contact ale demarorului și ale bateriei de acumulator sunt murdare, corodate sau oxidate (inclusiv contactele de minus dintre motor și caroseria automobilului).",
          "Demarorul prezintă deteriorări mecanice exterioare.",
          "Demarorul lucrează în sarcină (pornirea motorului cu treapta de viteză cuplată etc.).",
          "Demarorul este rotit la pornirea motorului mai mult de 10 secunde (în cazul defecțiunilor sistemului de aprindere, ale aparaturii de alimentare cu combustibil etc.).",
          "În demaror pătrund lichide (ulei, combustibil, apă etc.).",
          "Demarorul este folosit când coroana volantei prezintă uzură.",
        ],
      },
      { type: "note", text: "Toate cele opt puncte au un lucru în comun: cauza este în afara demarorului. De aceea nu le tratăm ca formalități — sunt exact defectele pe care le vedem cel mai des pe masa de lucru." },
      { type: "h2", text: "Ce se distruge, concret" },
      {
        type: "table",
        head: ["Abaterea", "Ce cedează primul"],
        rows: [
          ["Baterie descărcată", "Bobinajele se supraîncălzesc, colectorul se arde, periile se consumă rapid"],
          ["Cleme oxidate, masă slabă", "Cădere de tensiune și curent mare: contactele releului de cuplare se ard"],
          ["Rotire peste 10 secunde", "Supraîncălzirea bobinajelor rotorului și ale statorului, izolația cedează"],
          ["Coroana volantei uzată", "Pinionul și bendixul se distrug la fiecare pornire"],
          ["Pornire cu treapta cuplată", "Suprasarcină pe grupul planetar și pe arborele rotorului"],
          ["Lichide în interior", "Scurtcircuit, colector îmbâcsit, rulmenți și bucșe blocate"],
          ["Rotire cu motorul pornit", "Rotorul este antrenat de motor și se distruge mecanic"],
        ],
      },
      { type: "h2", text: "Ce verificați înainte de montaj" },
      {
        type: "ul",
        items: [
          "Starea și tensiunea bateriei de acumulator, plus starea bornelor.",
          "Curățenia și strângerea cablurilor de plus și de minus, inclusiv masa dintre motor și caroserie.",
          "Coroana volantei: dinții uzați sau rupți distrug și un demaror nou, în câteva zile.",
          "Contactul de pornire și releul auxiliar de comandă.",
          "Sistemul de aprindere și alimentarea cu combustibil: dacă motorul nu pornește din primele secunde, demarorul este cel care plătește.",
        ],
      },
      { type: "p", text: "Dacă montați agregatul singur, faceți aceste verificări înainte. Dacă îl montăm noi, le facem oricum — dar o instalație electrică defectă rămâne responsabilitatea proprietarului, iar noi vă spunem ce anume trebuie reparat." },
      {
        type: "cta",
        title: "Nu știți ce a distrus agregatul?",
        text: "Diagnosticarea electrică arată dacă problema este în demaror, în alternator sau în instalația automobilului.",
        label: "Electrician auto și diagnosticare",
        href: "servicii/electrician-auto",
      },
    ],
    seo: {
      title: "Condițiile garanției: ce anulează garanția",
      description: "Cele opt situații de exploatare care anulează garanția la demaroare și alternatoare reparate la Starter Plus, Chișinău, și ce se distruge în fiecare caz.",
    },
  },

  "persoane-juridice": {
    title: "Pentru persoane juridice, companii de transport și service-uri auto",
    short: "Persoane juridice",
    excerpt: "Deservire operativă pentru parcuri auto mici și mari — autoturisme, camioane, utilaj de construcții și special — cu abordare individuală și sistem flexibil de reduceri.",
    lead: "Service-ul auto „STARTER PLUS” SRL propune un parteneriat avantajos, cu calitate garantată a deservirii. Lucrăm cu companii care au parcuri auto mici și mari — autoturisme, camioane, utilaj de construcții și special — cu abordare individuală pentru fiecare client și un sistem flexibil de reduceri.",
    highlights: [
      "Termene de reparație respectate strict, fixate în contract",
      "Autoturisme, camioane, utilaj de construcții și special",
      "Plată în numerar sau prin transfer bancar",
      "Garanție documentară pentru toate tipurile de lucrări",
    ],
    body: [
      { type: "p", text: "Fiind un service auto certificat, vă putem propune prețuri reduse la lucrări și la piese, fără a scădea nivelul execuției. Calitatea serviciilor ne permite să ne orientăm spre colaborări de durată, nu spre comenzi singulare." },
      { type: "h2", text: "Criteriile după care partenerii ne aleg" },
      {
        type: "ul",
        items: [
          "Respectarea strictă a termenelor de reparație",
          "Certificate pentru executarea tuturor lucrărilor de reparație",
          "Deservirea și reparația autoturismelor, camioanelor și a utilajului special",
          "Cost avantajos al deservirii și sistem flexibil de reduceri",
          "Formă comodă de plată: numerar și transfer bancar",
          "Garanție documentară pentru toate tipurile de lucrări",
        ],
      },
      { type: "h2", text: "Cum arată colaborarea" },
      {
        type: "steps",
        items: [
          { title: "Contractul", text: "Semnăm un contract de antrepriză pentru reparația demaroarelor și alternatoarelor. Modelul complet este publicat pe site — îl puteți verifica cu juristul dumneavoastră înainte de întâlnire." },
          { title: "Examinare și deviz", text: "Primim agregatul, îl examinăm și întocmim devizul în termen de o zi. Odată cu devizul vă comunicăm și termenul de execuție." },
          { title: "Reparația", text: "După aprobarea devizului, lucrarea se execută în cel mult 2 zile. Costul din devizul aprobat este definitiv și nu se revizuiește." },
          { title: "Act și plată", text: "Semnăm actul lucrărilor executate în două exemplare. Plata se face prin transfer, în termen de 5 zile bancare de la semnare." },
        ],
      },
      {
        type: "cta",
        title: "Contractul, integral, înainte de semnare",
        text: "Toate cele 12 capitole: termene, recepția lucrărilor, garanție, penalități, forță majoră.",
        label: "Citiți modelul de contract",
        href: "info/contract-colaborare",
      },
      { type: "h2", text: "Ce preluăm de la dumneavoastră" },
      {
        type: "ul",
        items: [
          "Reparația demaroarelor și alternatoarelor pentru autoturisme, camioane și utilaj special.",
          "Diagnosticarea și lucrările de electrician auto, inclusiv diagnosticarea computerizată.",
          "Livrarea de agregate noi și recondiționate, precum și de piese: bendix, releu de cuplare, rotor, fulie, releu regulator de tensiune, perii colectoare.",
          "Verificarea periodică a stării demaroarelor și alternatoarelor din parcul auto, ca să prindeți defectele înainte ca mașina să rămână în drum.",
        ],
      },
      { type: "p", text: "Încheind un contract cu noi, aveți posibilitatea să mențineți permanent parcul auto al întreprinderii în stare de funcționare. Lăsând controlul stării tehnice a demaroarelor, alternatoarelor și instalației electrice pe mâna maiștrilor noștri, primiți deservire calificată, cu garanție pe document." },
      { type: "note", text: "Pentru facturare avem nevoie de rechizitele dumneavoastră: denumirea întreprinderii, IDNO, adresa juridică și datele bancare. Rechizitele noastre sunt publicate în această secțiune." },
      {
        type: "cta",
        title: "Discutăm condițiile pentru parcul dumneavoastră",
        text: "Spuneți-ne câte unități aveți și ce tipuri de vehicule — pregătim condițiile și lista de reduceri.",
        label: "Contactați-ne",
        href: "contacte",
      },
    ],
    seo: {
      title: "Persoane juridice: parcuri auto, transport, service-uri",
      description: "Starter Plus Chișinău repară demaroare și alternatoare pentru firme cu parc auto: termene fixate în contract, reduceri, plată prin transfer, garanție documentară.",
    },
  },

  "contract-colaborare": {
    title: "Contract de colaborare",
    short: "Contract de colaborare",
    excerpt: "Modelul integral al contractului de antrepriză pentru reparația demaroarelor și alternatoarelor, semnat cu clienții persoane juridice.",
    lead: "Textul de mai jos este modelul pe care îl folosim cu persoanele juridice. Îl publicăm ca să îl puteți citi și verifica înainte de a veni la atelier; spațiile libere se completează la semnare.",
    highlights: [
      "Examinare și deviz în termen de o zi de la primirea agregatului",
      "Execuție în cel mult 2 zile de la aprobarea devizului",
      "6 luni garanție din ziua semnării actului lucrărilor executate",
      "Plată prin transfer, în 5 zile bancare de la semnarea actului",
      "Penalitate de 0,5% pe zi de întârziere, pentru ambele părți",
    ],
    body: [
      { type: "h2", text: "Contract de antrepriză nr. ____________" },
      { type: "p", text: "Pentru executarea lucrărilor de reparație a demaroarelor și alternatoarelor de automobil." },
      { type: "p", text: "„____” _________________________ (data)" },

      { type: "h2", text: "1. Părțile" },
      { type: "p", text: "Părțile contractului sunt:" },
      {
        type: "ul",
        items: [
          "a) Întreprinderea „Starter Plus” SRL, reprezentată de administratorul Vadim Orașan, care acționează în baza Statutului, denumită în continuare Executant.",
          "b) Întreprinderea _______________________, reprezentată de directorul _______________________________, care acționează în baza Statutului, denumită în continuare Beneficiar.",
        ],
      },

      { type: "h2", text: "2. Obiectul contractului" },
      { type: "p", text: "2.1. Obiectul contractului îl constituie raporturile dintre părți, în conformitate cu care Beneficiarul încredințează, iar Executantul își asumă obligația de a executa lucrări de reparație a demaroarelor și alternatoarelor automobilelor care aparțin Beneficiarului, iar Beneficiarul se obligă să recepționeze lucrările executate și să achite Executantului remunerația convenită, în conformitate cu contractul și cu legislația în vigoare." },

      { type: "h2", text: "3. Obligațiile părților" },
      { type: "h3", text: "3.1. Beneficiarul este obligat:" },
      {
        type: "ul",
        items: [
          "a) La necesitate, să prezinte Executantului toate documentele și informațiile necesare executării obligațiilor acestuia;",
          "b) La necesitate, să verifice executarea de către Executant a obligațiilor sale contractuale;",
          "c) Să recepționeze de la Executant lucrările executate în conformitate cu contractul și cu legislația;",
          "d) Să achite lucrările executate în conformitate cu contractul și cu legislația;",
          "e) Să suporte celelalte obligații prevăzute de contract și de legislație.",
        ],
      },
      { type: "h3", text: "3.2. Executantul este obligat:" },
      {
        type: "ul",
        items: [
          "a) Să preia de la Beneficiar toate documentele și informațiile necesare executării obligațiilor;",
          "b) Să execute lucrările de reparație a demaroarelor și alternatoarelor automobilelor Beneficiarului, folosind forțele și materialele proprii;",
          "c) Să execute lucrările la timp și calitativ, în conformitate cu contractul, cu legislația în vigoare, cu normele și regulile aplicabile;",
          "d) La solicitarea Beneficiarului, să îi prezinte un raport privind mersul executării obligațiilor contractuale;",
          "e) După finalizarea executării obligațiilor contractuale, să predea Beneficiarului toate lucrările executate, în conformitate cu contractul și cu legislația;",
          "f) Să suporte și celelalte obligații prevăzute de contract și de legislație.",
        ],
      },

      { type: "h2", text: "4. Modul și termenele de executare a lucrărilor" },
      { type: "p", text: "4.1. Înainte de începerea lucrărilor, Beneficiarul predă Executantului demarorul sau alternatorul supus reparației, pentru examinare și pentru întocmirea devizului lucrărilor care urmează să fie executate." },
      { type: "p", text: "4.2. În termen de o zi de la primirea demarorului sau alternatorului supus reparației, Executantul este obligat să îl examineze, să întocmească devizul lucrărilor care urmează să fie executate și să îl prezinte Beneficiarului pentru luare de cunoștință și coordonare. Concomitent cu devizul, Executantul este obligat să comunice Beneficiarului termenul necesar executării acestor lucrări, care începe să curgă din ziua aprobării devizului de către Beneficiar și nu trebuie să depășească 2 zile." },
      { type: "p", text: "4.3. După coordonarea devizului, Executantul este obligat să execute lucrările în termenul stabilit, cu respectarea prevederilor contractului, ale legislației și ale normelor și regulilor corespunzătoare." },
      { type: "p", text: "4.4. Din momentul aprobării devizului de către Beneficiar, acesta devine parte integrantă a prezentului contract." },

      { type: "h2", text: "5. Recepția lucrărilor" },
      { type: "p", text: "5.1. Recepția lucrărilor executate în conformitate cu contractul se efectuează prin întocmirea și semnarea de către părți a actului lucrărilor executate, întocmit de Executant în 2 (două) exemplare, câte unul pentru fiecare parte." },
      { type: "p", text: "5.2. În cazul depistării unor deficiențe în lucrarea executată, acestea se consemnează în actul de recepție a lucrărilor executate și se înlătură de către Executant în termen de 3 (trei) zile lucrătoare." },

      { type: "h2", text: "6. Obligațiile de garanție" },
      { type: "p", text: "6.1. Executantul acordă pentru lucrările executate în baza contractului o garanție de 6 luni, calculată din ziua semnării actului lucrărilor executate." },
      { type: "p", text: "6.2. În cazul depistării unor deficiențe ale lucrărilor executate în perioada termenului de garanție, Executantul este obligat să le înlăture pe cont propriu în termen de 5 zile din ziua primirii notificării corespunzătoare de la Beneficiar." },

      { type: "h2", text: "7. Remunerația și modul de plată" },
      { type: "p", text: "7.1. Beneficiarul este obligat să achite Executantului, pentru lucrările executate în conformitate cu contractul, remunerația în mărimea indicată în devizul corespunzător al lucrărilor care urmează să fie executate." },
      { type: "p", text: "7.2. Costul lucrărilor conform prezentului contract, indicat la punctul 7.1, este definitiv și nu poate fi revizuit." },
      { type: "p", text: "7.3. Plata lucrărilor executate în conformitate cu prezentul contract se efectuează prin virament, în termen de 5 zile bancare din ziua semnării actului lucrărilor executate, prin transferul de către Beneficiar al mijloacelor bănești în contul de decontare al Executantului." },

      { type: "h2", text: "8. Răspunderea părților" },
      { type: "p", text: "8.1. În caz de neexecutare sau de executare necorespunzătoare a prezentului contract, părțile poartă răspundere patrimonială conform legislației în vigoare a Republicii Moldova." },
      { type: "p", text: "8.2. În caz de întârziere a executării lucrărilor, Executantul este obligat să achite Beneficiarului o penalitate de 0,5% pentru fiecare zi de întârziere, calculată din valoarea totală a lucrărilor conform prezentului contract." },
      { type: "p", text: "8.3. În caz de întârziere a plății lucrărilor, Beneficiarul este obligat să achite Executantului o penalitate de 0,5% din suma neachitată, pentru fiecare zi de întârziere." },
      { type: "p", text: "8.4. În cazul deteriorării bunurilor Beneficiarului, Executantul se obligă să recupereze toate prejudiciile cauzate astfel, iar Beneficiarul are dreptul să rețină integral sau parțial valoarea prejudiciului cauzat din sumele datorate Executantului." },
      { type: "p", text: "8.5. Achitarea penalității și recuperarea prejudiciilor nu eliberează partea care a încălcat contractul de executarea obligațiilor sale." },

      { type: "h2", text: "9. Forța majoră" },
      { type: "p", text: "9.1. Se consideră forță majoră orice împrejurări care împiedică executarea obligațiilor și care depășesc controlul posibil al părții ce invocă forța majoră (și anume: incendiu, inundație, război, cutremur, faliment sau suspendarea temporară a activității băncilor deservente), însă numai pe durata acțiunii acestor împrejurări. Partea care invocă forța majoră trebuie să informeze imediat cealaltă parte despre începutul și despre încetarea acțiunii împrejurărilor de forță majoră. Pe durata acțiunii împrejurărilor de forță majoră, ambele părți au dreptul la neexecutarea obligațiilor lor conform prezentului contract." },
      { type: "p", text: "9.2. Termenele de executare a obligațiilor conform prezentului contract se amână proporțional duratei acțiunii împrejurărilor de forță majoră." },
      { type: "p", text: "9.3. Dovada corespunzătoare a existenței împrejurărilor de forță majoră invocate de una dintre părți drept motiv al neexecutării obligațiilor sale este certificatul Camerei de Comerț și Industrie a Republicii Moldova." },

      { type: "h2", text: "10. Soluționarea litigiilor" },
      { type: "p", text: "10.1. Litigiile apărute în legătură cu prezentul contract sau cu executarea acestuia se soluționează, pe cât posibil, de către părți pe calea negocierilor." },
      { type: "p", text: "10.2. În cazul încălcării de către una dintre părți a condițiilor prezentului contract, cealaltă parte expediază părții vinovate o pretenție scrisă, cu cerința de a înlătura încălcarea în termen de 5 (cinci) zile." },
      { type: "p", text: "10.3. În cazul în care una dintre părți nu este de acord cu rezultatele examinării pretenției, precum și în lipsa răspunsului la pretenție, litigiul se transmite pentru examinare instanței de judecată competente a Republicii Moldova." },

      { type: "h2", text: "11. Dispoziții finale" },
      { type: "p", text: "11.1. Beneficiarul are dreptul să rezilieze prezentul contract cu condiția notificării prealabile a Executantului, achitând remunerația Executantului proporțional volumului lucrărilor executate și recepționate." },
      { type: "p", text: "11.2. Completările și modificările la prezentul contract se semnează de către părți și au putere juridică egală." },
      { type: "p", text: "11.3. În scopul reglementării unor aspecte separate ale realizării prezentului contract, părțile semnează anexe, care se întocmesc sub formă de contracte suplimentare, acorduri, procese-verbale sau condiții speciale la contract. Documentele menționate au aceeași putere juridică ca prezentul contract și sunt parte integrantă a acestuia." },
      { type: "p", text: "11.4. Prezentul contract este întocmit în două exemplare, cu putere juridică egală." },
      { type: "p", text: "11.5. Prezentul contract intră în vigoare din momentul semnării lui de către ambele părți și acționează până la executarea deplină de către părți a obligațiilor asumate." },

      { type: "h2", text: "12. Notificări și adrese" },
      { type: "p", text: "12.1. Toate notificările expediate de părți una celeilalte în conformitate cu prezentul contract pot fi trimise prin fax, prin poștă electronică sau prin scrisoare recomandată și se consideră primite în următoarea zi lucrătoare după expediere, în cazul faxului sau al poștei electronice, iar în cazul scrisorilor recomandate — la data ștampilei poștale de pe plic." },
      { type: "p", text: "12.2. Adresele și rechizitele părților:" },
      {
        type: "table",
        head: ["EXECUTANT", "BENEFICIAR"],
        rows: [
          ["„STARTER PLUS” SRL", "______________________________________"],
          ["Moldova, mun. Chișinău, str. Uzinelor 104", "______________________________________"],
          ["IDNO 1009600031813", "______________________________________"],
          ["B.C. „Moldova-Agroindbank” S.A., fil. Buiucani", "______________________________________"],
          ["SWIFT AGRNMD2X832", "______________________________________"],
          ["c/d 22511403112", "______________________________________"],
          ["IBAN MD93AG000000022511403112", "______________________________________"],
          ["mob. (+373) 69 30 77 08", "______________________________________"],
          ["E-mail: starter-plus@mail.ru", "______________________________________"],
          ["Director Vadim Orașan", "Director ______________________"],
          ["(semnătura și ștampila)", "(semnătura și ștampila)"],
        ],
      },
      { type: "note", text: "Acesta este un model. Textul final se semnează la atelier, în două exemplare cu putere juridică egală, după completarea datelor Beneficiarului. Devizul aprobat devine parte integrantă a contractului." },
      {
        type: "cta",
        title: "Vreți să semnăm contractul?",
        text: "Treceți pe la atelier, str. Uzinelor 104 (Lunca Bâcului 35 A) sau sunați și pregătim exemplarele.",
        label: "Contactați-ne",
        href: "contacte",
      },
    ],
    seo: {
      title: "Contract de colaborare: model de contract de antrepriză",
      description: "Modelul integral al contractului semnat de Starter Plus Chișinău cu persoanele juridice: termene, recepția lucrărilor, garanție de 6 luni, penalități, forță majoră.",
    },
  },

  rechizite: {
    title: "Rechizite",
    short: "Rechizite",
    excerpt: "Datele juridice și bancare ale „STARTER PLUS” SRL, pentru facturi, contracte și plăți prin transfer.",
    lead: "Mai jos sunt datele complete ale întreprinderii. Le puteți folosi pentru facturare, pentru contract sau pentru un ordin de plată. Dacă aveți nevoie de ele pe hârtie, cu ștampilă, le pregătim la atelier.",
    highlights: [
      "IDNO 1009600031813",
      "IBAN MD93AG000000022511403112",
      "B.C. Moldova-Agroindbank S.A., fil. Buiucani",
      "Plată în numerar sau prin transfer bancar",
    ],
    body: [
      { type: "h2", text: "Date juridice și bancare" },
      {
        type: "table",
        head: ["Denumire", "Date"],
        rows: [
          ["Denumirea completă", "„STARTER PLUS” SRL"],
          ["Adresa juridică", "mun. Chișinău, str. Uzinelor 104"],
          ["Cod fiscal / IDNO", "1009600031813"],
          ["Cont de decontare (c/d)", "22511403112"],
          ["IBAN", "MD93AG000000022511403112"],
          ["Cod TVA", "0507017"],
          ["Banca", "B.C. „Moldova-Agroindbank” S.A., fil. Buiucani"],
          ["SWIFT", "AGRNMD2X832"],
          ["Telefoane", "069 30 77 08, 079 30 77 08"],
          ["E-mail", "starter-plus@mail.ru"],
          ["Director", "Vadim Orașan"],
        ],
      },
      { type: "h2", text: "Atelierul" },
      { type: "p", text: "Atelierul se află la aceeași adresă cu sediul juridic: mun. Chișinău, str. Uzinelor 104. Adresa apare și ca Lunca Bâcului 35 A." },
      {
        type: "table",
        head: ["Zi", "Program"],
        rows: [
          ["Luni – Vineri", "09:00 – 18:00"],
          ["Sâmbătă", "09:00 – 16:00"],
          ["Duminică", "zi liberă"],
        ],
      },
      { type: "h2", text: "La ce număr sunați" },
      {
        type: "table",
        head: ["Telefon", "Pentru ce"],
        rows: [
          ["069 30 77 08", "Reparația demaroarelor și alternatoarelor, piese"],
          ["079 30 77 08", "Reparația demaroarelor și alternatoarelor, piese"],
          ["079 10 77 08", "Electrician auto și diagnosticare computerizată"],
        ],
      },
      { type: "note", text: "Pentru facturare pe firmă, trimiteți-ne rechizitele dumneavoastră: denumirea, IDNO, adresa juridică și datele bancare. Actul lucrărilor executate se întocmește în două exemplare, câte unul pentru fiecare parte." },
      {
        type: "cta",
        title: "Lucrați cu noi pe contract",
        text: "Condiții pentru firme cu parc auto, companii de transport și service-uri auto.",
        label: "Pentru persoane juridice",
        href: "info/persoane-juridice",
      },
    ],
    seo: {
      title: "Rechizite STARTER PLUS SRL: date juridice și bancare",
      description: "Rechizitele complete ale STARTER PLUS SRL, Chișinău, str. Uzinelor 104: IDNO, cont de decontare, IBAN, cod TVA, banca, SWIFT, e-mail și telefoane de contact.",
    },
  },
};

export const info: { index: Doc; items: DocMap } = { index, items };
