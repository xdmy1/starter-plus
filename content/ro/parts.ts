import type { Doc, DocMap } from "@/content/types";

const index: Doc = {
  title: "Piese și componente pentru demaroare și alternatoare",
  short: "Piese și componente",
  excerpt: "Stoc permanent de piese pentru demaroare și alternatoare de autoturisme, camioane și utilaj special, la Chișinău, pe str. Uzinelor 104.",
  lead: "Zece categorii, un singur depozit. Vindem atât agregate complete — demaroare și alternatoare noi sau recondiționate — cât și piesa exactă care s-a defectat: bendix, rotor, releu de cuplare, fulie, releu regulator, perii. Dacă nu știți ce anume a cedat, aduceți agregatul la atelier: îl testăm pe banc și vă spunem ce trebuie schimbat.",
  highlights: [
    "Piese pentru demaroare și alternatoare de autoturisme, camioane și utilaj special",
    "Mărci originale — BOSCH, VALEO, DENSO, DELCO — și echivalente licențiate",
    "Agregate noi și recondiționate, cu garanție 12 luni",
    "Identificare pe loc, după piesa veche sau după marcajul de pe carcasă",
  ],
  body: [
    { type: "h2", text: "Cele două familii de piese" },
    {
      type: "ul",
      items: [
        "Partea demarorului: demaroare complete, bendixuri, rotoare de demaror, relee de cuplare.",
        "Partea alternatorului: alternatoare complete, rotoare de alternator, fulii, relee regulatoare de tensiune.",
        "Comune ambelor: periile colectoare și suporturile de perii, plus bucșele, rulmenții, capacele și kiturile de reparație din categoria „alte piese”.",
      ],
    },
    { type: "h2", text: "Ca să găsim piesa din prima" },
    {
      type: "steps",
      items: [
        {
          title: "Marcajul de pe agregat",
          text: "Numărul turnat sau ștanțat pe carcasa demarorului ori a alternatorului identifică piesa fără dubiu. O fotografie clară a plăcuței ne este suficientă.",
        },
        {
          title: "Datele automobilului",
          text: "Marca, modelul, anul, motorul și tensiunea de bord — 12 V sau 24 V. Pentru utilaj special, tipul mașinii și marca motorului.",
        },
        {
          title: "Piesa veche",
          text: "Cel mai sigur reper. Comparăm pe loc diametrele, lungimile, numărul de dinți și canelurile și vă dăm echivalentul din stoc.",
        },
      ],
    },
    {
      type: "p",
      text: "Nu vindem piese pe care nu le montăm. Fiecare categorie de mai jos este una pe care o folosim zilnic în atelier, la reparații de demaroare și alternatoare — de la autoturisme până la camioane și utilaj special.",
    },
    {
      type: "note",
      text: "Garanție 12 luni la agregatele noi și la reparațiile executate, 3–6 luni la agregatele și piesele second-hand.",
    },
    {
      type: "cta",
      title: "Nu găsiți categoria potrivită?",
      text: "Sunați și descrieți simptomul sau aduceți agregatul la str. Uzinelor 104 (Lunca Bâcului 35 A).",
      label: "Contacte și program",
      href: "contacte",
    },
  ],
  seo: {
    title: "Piese pentru demaroare și alternatoare în Chișinău",
    description: "Catalog de piese pentru demaroare și alternatoare: bendixuri, rotoare, relee de cuplare, fulii, regulatoare de tensiune, perii. Stoc în Chișinău, Uzinelor 104.",
  },
};

