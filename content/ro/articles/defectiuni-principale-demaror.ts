import type { Article } from "@/content/types";

export const article: Article = {
  title: "Principalele defecțiuni ale demarorului și cauzele lor",
  short: "Defecțiuni principale",
  excerpt:
    "Cinci tablouri de defect ale demarorului, lista completă de cauze pentru fiecare și verificările electrice cu valorile de control.",
  lead: "Demarorul nu se defectează „în general”: de fiecare dată există un simptom precis, iar fiecărui simptom îi corespunde o listă scurtă de cauze. Mai jos sunt cele cinci tablouri de defect pe care le întâlnim cel mai des, cauzele fiecăruia și verificările care confirmă diagnosticul — cu cifrele de control.",
  highlights: [
    "Cinci tablouri de defect, fiecare cu lista completă de cauze",
    "Verificarea releului de cuplare: distanțieră de 12,8—15,0 mm, curent maxim 23 A, tensiune 9 V",
    "Cum se caută scurtcircuitul la masă cu o lampă de control de 12 V",
    "Regimul de uscare a bobinajelor: 95—100 °C, o oră până la o oră și jumătate",
    "Ce se recondiționează și ce se înlocuiește obligatoriu",
  ],
  body: [
    {
      type: "h2",
      text: "1. La acționarea demarorului releul de cuplare nu lucrează, rotorul nu se rotește",
    },
    { type: "p", text: "Cauze:" },
    {
      type: "ul",
      items: [
        "baterie de acumulator defectă sau complet descărcată;",
        "oxidarea puternică a bornelor bateriei și a papucilor de cablu;",
        "strângerea slabă a papucilor;",
        "conductorul releului de cuplare desprins sau întrerupt — fie dinspre demaror, fie dinspre contactul de pornire;",
        "scurtcircuit între spirele bobinajului releului de cuplare, întrerupere sau scurtcircuit la masă;",
        "înțepenirea miezului mobil al releului de cuplare;",
        "defectarea părții de contact a contactului de pornire.",
      ],
    },
    {
      type: "h2",
      text: "2. Releul de cuplare lucrează, dar rotorul nu se rotește sau se rotește prea slab",
    },
    { type: "p", text: "Cauze:" },
    {
      type: "ul",
      items: [
        "baterie de acumulator descărcată;",
        "oxidarea bornelor bateriei și a papucilor conductorilor de legătură;",
        "strângere slăbită la bulonii de contact ai releului de cuplare;",
        "colector ars;",
        "perii blocate în suporturi sau uzate excesiv;",
        "întrerupere în bobinajul statoric sau în bobinajul rotorului;",
        "scurtcircuit la masă al suportului izolat al periei de plus;",
        "scurtcircuit între lamelele colectorului;",
        "scurtcircuit între spirele bobinajelor rotorului sau statorului, ori scurtcircuitul acestora la masă.",
      ],
    },
    { type: "h2", text: "Verificarea releului de cuplare: cifrele de control" },
    {
      type: "p",
      text: "În circuitul de alimentare al bobinajului releului se introduce un voltmetru sau un ampermetru. Între inelul limitator și pinionul de antrenare se montează o distanțieră cu grosimea de la 12,8 până la 15,0 mm — valoarea exactă depinde de tipul demarorului. Apoi se acționează releul.",
    },
    {
      type: "p",
      text: "Intensitatea curentului de alimentare a bobinajului nu trebuie să depășească 23 A, iar tensiunea — 9 V. Valori mai mari înseamnă că bobinajul releului sau mecanismul de antrenare al demarorului este defect. Orice abatere a parametrilor de lucru de la cei nominali cere verificarea bobinajului la scurtcircuit.",
    },
    { type: "h2", text: "Verificarea bobinajelor la scurtcircuit la masă" },
    {
      type: "p",
      text: "Se face cu o lampă de control sau cu un tester. Pregătirea: se deconectează borna bobinajului de excitație de la releul de cuplare, se ridică periile izolate, se desprinde conductorul bobinei de șunt de la suportul de perii legat la masă și se scot periile din suporturile izolate — pentru asta se deșurubează întâi șuruburile de fixare a lițelor.",
    },
    {
      type: "p",
      text: "Prin lampa de control se aplică o tensiune de 12 V între borna bobinajului de excitație și carcasa demarorului. Dacă lampa se aprinde, bobinajul de excitație este în scurtcircuit la masă.",
    },
    {
      type: "p",
      text: "În același mod se verifică suporturile izolate de perii: tensiunea se aplică între suport și carcasă. Pentru colector și bobinajul rotorului se ridică atât periile izolate, cât și cele legate la masă, iar tensiunea se aplică între lamelele colectorului și carcasă. Aprinderea lămpii arată că bobinajul rotorului este în scurtcircuit la masă.",
    },
    {
      type: "note",
      text: "Fiecare piesă la care testul a ieșit pozitiv se demontează și se repară sau se înlocuiește. Nu are sens să reasamblați un demaror cu un bobinaj în scurtcircuit.",
    },
    { type: "h2", text: "3. Rotorul se rotește, dar arborele cotit nu este antrenat" },
    { type: "p", text: "Cauze principale:" },
    {
      type: "ul",
      items: [
        "patinarea cuplajului unidirecțional (bendixului);",
        "ruperea pârghiei de cuplare sau ieșirea axului acesteia din locaș;",
        "ruperea inelului de antrenare al cuplajului sau a arcului tampon;",
        "înțepenirea ori deplasarea greoaie a mecanismului de antrenare pe filetul elicoidal al axului rotorului.",
      ],
    },
    { type: "h2", text: "4. Demarorul nu se decuplează după pornirea motorului" },
    { type: "p", text: "Cauze principale:" },
    {
      type: "ul",
      items: [
        "înțepenirea pârghiei de antrenare;",
        "înțepenirea mecanismului de antrenare pe axul rotorului sau lipirea contactelor releului de cuplare;",
        "ruperea arcului de revenire al contactului de pornire;",
        "slăbirea sau ruperea arcurilor de revenire ale cuplajului unidirecțional ori ale releului de cuplare;",
        "înțepenirea releului de cuplare.",
      ],
    },
    {
      type: "note",
      text: "Dacă motorul a pornit și demarorul continuă să lucreze, opriți imediat contactul, deschideți capota și deconectați conductorul care merge la releul demarorului. O altă cauză posibilă este montarea strâmbă a demarorului — în acest caz se strâng bulonii de fixare a carcasei pe motor.",
    },
    { type: "h2", text: "5. Zgomot crescut la rotirea rotorului" },
    { type: "p", text: "Cauze principale:" },
    {
      type: "ul",
      items: [
        "uzura bucșelor de lagăr sau a fusurilor axului rotorului;",
        "slăbirea fixării demarorului;",
        "deteriorarea dinților pinionului de antrenare sau ai coroanei volantei;",
        "spargerea capacului dinspre mecanismul de antrenare;",
        "slăbirea fixării unui pol în carcasă — la rotire, rotorul atinge papucul polar.",
      ],
    },
    {
      type: "cta",
      title: "Piese pentru demaroare, pe stoc",
      text: "Releu de cuplare, bendix, rotor, perii, bucșe și kituri de reparație pentru autoturisme, camioane și utilaj special.",
      label: "Vezi catalogul de demaroare",
      href: "piese/demaroare",
    },
    { type: "h2", text: "Demontarea, spălarea și uscarea" },
    {
      type: "p",
      text: "Înainte de desfacere, demarorul se curăță de praf și murdărie cu o perie de păr și cu lavete uscate. La demontare se folosesc extractoare speciale, menghina și presa.",
    },
    {
      type: "p",
      text: "După desfacere, toate subansamblurile și piesele se spală și se usucă. Piesele metalice se spală în baie cu soluție alcalină sau în petrol lampant. Piesele cu conductori sau cu bobinaje se șterg cu o lavetă îmbibată în benzină și se suflă cu aer comprimat, apoi se usucă în etuve electrice la 95—100 °C timp de o oră până la o oră și jumătate. Garniturile de etanșare din pâslă și fetru se spală în benzină curată.",
    },
    { type: "h2", text: "Defectele rotorului de demaror" },
    {
      type: "p",
      text: "După curățare și uscare, subansamblurile se examinează, se măsoară și se supun încercărilor electrice. Defectele tipice ale rotorului sunt: distrugerea izolației și întreruperea spirelor bobinajului, uzura lamelelor colectorului, rizuri, canale și ciupituri pe suprafața lor, gripaje și zgârieturi pe pachetul de tole, uzura fusurilor și încovoierea axului, uzura canelurilor axului.",
    },
    {
      type: "p",
      text: "Întreruperile și scurtcircuitele la masă din bobinajele rotorului și statorului se depistează cu aparate specializate. Zgârieturile, rizurile și gripajele de pe fier se înlătură cu hârtie abrazivă cu granulație fină sau prin rectificare. Dacă diametrul pachetului de tole s-a micșorat, sub papucii polari se montează distanțiere. Fusurile uzate ale axului se recondiționează prin depunere de fier (oțelizare) sau prin cromare; o uzură mică se compensează prin moletare, urmată de rectificare la cota nominală.",
    },
    { type: "h2", text: "Colectorul și inelele de contact" },
    {
      type: "p",
      text: "Suprafețele de lucru uzate ale colectoarelor și ale inelelor de contact se strunjesc, apoi se lustruiesc cu hârtie abrazivă. Micșorarea admisă a diametrului colectorului nu trebuie să depășească valorile stabilite de condițiile tehnice; sub aceste valori, colectorul se înlocuiește cu unul nou.",
    },
    {
      type: "p",
      text: "Dacă bobinajul are defecte interne sau izolația este distrusă, bobinajul se îndepărtează și pe rotor se execută unul nou. Fără rebobinare se pot remedia doar întreruperea bobinajului sau scurtcircuitul secțiunilor în locurile de lipire la lamelele colectorului. Bobinajul rotorului se repară atunci când izolația este distrusă: izolația deteriorată se înlocuiește. Colectoarele cu lamele scurtcircuitate sau slăbite nu se repară, ci se înlocuiesc cu altele noi.",
    },
    { type: "h2", text: "Carcasa și bobinajul de excitație" },
    {
      type: "p",
      text: "Carcasa asamblată poate avea atât defecte electrice, cât și mecanice; ele se depistează prin examinare exterioară și prin încercări electrice. Defectele electrice principale sunt scurtcircuitele între spirele bobinajelor și scurtcircuitele la masă, întreruperile în legăturile bobinajelor și ruperea papucilor de ieșire.",
    },
    {
      type: "p",
      text: "Defectele mecanice caracteristice ale carcaselor: filet rupt, lovituri pe suprafețele de așezare ale capacelor, caneluri deteriorate, gripaje pe suprafața papucilor polari, deteriorarea crestăturilor șuruburilor de fixare a papucilor. Filetul deteriorat se reface prin filetare la cotă de reparație sau prin montarea unei piese suplimentare — o bucșă filetată la cota nominală. Loviturile de pe suprafețele de așezare se înlătură cu pila; papucii polari cu gripaje și adâncituri se înlocuiesc, iar gripajele mici se îndepărtează prin alezare. Aici este esențial să se asigure jocul radial cerut între rotor și papucii polari, montând sub papuci distanțiere din tole de transformator.",
    },
    {
      type: "p",
      text: "Pentru remedierea defecțiunilor bobinajului de excitație, carcasa demarorului se desface: se scot clemele și se deșurubează șuruburile de fixare a papucilor polari, slăbite în prealabil cu șurubelnița. Bobinele cu izolație umezită și îmbibată cu ulei se usucă în etuvă, apoi se impregnează cu lac izolant. Izolația dintre spire și cea exterioară a bobinelor de excitație, dacă s-a degradat, se înlocuiește cu izolație nouă.",
    },
    { type: "h2", text: "Întrerupătorul și releul demarorului" },
    {
      type: "p",
      text: "Cauzele defectării lor sunt deteriorarea izolației și întreruperile bobinajelor, arderea, oxidarea și sudarea contactelor. Deteriorarea izolației și întreruperile se stabilesc cu lampa de control. Bobinajul defect se rebobinează pe un stand special, iar starea contactelor se apreciază la examinarea exterioară: contactele arse și oxidate se curăță cu hârtie abrazivă cu granulație fină, iar contactele sudate se înlocuiesc cu altele noi.",
    },
    { type: "h2", text: "Capacele" },
    {
      type: "p",
      text: "Defectele principale ale capacelor — scurtcircuite, fisuri, ciobituri, uzura lagărelor, ruperea sau pierderea elasticității suporturilor de perii, uzura periilor — sunt reparabile, iar lagărele uzate se înlocuiesc cu altele noi. Scurtcircuitul la capac se verifică cu lampa de control, suporturile de perii se izolează de capac, iar fisurile și ciobiturile se sudează, apoi se curăță la nivelul suprafeței.",
    },
    {
      type: "p",
      text: "Ordinea contează: mai întâi simptomul, apoi verificarea electrică, abia la final piesa de schimb. Un demaror asamblat fără verificări se întoarce în atelier — de regulă în aceeași lună.",
    },
    {
      type: "cta",
      title: "Nu aveți stand și scule speciale?",
      text: "Diagnosticăm demarorul, îl reparăm și îl testăm sub sarcină. Inspecție și estimare în aceeași zi, reparație în cel mult două zile.",
      label: "Reparație demaroare",
      href: "servicii/reparatii-demaroare",
    },
  ],
  seo: {
    title: "Defecțiunile demarorului și cauzele lor",
    description:
      "Cinci tablouri de defect ale demarorului cu toate cauzele, verificarea releului de cuplare (23 A, 9 V) și recondiționarea pieselor. Atelier în Chișinău.",
  },
  date: "2021-05-07",
  readingMinutes: 9,
  tag: "Demaroare",
};