const items: DocMap = {
  demaroare: {
    title: "Demaroare",
    short: "Demaroare",
    excerpt: "Demaroare noi și recondiționate pentru autoturisme, camioane și utilaj special, plus toate piesele de schimb pentru ele.",
    lead: "Demarorul lucrează una-două secunde la fiecare pornire, dar în acele secunde trage câteva sute de amperi și rotește un motor rece. De aceea cedează rar din vechime și aproape întotdeauna din cauza unei piese anume: bendix, releu de cuplare, perii, rotor. Vindem demaroare complete, noi sau recondiționate, și reparăm demarorul dumneavoastră atunci când are sens economic.",
    highlights: [
      "Demaroare noi și recondiționate, cu garanție 12 luni",
      "Testare pe banc înainte de orice recomandare",
      "Piese separate pentru demaror, din stoc",
      "Autoturisme, camioane, utilaj special",
    ],
    body: [
      { type: "h2", text: "Semnele că demarorul cedează" },
      {
        type: "ul",
        items: [
          "Un clic sec la răsucirea cheii și nimic mai departe — de obicei contactele releului de cuplare.",
          "Demarorul se învârte în gol, fără să antreneze motorul: bendixul nu mai cuplează.",
          "Rotire lentă, chinuită, deși bateria este încărcată și bornele sunt curate.",
          "Zgomot metalic de raclare la pornire — pinionul sau coroana volantei sunt deteriorate.",
          "Demarorul continuă să funcționeze după ce motorul a pornit: plunjerul releului rămâne blocat.",
          "Miros de izolație arsă, cablu de alimentare fierbinte sau siguranță arsă.",
        ],
      },
      { type: "h2", text: "Reparație sau agregat nou" },
      {
        type: "p",
        text: "Dacă automobilul are mulți ani de exploatare și demarorul este puternic deteriorat, un agregat nou sau recondiționat costă mai puțin decât suma pieselor necesare reparației. Îl demontăm, îl testăm pe banc și punem cele două cifre față în față: cât costă piesele de schimb și cât costă un demaror complet. Decizia rămâne a dumneavoastră, dar o luați cu date în față.",
      },
      { type: "h2", text: "Mărci disponibile" },
      {
        type: "ul",
        items: [
          "Originale: BOSCH, VALEO, DENSO, DELCO.",
          "Licențiate: CARGO, MAGNETI MARELLI, MEA, WAI, BYPART, TYPER.",
          "Demaroare recondiționate, verificate pe banc înainte de livrare.",
          "Variante de 12 V și 24 V, clasice și cu reductor.",
        ],
      },
      {
        type: "cta",
        title: "Nu sunteți sigur dacă merită reparat?",
        text: "Punem demarorul pe banc, măsurăm curentul absorbit și comportamentul în sarcină, apoi vă spunem ce se schimbă și ce nu.",
        label: "Reparații demaroare",
        href: "servicii/reparatii-demaroare",
      },
    ],
    seo: {
      title: "Demaroare noi și recondiționate — Chișinău",
      description: "Demaroare noi și recondiționate pentru autoturisme, camioane și utilaj special, cu garanție 12 luni. Diagnosticare pe banc și piese de schimb, Chișinău.",
    },
  },

  alternatoare: {
    title: "Alternatoare",
    short: "Alternatoare",
    excerpt: "Alternatoare noi și recondiționate pentru autoturisme, camioane și utilaj special, cu testare la sarcină înainte de livrare.",
    lead: "Bateria pornește motorul, alternatorul alimentează tot restul: aprinderea, injecția, ventilatoarele, luminile — și reîncarcă bateria din mers. Când alternatorul se oprește, mai aveți exact atâta drum cât ține acumulatorul. Ținem în stoc alternatoare complete, noi și recondiționate, dar și fiecare piesă din interiorul lor.",
    highlights: [
      "Alternatoare noi și recondiționate, cu garanție 12 luni",
      "Testare la sarcină, la turații diferite, înainte de livrare",
      "Punți de diode, regulatoare, rulmenți și perii separat",
      "Sisteme de 12 V și 24 V",
    ],
    body: [
      { type: "h2", text: "Semnele unui alternator care nu mai încarcă" },
      {
        type: "ul",
        items: [
          "Martorul de baterie rămâne aprins sau se aprinde la ralanti și se stinge în accelerație.",
          "Farurile pălesc la ralanti și se intensifică odată cu turația.",
          "Bateria este descărcată dimineața, deși este nouă și nu ați lăsat consumatori aprinși.",
          "Tensiunea la bornele bateriei, cu motorul pornit, iese din plaja normală de circa 13,8–14,6 V la un sistem de 12 V.",
          "Țiuit sau huruit din zona curelei, care crește cu turația: rulmenți sau fulie.",
          "Supraîncărcare — electrolit care fierbe, becuri arse des, miros acru în compartimentul motor.",
        ],
      },
      { type: "h2", text: "Ce se repară și ce se înlocuiește" },
      {
        type: "p",
        text: "Puntea de diode, releul regulator, periile și rulmenții sunt piese de schimb obișnuite: se înlocuiesc, iar alternatorul își revine complet. Un bobinaj de stator ars, un rotor cu excitația întreruptă sau un capac de aluminiu cu locașurile de rulment ovalizate schimbă calculul — aici un agregat nou ori recondiționat este de regulă mai ieftin decât reparația. Diagnosticarea pe banc arată în ce categorie intră alternatorul dumneavoastră.",
      },
      { type: "h2", text: "Mărci disponibile" },
      {
        type: "ul",
        items: [
          "Originale: BOSCH, VALEO, DENSO, DELCO.",
          "Licențiate: CARGO, MAGNETI MARELLI, ORME, MEA, WAI, BYPART, TYPER.",
          "Alternatoare recondiționate, testate la sarcină înainte de livrare.",
          "Variante de 12 V și 24 V, cu fulie fixă sau cu cuplaj unidirecțional.",
        ],
      },
      {
        type: "cta",
        title: "Verificați încărcarea înainte să schimbați bateria",
        text: "O baterie care „moare” la două luni este de obicei simptomul, nu cauza. Testăm alternatorul la banc și vă arătăm curentul debitat și tensiunea reglată.",
        label: "Reparații alternatoare",
        href: "servicii/reparatii-alternatoare",
      },
    ],
    seo: {
      title: "Alternatoare noi și recondiționate — Chișinău",
      description: "Alternatoare noi și recondiționate pentru autoturisme, camioane și utilaj special. Testare la sarcină, garanție 12 luni, piese de schimb în Chișinău.",
    },
  },

  bendix: {
    title: "Bendix — cuplaj de demaror",
    short: "Bendix",
    excerpt: "Bendixuri pentru demaroare de autoturisme, camioane și utilaj special, din stoc, plus recondiționarea bendixului dumneavoastră cu garanție.",
    lead: "Bendixul este singura piesă din demaror care transmite cuplul într-un sens și îl întrerupe în celălalt: împinge pinionul în coroana volantei, rotește motorul, iar în clipa în care motorul pornește și volanta o ia înainte, decuplează. Toate șocurile de pornire trec prin el, de aceea se uzează primul.",
    highlights: [
      "Bendixuri originale și licențiate, în stoc",
      "Recondiționarea bendixului dumneavoastră, cu garanție",
      "Pentru demaroare clasice și cu reductor, 12 V și 24 V",
      "Verificăm coroana volantei la fiecare montaj",
    ],
    body: [
      { type: "h2", text: "Cum se anunță un bendix uzat" },
      {
        type: "steps",
        items: [
          {
            title: "Demarorul se învârte în gol",
            text: "Auziți motorul electric accelerând liber, dar motorul termic nu se rotește. Cuplajul patinează — bendixul nu mai transmite cuplul.",
          },
          {
            title: "Zgomot metalic scurt la cheie",
            text: "Pinionul lovește coroana volantei fără să intre complet. Dacă se repetă, deteriorează și coroana, iar reparația devine mult mai scumpă.",
          },
          {
            title: "Pornire de la a doua sau a treia încercare",
            text: "Cuplajul prinde intermitent, mai ales pe frig, când vaselina s-a întărit și rolele se blochează în locașuri.",
          },
          {
            title: "Un șuierat care continuă după pornire",
            text: "Bendixul nu decuplează și este antrenat de volantă. Ignorat, ajunge să rupă rotorul demarorului.",
          },
        ],
      },
      { type: "h2", text: "Recondiționare sau piesă nouă" },
      {
        type: "p",
        text: "Bendixul este o piesă de uzură, dar nu întotdeauna trebuie cumpărat nou: recondiționăm calitativ bendixul dumneavoastră, cu garanție, atât timp cât pinionul și corpul cuplajului mai au material. La montaj verificăm obligatoriu coroana volantei — pe dinți ciobiți, un bendix nou se distruge în câteva săptămâni.",
      },
      { type: "h2", text: "Mărci disponibile" },
      {
        type: "ul",
        items: [
          "Originale: BOSCH, VALEO, DENSO, DELCO.",
          "Licențiate: ZEN, CARGO, MAGNETI MARELLI, BYPART, TYPER, MEA, WAI, GHIBAUDI.",
          "Bendixuri pentru demaroare clasice și pentru demaroare cu reductor, la 12 V și 24 V.",
        ],
      },
      {
        type: "cta",
        title: "Aduceți bendixul la verificare",
        text: "Îl demontăm, controlăm cuplajul, jocul axial și dinții pinionului și vă spunem dacă se recondiționează sau se înlocuiește.",
        label: "Reparații demaroare",
        href: "servicii/reparatii-demaroare",
      },
    ],
    seo: {
      title: "Bendix pentru demaror — vânzare și recondiționare",
      description: "Bendixuri pentru demaroare de autoturisme, camioane și utilaj special: BOSCH, VALEO, DENSO, ZEN, CARGO. Recondiționare cu garanție, în Chișinău.",
    },
  },

  "rotor-demaror": {
    title: "Rotor de demaror",
    short: "Rotor de demaror",
    excerpt: "Rotoare (indusuri) pentru demaroare de autoturisme, camioane și utilaj special, cu verificarea colectorului și a bobinajului la banc.",
    lead: "Rotorul, numit și indus, este arborele pe care stau bobinajul și colectorul. Prin el trec câteva sute de amperi la fiecare pornire, iar căldura, scânteile de la perii și șocurile bendixului îl distrug în moduri ușor de recunoscut: colector ars, lamele desprinse, spire în scurtcircuit, fusuri uzate.",
    highlights: [
      "Rotoare originale și licențiate, pentru 12 V și 24 V",
      "Măsurăm izolația și scurtcircuitele înainte de verdict",
      "Strunjirea colectorului acolo unde mai are material",
      "Comparăm pe loc arborele, canelurile și numărul de dinți",
    ],
    body: [
      { type: "h2", text: "Simptome care indică rotorul" },
      {
        type: "ul",
        items: [
          "Demarorul se rotește lent și absoarbe curent anormal de mare, cu bateria plină — spire în scurtcircuit.",
          "Scântei puternice, circulare, la perii, și praf de grafit pe capac.",
          "Colector uzat în trepte, cu lamele arse sau desprinse de pe arbore.",
          "Miros de lac de izolație ars după câteva încercări de pornire.",
          "Joc radial pe arbore: bobinajul freacă statorul, iar pe pachetul de fier apar urme lucioase.",
          "Caneluri deteriorate în zona bendixului sau arbore torsionat.",
        ],
      },
      { type: "h2", text: "Se repară sau se schimbă" },
      {
        type: "p",
        text: "Colectorul se poate strunji și curăța dacă mai are material și izolația dintre lamele este intactă — o reparație normală, ieftină, care redă contactul periilor. Un bobinaj cu masă sau cu spire în scurtcircuit, lamelele desprinse ori arborele îndoit înseamnă rotor nou: rebobinarea unui indus de demaror nu se justifică economic. Verdictul se dă la banc, prin măsurarea izolației și a scurtcircuitelor, nu din ochi.",
      },
      { type: "h2", text: "Mărci disponibile" },
      {
        type: "ul",
        items: [
          "Originale: BOSCH, VALEO, DENSO, DELCO.",
          "Licențiate: CARGO, MAGNETI MARELLI, ORME, BYPART, TYPER, MEA, WAI.",
          "Rotoare pentru demaroare de autoturisme, camioane și utilaj special, în stoc.",
        ],
      },
      {
        type: "note",
        text: "Aduceți rotorul vechi sau marcajul de pe carcasa demarorului. Lungimea arborelui, canelurile, diametrul fusurilor și numărul de lamele diferă între variante care arată identic.",
      },
      {
        type: "cta",
        title: "Nu ghiciți care rotor se potrivește",
        text: "Îl comparăm cu piesa veche la tejghea sau demontăm demarorul și verificăm totul la banc — inclusiv statorul și periile.",
        label: "Reparații demaroare",
        href: "servicii/reparatii-demaroare",
      },
    ],
    seo: {
      title: "Rotor de demaror (indus) — piese în Chișinău",
      description: "Rotoare de demaror pentru autoturisme, camioane și utilaj special: BOSCH, VALEO, DENSO, CARGO, ORME. Verificare la banc și strunjirea colectorului, Chișinău.",
    },
  },

  "releu-cuplare": {
    title: "Releu de cuplare (solenoid) pentru demaror",
    short: "Releu de cuplare",
    excerpt: "Relee de cuplare pentru demaroare de autoturisme, camioane și utilaj special, plus kituri de reparație practic pentru toate modelele.",
    lead: "Releul de cuplare face două lucruri simultan: cu bobinajul de atragere împinge furca, iar furca duce bendixul în coroana volantei; la capătul cursei, închide contactul de putere dintre baterie și motorul electric. Contactul de pornire comandă doar releul — curentul mare trece prin el, și de acolo vine majoritatea defectelor.",
    highlights: [
      "Relee de cuplare originale și licențiate, 12 V și 24 V",
      "Kituri de reparație în stoc pentru aproape toate modelele",
      "Reparație cu garanție, când bobinajele sunt întregi",
      "Verificăm și căderea de tensiune pe circuitul de comandă",
    ],
    body: [
      { type: "h2", text: "Cum arată defectele releului" },
      {
        type: "steps",
        items: [
          {
            title: "Un clic, apoi liniște",
            text: "Plunjerul se mișcă, dar contactul de putere nu mai conduce: pastila și bulonii de contact sunt arși. Cel mai frecvent defect al releului.",
          },
          {
            title: "Clicuri repetate, fără rotire",
            text: "Bobinajul de reținere sau alimentarea de comandă este slăbită. Căderea de tensiune pe cablu, pe releul auxiliar ori pe contactul de pornire face plunjerul să oscileze.",
          },
          {
            title: "Demarorul nu se oprește la eliberarea cheii",
            text: "Contactul a rămas lipit sau plunjerul s-a blocat. Deconectați bateria imediat: demarorul se arde în câteva zeci de secunde.",
          },
          {
            title: "Bendixul intră doar pe jumătate",
            text: "Cursa plunjerului s-a modificat din cauza uzurii pastilei, iar pinionul raclează coroana în loc să o antreneze.",
          },
        ],
      },
      { type: "h2", text: "Reparație cu kit sau releu nou" },
      {
        type: "p",
        text: "Majoritatea releelor se repară. Avem în stoc kituri de reparație — buloni și pastilă de contact — practic pentru toate modelele de automobile, iar reparația are sens atât timp cât bobinajele sunt întregi și corpul nu a fost tăiat. Un bobinaj ars, un corp fisurat sau un plunjer uzat pe toată lungimea cer releu complet.",
      },
      { type: "h2", text: "Mărci disponibile" },
      {
        type: "ul",
        items: [
          "Originale: BOSCH, VALEO, DENSO, DELCO.",
          "Licențiate: ZM, CARGO, BYPART, TYPER, MEA, WAI.",
          "Kituri de reparație pentru relee de 12 V și 24 V, inclusiv pentru demaroare de camion.",
        ],
      },
      {
        type: "cta",
        title: "Un clic și mașina nu pornește?",
        text: "Aduceți demarorul sau automobilul: separăm în câteva minute un releu ars de o cădere de tensiune pe cablaj — două reparații complet diferite.",
        label: "Reparații demaroare",
        href: "servicii/reparatii-demaroare",
      },
    ],
    seo: {
      title: "Releu de cuplare demaror — solenoid și kituri",
      description: "Relee de cuplare pentru demaroare: BOSCH, VALEO, DENSO, ZM, CARGO. Kituri de reparație pentru aproape toate modelele și reparație la atelier în Chișinău.",
    },
  },

  "rotor-alternator": {
    title: "Rotor de alternator",
    short: "Rotor de alternator",
    excerpt: "Rotoare de alternator pentru autoturisme, camioane și utilaj special, cu verificarea bobinajului de excitație și a inelelor colectoare.",
    lead: "Rotorul alternatorului este electromagnetul care creează câmpul: o bobină de excitație prinsă între doi semipoli cu gheare, alimentată prin două inele colectoare. Dacă bobina se întrerupe sau inelele nu mai fac contact, alternatorul nu produce nimic, oricât de bune ar fi puntea de diode și releul regulator.",
    highlights: [
      "Rotoare originale și licențiate, pentru 12 V și 24 V",
      "Măsurăm rezistența excitației și izolația față de masă",
      "Înlocuim sau strunjim inelele colectoare",
      "Echilibrare după prelucrarea mecanică",
    ],
    body: [
      { type: "h2", text: "Când vina este a rotorului" },
      {
        type: "ul",
        items: [
          "Alternatorul nu încarcă deloc, deși periile și releul regulator sunt noi.",
          "Rezistența bobinajului de excitație, măsurată pe inele, este întreruptă sau mult sub valoarea normală.",
          "Inele colectoare uzate, ovalizate sau înnegrite, cu scântei vizibile la perii.",
          "Încărcare intermitentă, care apare și dispare la ralanti ori pe denivelări.",
          "Zgomot și joc: locașurile de rulment de pe arbore sunt uzate și rotorul freacă statorul.",
          "Urme de frecare între ghearele rotorului și pachetul statoric, însoțite de miros de lac ars.",
        ],
      },
      { type: "h2", text: "Ce se poate salva" },
      {
        type: "p",
        text: "Inelele colectoare se înlocuiesc sau se strunjesc, iar după prelucrare rotorul se verifică la echilibrare — este o reparație corectă și frecventă. O bobină de excitație arsă, cu masă, sau lipiturile desprinse de sub inele nu se rebobinează economic: se pune rotor nou. Diferența dintre cele două cazuri se stabilește în câteva minute, cu ohmmetrul și proba de izolație.",
      },
      { type: "h2", text: "Mărci disponibile" },
      {
        type: "ul",
        items: [
          "Originale: BOSCH, VALEO, DENSO, DELCO.",
          "Licențiate: CARGO, MAGNETI MARELLI, ORME, BYPART, TYPER, MEA, WAI.",
          "Rotoare pentru alternatoare de autoturisme, camioane și utilaj special.",
        ],
      },
      {
        type: "note",
        text: "Rotorul se alege pe dimensiuni: diametrul pachetului, lungimea arborelui, numărul de poli, filetul fuliei și tensiunea de bord. Cel mai rapid este să aduceți rotorul vechi sau numărul de pe alternator.",
      },
      {
        type: "cta",
        title: "Rotor nou sau alternator recondiționat?",
        text: "Uneori piesa costă aproape cât un agregat complet testat. Facem ambele calcule și vă arătăm care variantă iese mai ieftin.",
        label: "Reparații alternatoare",
        href: "servicii/reparatii-alternatoare",
      },
    ],
    seo: {
      title: "Rotor de alternator — piese pentru alternatoare",
      description: "Rotoare de alternator pentru autoturisme, camioane și utilaj special: BOSCH, VALEO, DENSO, CARGO, ORME. Verificarea excitației și a inelelor, Chișinău.",
    },
  },

  "fulie-alternator": {
    title: "Fulie de alternator",
    short: "Fulie de alternator",
    excerpt: "Fulii fixe și cu cuplaj unidirecțional pentru alternatoare, de la INA, LUK, SNR, ZEN, CARGO și WAI.",
    lead: "Fulia leagă alternatorul de cureaua de accesorii. Pe motoarele moderne, mai ales diesel, ea nu mai este un simplu disc: are un cuplaj unidirecțional care preia pulsațiile arborelui cotit. Când acest cuplaj se blochează sau patinează, cureaua, întinzătorul și rulmenții alternatorului plătesc factura.",
    highlights: [
      "Fulii cu cuplaj unidirecțional și fulii fixe, în stoc",
      "Profil cu canale multiple (poly-V) și trapezoidal",
      "Demontare cu chei speciale, la atelier",
      "Verificăm cureaua și întinzătorul în același timp",
    ],
    body: [
      { type: "h2", text: "Semnele unei fulii defecte" },
      {
        type: "ul",
        items: [
          "Huruit sau zdrăngănit metalic la oprirea motorului, exact în momentul în care se stinge.",
          "Cureaua țiuie la ralanti sau la porniri reci, deși este nouă și corect întinsă.",
          "Fulia cu cuplaj se rotește liber în ambele sensuri sau, invers, nu se mai rotește deloc față de arbore.",
          "Canale uzate, lucioase ori ciobite: cureaua se așează strâmb și lasă praf negru pe capac.",
          "Piuliță slăbită, joc axial, urme de frecare pe capacul alternatorului.",
          "Încărcare slabă la ralanti, pentru că fulia sau cureaua patinează.",
        ],
      },
      { type: "h2", text: "Aici nu se repară — se înlocuiește" },
      {
        type: "p",
        text: "Fulia cu cuplaj unidirecțional este un ansamblu sigilat: nu se desface și nu se gresează, se schimbă — de preferat împreună cu cureaua, iar dacă are joc, și cu întinzătorul. Demontarea cere chei speciale pentru profilul interior, așa că o facem la atelier, fără să scoatem alternatorul de pe motor atunci când accesul permite. Fuliile fixe se schimbă mai simplu, dar merită verificate la fiecare reparație de alternator.",
      },
      { type: "h2", text: "Mărci disponibile" },
      {
        type: "ul",
        items: [
          "INA, LUK, SNR: cuplaje unidirecționale și fulii pentru sistemele moderne.",
          "ZEN, CARGO, WAI: fulii fixe și echivalente pentru game mai vechi.",
          "Variante cu canale multiple (poly-V) și cu profil trapezoidal, pentru autoturisme și camioane.",
        ],
      },
      {
        type: "cta",
        title: "Zgomot la oprirea motorului?",
        text: "Verificăm fulia, cureaua și întinzătorul într-o singură vizită și vă spunem dacă alternatorul a suferit deja.",
        label: "Reparații alternatoare",
        href: "servicii/reparatii-alternatoare",
      },
    ],
    seo: {
      title: "Fulie de alternator — fixă și cu cuplaj",
      description: "Fulii de alternator, fixe și cu cuplaj unidirecțional: INA, LUK, SNR, ZEN, CARGO, WAI. Înlocuire cu chei speciale la atelierul nostru din Chișinău.",
    },
  },

  "releu-regulator": {
    title: "Releu regulator de tensiune",
    short: "Releu regulator",
    excerpt: "Regulatoare de tensiune pentru alternatoare de autoturisme, camioane și utilaj special, alese după tip, nu după aspect.",
    lead: "Releul regulator ține tensiunea alternatorului constantă, indiferent de turație și de consumatorii aprinși: comandă curentul de excitație de mii de ori pe secundă. Pe majoritatea alternatoarelor moderne este un modul electronic montat împreună cu suportul de perii, iar la unele aprinde și martorul de încărcare din bord.",
    highlights: [
      "Regulatoare pentru sisteme de 12 V și 24 V",
      "Cu suport de perii integrat sau separat",
      "Verificăm tensiunea reglată la banc, nu doar la ralanti",
      "BOSCH, VALEO, CARGO, MOBILETRON, TRANSPO, UTM, WAI",
    ],
    body: [
      { type: "h2", text: "Simptome de regulator defect" },
      {
        type: "ul",
        items: [
          "Supraîncărcare: peste 15 V la borne, electrolit care fierbe, becuri arse des, baterie umflată.",
          "Subîncărcare: 12,5–13 V cu motorul pornit și baterie care se descarcă în câteva zile.",
          "Martorul de baterie aprins la ralanti și stins în accelerație, fără alte simptome.",
          "Tensiune care sare și faruri care pulsează, mai ales după ce motorul s-a încălzit.",
          "Alternator care încarcă normal la rece și se oprește după douăzeci-treizeci de minute de mers.",
          "La variantele comandate electronic (LIN/COM), erori de comunicație în calculator și tensiune blocată la o valoare de avarie.",
        ],
      },
      { type: "h2", text: "Nu se repară — se înlocuiește corect" },
      {
        type: "p",
        text: "Regulatorul este un modul electronic încapsulat: nu se desface și nu se reglează, se schimbă ca ansamblu, de regulă împreună cu periile care fac corp comun cu el. Important este să nimeriți exact tipul — tensiunea nominală de 12 V sau 24 V, tensiunea reglată, numărul și forma contactelor, poziția periilor. Un regulator „aproape la fel” fie nu încarcă, fie supraîncarcă și distruge bateria în câteva săptămâni.",
      },
      {
        type: "note",
        text: "Înainte să cumpărați piesa, măsurați tensiunea la bornele bateriei cu motorul pornit. Multe dintre defectele puse pe seama regulatorului sunt de fapt perii uzate, punte de diode străpunsă sau o curea care patinează.",
      },
      { type: "h2", text: "Mărci disponibile" },
      {
        type: "ul",
        items: [
          "Originale: BOSCH, VALEO.",
          "Echivalente: CARGO, MOBILETRON, TRANSPO, UTM, WAI.",
          "Pentru alternatoare de 12 V și 24 V, cu suport de perii integrat sau separat.",
        ],
      },
      {
        type: "cta",
        title: "Tensiune de încărcare în afara normei?",
        text: "Verificăm alternatorul la banc și instalația de bord: regulator, punte de diode, curea, cabluri și consumul în repaus.",
        label: "Electrician auto și diagnosticare",
        href: "servicii/electrician-auto",
      },
    ],
    seo: {
      title: "Releu regulator de tensiune pentru alternator",
      description: "Relee regulatoare de tensiune pentru alternatoare de 12 V și 24 V: BOSCH, VALEO, CARGO, MOBILETRON, TRANSPO, UTM, WAI. Verificare la banc, Chișinău.",
    },
  },

  "perii-colectoare": {
    title: "Perii colectoare și suporturi de perii",
    short: "Perii colectoare",
    excerpt: "Perii de grafit la bucată și suporturi de perii în ansamblu, pentru demaroare și alternatoare de orice tip de vehicul.",
    lead: "Periile de grafit sunt singurele piese din demaror și din alternator proiectate să se consume. Ele duc curentul la colector, respectiv la inelele colectoare, iar arcurile le apasă cu o forță care scade pe măsură ce grafitul se scurtează. Sub cota minimă, contactul se pierde treptat — de obicei mai întâi la rece sau la ralanti.",
    highlights: [
      "Perii la bucată și suporturi de perii complet echipate",
      "Pentru demaroare și alternatoare, 12 V și 24 V",
      "La alternatoare, suportul vine adesea cu releul regulator",
      "Comparăm dimensiunea și secțiunea cu piesa veche",
    ],
    body: [
      { type: "h2", text: "Cum recunoașteți perii terminate" },
      {
        type: "ul",
        items: [
          "Alternatorul nu încarcă imediat după pornire și începe să încarce după câțiva kilometri.",
          "Perii mai scurte decât cota minimă, tocite oblic, cu arcurile slăbite sau blocate în ghidaj.",
          "Praf de grafit în interiorul capacului și pe suportul de perii.",
          "Scântei intense la colector și lamele înnegrite pe o singură porțiune.",
          "Demarorul se rotește lent la cald, deși bateria și cablurile sunt în regulă.",
          "Conductorul flexibil al periei rupt sau desprins de la lipitură: contact zero, fără uzură vizibilă.",
        ],
      },
      { type: "h2", text: "Perii separate sau suport complet" },
      {
        type: "p",
        text: "Vindem atât perii la bucată, cât și suporturi de perii în ansamblu, cu conductoarele lipite. La alternatoare, suportul vine adesea împreună cu releul regulator, ceea ce rezolvă două piese de uzură dintr-o singură intervenție. La demaroare contează secțiunea conductorului și forța arcului: o perie cu dimensiuni corecte, dar cu arc slab, va scânteia și va arde colectorul.",
      },
      {
        type: "note",
        text: "Periile noi pe un colector uzat în trepte țin puțin. Dacă lamelele sunt arse sau denivelate, colectorul se strunjește ori rotorul se înlocuiește — altfel repetați reparația peste câteva luni.",
      },
      { type: "h2", text: "Mărci disponibile" },
      {
        type: "ul",
        items: [
          "Originale: BOSCH, VALEO, DENSO.",
          "Echivalente: IKA (GEBE), CARGO, MEGA, WAI, TYPER.",
          "Pentru autoturisme, camioane și utilaj special, la 12 V și 24 V.",
        ],
      },
      {
        type: "cta",
        title: "Nu știți ce perii vă trebuie?",
        text: "Aduceți periile vechi sau suportul demontat la str. Uzinelor 104. Le comparăm pe loc — dimensiune, secțiune, lungimea conductorului — și vă dăm echivalentul corect.",
        label: "Contacte și program",
        href: "contacte",
      },
    ],
    seo: {
      title: "Perii colectoare pentru demaror și alternator",
      description: "Perii de grafit și suporturi de perii pentru demaroare și alternatoare: BOSCH, VALEO, DENSO, IKA (GEBE), CARGO, MEGA, WAI, TYPER. Stoc în Chișinău.",
    },
  },

  "alte-piese": {
    title: "Alte piese și componente",
    short: "Alte piese",
    excerpt: "Bucșe, rulmenți, capace, furci, reductoare, punți de diode, fulii și kituri de reparație pentru demaroare și alternatoare.",
    lead: "Restul depozitului: piesele fără care o reparație nu se închide. Le ținem pentru demaroare și alternatoare de autoturisme, camioane și utilaj special, pentru că le folosim în fiecare zi la banc — nu ca stoc de vitrină.",
    highlights: [
      "Piese mărunte care salvează agregatul întreg",
      "Bucșe, rulmenți, capace, furci, reductoare, punți de diode",
      "Kituri de reparație pentru relee și suporturi de perii",
      "Identificare după marcajul agregatului sau după piesa veche",
    ],
    body: [
      { type: "h2", text: "Ce ținem în stoc" },
      {
        type: "ul",
        items: [
          "Bucșe și rulmenți pentru capacele demarorului și ale alternatorului.",
          "Capace față și spate, carcase, tiranți și șuruburi de asamblare.",
          "Furci de cuplare, arcuri, tampoane și opritoare de pinion.",
          "Reductoare și grupuri planetare pentru demaroarele cu reductor.",
          "Punți de diode, statoare, izolatoare și borne de putere.",
          "Fulii, piulițe de fulie și distanțiere.",
          "Kituri de reparație pentru relee de cuplare și suporturi de perii.",
        ],
      },
      {
        type: "p",
        text: "O bucșă cu joc sau un rulment zgomotos nu justifică schimbarea întregului agregat. Piesele mici costă o fracțiune din prețul unui demaror sau alternator complet și, montate la timp, previn defectul mare: bucșa uzată lasă rotorul să frece statorul, rulmentul blocat arde bobinajul, o furcă crăpată distruge bendixul și coroana volantei.",
      },
      { type: "h2", text: "Mărci disponibile" },
      {
        type: "ul",
        items: [
          "Originale: BOSCH, VALEO, DENSO, DELCO.",
          "Licențiate și echivalente: CARGO, MAGNETI MARELLI, ZEN, ZM, ORME, GHIBAUDI, MEA, WAI, TYPER, BYPART, MEGA, IKA (GEBE).",
          "Electronică și fulii: MOBILETRON, TRANSPO, UTM, INA, LUK, SNR.",
        ],
      },
      { type: "h2", text: "Cum identificăm piesa corectă" },
      {
        type: "steps",
        items: [
          {
            title: "Marcajul de pe agregat",
            text: "Numărul de pe carcasa demarorului sau a alternatorului este calea cea mai sigură. O fotografie clară a plăcuței ne este suficientă.",
          },
          {
            title: "Varianta de motorizare",
            text: "Contează mai mult decât modelul: același automobil poate avea două demaroare diferite, cu alt număr de dinți la pinion și alte bucșe.",
          },
          {
            title: "Piesa veche",
            text: "Cel mai rapid reper. Măsurăm diametre, lungimi, numărul de dinți și canelurile la tejghea și vă dăm echivalentul din stoc.",
          },
        ],
      },
      {
        type: "cta",
        title: "Cumpărați piese pentru atelierul dumneavoastră?",
        text: "Lucrăm cu ateliere auto, firme de transport și parcuri de utilaje, pe bază de contract și cu livrare pe factură.",
        label: "Condiții pentru persoane juridice",
        href: "info/persoane-juridice",
      },
    ],
    seo: {
      title: "Piese pentru demaroare și alternatoare — alte piese",
      description: "Bucșe, rulmenți, capace, furci, reductoare, punți de diode, fulii și kituri de reparație pentru demaroare și alternatoare. Stoc la Chișinău, Uzinelor 104.",
    },
  },
};

export const parts: { index: Doc; items: DocMap } = { index, items };
