import type { Doc, DocMap } from "@/content/types";

const index: Doc = {
  title: "Servicii auto-electrice",
  short: "Servicii",
  excerpt:
    "Reparăm demaroare și alternatoare pentru autoturisme, camioane și utilaj special și rezolvăm defecțiunile instalației electrice auto — totul într-un singur atelier din Chișinău.",
  lead:
    "Suntem una dintre primele firme din Moldova specializate în repararea demaroarelor și alternatoarelor pentru autoturisme și camioane. Lucrăm în str. Uzinelor 8/1, cu intrarea din str. Varnița, și ținem pe stoc piesele de care depinde reparația.",
  highlights: [
    "Reparații de demaroare și alternatoare pentru autoturisme, camioane și utilaj special.",
    "Diagnosticare pe agregatul demontat și probă pe bancul de probă înainte de predare.",
    "Prețul se confirmă cu dumneavoastră înainte de a înlocui orice piesă.",
    "12 luni garanție la reparațiile efectuate și la agregatele noi.",
  ],
  body: [
    {
      type: "p",
      text: "Un demaror care nu se rotește sau un alternator care nu mai încarcă bateria nu are nevoie neapărat de înlocuire. Cel mai des problema stă într-o singură componentă: bendixul, releul de cuplare, periile colectoare, puntea de diode sau releul regulator de tensiune. De aceea începem întotdeauna cu diagnosticarea agregatului demontat, nu cu o ofertă de vânzare.",
    },
    {
      type: "p",
      text: "Deservim autoturisme, camioane și utilaj special. Pentru unitățile care nu mai merită reparate avem în stoc agregate noi și recondiționate; pentru cele care merită — piese originale și fabricate sub licență.",
    },
    {
      type: "cta",
      title: "Reparații demaroare",
      text: "Demontare și curățare, verificarea rotorului, bendixului, releului de cuplare și a periilor, apoi probă pe banc. Telefon: 069 30 77 08 sau 079 30 77 08.",
      label: "Vezi serviciul",
      href: "servicii/reparatii-demaroare",
    },
    {
      type: "cta",
      title: "Reparații alternatoare",
      text: "Verificarea bobinajelor, punții de diode, releului regulator, periilor și rulmenților, cu control al tensiunii de încărcare la final. Telefon: 069 30 77 08 sau 079 30 77 08.",
      label: "Vezi serviciul",
      href: "servicii/reparatii-alternatoare",
    },
    {
      type: "cta",
      title: "Electrician auto și diagnosticare computerizată",
      text: "Citirea codurilor de eroare, depistarea defectelor din instalația electrică și repararea echipamentului electric. Telefon: 079 10 77 08.",
      label: "Vezi serviciul",
      href: "servicii/electrician-auto",
    },
    { type: "h2", text: "Cum lucrăm" },
    {
      type: "ol",
      items: [
        "Aduceți agregatul demontat sau automobilul întreg la atelier, în str. Uzinelor 8/1 — intrarea din str. Varnița.",
        "Desfacem piesa, o curățăm și stabilim ce s-a defectat și din ce cauză.",
        "Vă comunicăm devizul. Nimic nu se înlocuiește până nu confirmați prețul.",
        "Dacă renunțați la reparație, asamblăm agregatul și vi-l returnăm în starea în care l-am primit.",
        "După reparație, agregatul trece proba pe bancul de probă și abia apoi vă este predat.",
      ],
    },
    {
      type: "note",
      text: "La demaroarele și alternatoarele noi, precum și la reparațiile efectuate, garanția este de 12 luni. La agregatele și piesele second-hand — între 3 și 6 luni.",
    },
    { type: "h2", text: "Termene" },
    {
      type: "p",
      text: "Pentru un agregat adus la atelier, examinarea și devizul se fac de regulă în aceeași zi, iar lucrarea propriu-zisă nu depășește două zile lucrătoare de la aprobarea devizului. Acesta este termenul pe care îl asumăm și în contractul de colaborare cu firmele și parcurile auto.",
    },
    {
      type: "p",
      text: "Piesele pentru demaroare și alternatoare le puteți cumpăra și separat, din catalogul nostru, dacă faceți reparația singur sau lucrați în alt atelier.",
    },
    {
      type: "cta",
      title: "Aveți nevoie de o reparație?",
      text: "Sunați la 069 30 77 08 sau 079 30 77 08 pentru demaroare și alternatoare, ori la 079 10 77 08 pentru electrician auto. Program: luni–vineri 09:00–18:00, sâmbătă 09:00–16:00.",
      label: "Contacte și hartă",
      href: "contacte",
    },
  ],
  seo: {
    title: "Servicii: reparații demaroare și alternatoare",
    description:
      "Atelier auto-electric în Chișinău: reparații demaroare și alternatoare pentru autoturisme, camioane și utilaj special, electrician auto și diagnosticare.",
  },
};

const items: DocMap = {
  "reparatii-demaroare": {
    title: "Reparații demaroare",
    short: "Reparații demaroare",
    excerpt:
      "Reparăm demaroare de autoturisme, camioane și utilaj special: diagnosticare pe piesa demontată, deviz confirmat cu dumneavoastră, probă pe banc și 12 luni garanție.",
    lead:
      "Un demaror cedează rar în întregime. Cel mai des se defectează o singură componentă — bendixul, releul de cuplare, periile, rotorul sau bucșele — iar restul agregatului este în stare bună. Sarcina noastră este să găsim exact acea componentă. Informații suplimentare: 069 30 77 08, 079 30 77 08.",
    highlights: [
      "Demaroare pentru autoturisme, camioane și utilaj special, inclusiv variante cu reductor.",
      "Diagnosticare completă a agregatului demontat, cu verificarea fiecărei piese.",
      "Fără acordul dumneavoastră nu se înlocuiește nicio piesă.",
      "Probă pe bancul de probă înainte de predare și 12 luni garanție la reparație.",
    ],
    body: [
      {
        type: "p",
        text: "Reparația se face în atelier, pe agregatul demontat. Puteți aduce doar demarorul sau automobilul întreg — în al doilea caz îl demontăm și îl montăm noi, iar în plus verificăm circuitul care alimentează demarorul.",
      },
      { type: "h2", text: "Etapele reparației" },
      {
        type: "steps",
        items: [
          {
            title: "Demontare și curățare",
            text: "Desfacem demarorul în piesele componente. Toate componentele sunt curățate și spălate temeinic: pe o piesă acoperită de praf de cărbune și unsoare arsă nu se vede nici o fisură, nici o urmă de scurtcircuit, iar diagnosticarea ar rămâne o presupunere.",
          },
          {
            title: "Depistarea cauzei defecțiunii",
            text: "Verificăm fiecare piesă a demarorului pentru uzură, fisuri și ciobituri, coroziune și alte defecte: colectorul și bobinajul rotorului, periile și suportul lor, bendixul, releul de cuplare, bucșele și rulmenții, grupul planetar. Ne interesează nu doar ce s-a rupt, ci și de ce: un bendix distrus a doua oară în același an înseamnă de obicei o coroană de volantă uzată sau porniri cu bateria descărcată.",
          },
          {
            title: "Confirmarea prețului cu clientul",
            text: "Vă spunem ce trebuie înlocuit și cât costă lucrarea. Puteți accepta înlocuirea pieselor sau puteți refuza — în acest caz asamblăm agregatul cu grijă și vi-l returnăm în starea inițială, exact așa cum l-am primit.",
          },
          {
            title: "Înlocuirea pieselor defecte",
            text: "Piesele ieșite din funcțiune se schimbă cu piese noi echivalente. Folosim numai componente de calitate — originale BOSCH, VALEO, DENSO, DELCO sau fabricate sub licență (ZEN, CARGO, MEA, WAI, UTM, IKA) — astfel încât piesa să se potrivească pe automobilul dumneavoastră și să asigure o funcționare fără opriri.",
          },
          {
            title: "Asamblare și probă pe banc",
            text: "Agregatul se asamblează și se verifică în funcționare pe bancul de probă: curentul absorbit, cuplarea și decuplarea bendixului, comportamentul releului de cuplare, zgomotul bucșelor. Demarorul pleacă din atelier doar după ce indicatorii corespund.",
          },
        ],
      },
      { type: "h2", text: "Defecțiuni pe care le rezolvăm frecvent" },
      {
        type: "ul",
        items: [
          "Demarorul nu reacționează la cheie sau doar clichetește: releu de cuplare defect, contacte arse, perii uzate.",
          "Se rotește, dar nu antrenează motorul: bendix care patinează sau s-a blocat, dinți uzați, coroană de volantă deteriorată.",
          "Zgomot metalic la pornire sau demaror care rămâne cuplat: bendix, furcă ori bucșe uzate.",
          "Se rotește lent și miroase a izolație arsă: bobinaj scurtcircuitat, colector uzat, mase și cleme de contact oxidate.",
          "Demarorul se rotește împreună cu motorul pornit: contact de pornire sau releu blocat — o defecțiune care distruge agregatul în câteva secunde.",
        ],
      },
      { type: "h2", text: "Ce mai facem pentru demaroare" },
      {
        type: "ul",
        items: [
          "Vânzare de demaroare noi și recondiționate pentru autoturisme, camioane și utilaj special.",
          "Vânzare de piese de schimb: bendixuri, rotoare, relee de cuplare, perii și suporturi de perii, bucșe.",
          "Recondiționarea bendixului dumneavoastră, cu garanție.",
          "Reparația releului de cuplare, inclusiv refacerea contactelor.",
        ],
      },
      { type: "h2", text: "Garanție" },
      {
        type: "p",
        text: "Reparația efectuată și demaroarele noi vin cu 12 luni garanție; agregatele și piesele second-hand — cu 3 până la 6 luni. Garantăm funcționarea corectă a tuturor pieselor înlocuite dacă regulile de exploatare sunt respectate: fără rotirea demarorului cu motorul pornit, fără porniri cu bateria descărcată, fără rotiri mai lungi de 10 secunde, cu clemele curate și fără lucru pe o coroană de volantă uzată.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Cât durează reparația unui demaror?",
            a: "Examinarea și devizul se fac de regulă în ziua în care primim agregatul. Lucrarea în sine nu depășește două zile lucrătoare de la momentul în care aprobați devizul, iar reparațiile simple se închid adesea în aceeași zi, dacă piesa este pe stoc.",
          },
          {
            q: "Trebuie să aduc automobilul sau doar demarorul?",
            a: "Cum vă este mai comod. Dacă aduceți demarorul demontat, câștigați timp. Dacă aduceți automobilul, îl demontăm și îl montăm noi și verificăm în plus circuitul de alimentare: cablul de masă, clemele bateriei și contactul de pornire.",
          },
          {
            q: "Merită reparat sau e mai bine un demaror nou?",
            a: "Depinde de ce a cedat. Dacă e vorba de bendix, releu, perii sau bucșe, reparația costă o fracțiune din prețul unui agregat nou. Dacă bobinajul rotorului ori carcasa sunt distruse, vă spunem deschis că un demaror nou sau recondiționat este soluția mai ieftină.",
          },
          {
            q: "Ce se întâmplă dacă refuz reparația după diagnosticare?",
            a: "Asamblăm demarorul și vi-l returnăm în starea în care l-am primit. Nu reținem piese și nu vă dăm agregatul desfăcut.",
          },
        ],
      },
      {
        type: "cta",
        title: "Programați reparația demarorului",
        text: "Sunați la 069 30 77 08 sau 079 30 77 08. Atelierul este în str. Uzinelor 8/1, Chișinău, cu intrarea din str. Varnița. Luni–vineri 09:00–18:00, sâmbătă 09:00–16:00.",
        label: "Contacte și hartă",
        href: "contacte",
      },
    ],
    seo: {
      title: "Reparații demaroare în Chișinău",
      description:
        "Reparăm demaroare de autoturisme, camioane și utilaj special în Chișinău: diagnosticare pe bancul de probă, piese de calitate, 12 luni garanție la reparație.",
    },
  },

  "reparatii-alternatoare": {
    title: "Reparații alternatoare",
    short: "Reparații alternatoare",
    excerpt:
      "Reparăm alternatoare auto în mai multe etape: demontare și curățare, măsurarea fiecărei componente, deviz aprobat de client, piese noi echivalente și probă pe banc.",
    lead:
      "Un alternator care nu mai încarcă cum trebuie lasă bateria descărcată și, mai devreme sau mai târziu, automobilul pe loc. Verificăm agregatul componentă cu componentă și, împreună cu el, întreg circuitul de încărcare. Informații suplimentare: 069 30 77 08, 079 30 77 08.",
    highlights: [
      "Alternatoare de autoturisme, camioane și utilaj special, inclusiv variante cu fulie cu ambreiaj.",
      "Verificăm nu doar alternatorul, ci și circuitul de încărcare: baterie, curea, fulie, mase.",
      "Dacă reparația iese mai scumpă decât un agregat echivalent, vă spunem înainte de a începe.",
      "Control al tensiunii de încărcare pe banc și 12 luni garanție la lucrare.",
    ],
    body: [
      {
        type: "p",
        text: "Reparația alternatorului se desfășoară în etape, fiecare cu un rezultat clar. Nu trecem la următoarea până nu este limpede ce am găsit la cea de dinainte.",
      },
      { type: "h2", text: "Etapele reparației" },
      {
        type: "steps",
        items: [
          {
            title: "Diagnosticare completă și demontare",
            text: "Verificăm alternatorul așa cum a ajuns la noi, apoi îl desfacem cu atenție în piesele componente. Toate componentele se curăță temeinic: praful de perii și uleiul acoperă exact urmele după care se recunosc o bobină arsă sau o diodă străpunsă, iar fără curățare diagnosticarea și lucrările de recondiționare pierd din precizie.",
          },
          {
            title: "Măsurarea și testarea fiecărei componente",
            text: "Examinăm, măsurăm și testăm statorul și rotorul, puntea de diode, releul regulator de tensiune, periile colectoare și inelele colectoare, rulmenții și fulia. În paralel verificăm circuitele electrice, bateria de acumulator, fulia și cureaua — un alternator refăcut nu ajută dacă cureaua patinează sau bateria nu mai ține încărcarea. Căutăm atât defectele evidente, cât și pe cele ascunse, care reduc treptat randamentul sistemului.",
          },
          {
            title: "Confirmarea prețului cu clientul",
            text: "Vă comunicăm devizul înainte de orice intervenție. Uneori recondiționarea alternatorului iese mai scumpă și mai complicată decât înlocuirea lui cu un agregat echivalent; în astfel de cazuri vă recomandăm un alternator nou sau recondiționat. Dacă nu vă convine niciuna dintre variante, asamblăm alternatorul cu grijă și vi-l returnăm așa cum l-am primit.",
          },
          {
            title: "Înlocuirea pieselor defecte",
            text: "Componentele cu defecte se demontează și în locul lor se montează piese noi echivalente: rotor, punte de diode, releu regulator, perii, rulmenți, fulie. Folosim exclusiv piese de calitate — originale BOSCH, VALEO, DENSO, DELCO sau fabricate sub licență (CARGO, MOBILETRON, TRANSPO, WAI, INA, SNR) — deci se potrivesc pe automobilul dumneavoastră.",
          },
          {
            title: "Asamblare și probă pe banc",
            text: "Alternatorul asamblat se testează pe banc: tensiunea de ieșire la diferite regimuri de rotație, curentul debitat, funcționarea releului regulator, zgomotul rulmenților. Dacă toți indicatorii corespund valorilor nominale indicate de producător, agregatul se montează pe automobilul clientului.",
          },
        ],
      },
      { type: "h2", text: "Semne după care se recunoaște un alternator obosit" },
      {
        type: "ul",
        items: [
          "Martorul bateriei rămâne aprins sau se aprinde intermitent în mers: perii uzate, releu regulator ori punte de diode defecte.",
          "Bateria se descarcă peste noapte, deși alternatorul pare că încarcă: cel mai des o diodă străpunsă, care creează un consum permanent.",
          "Tensiune prea mare — electrolit care fierbe, becuri arse des: releu regulator de tensiune defect.",
          "Șuierat, zgomot sau vibrație din zona alternatorului: rulmenți uzați sau fulie cu ambreiaj blocată.",
          "Încărcare intermitentă și miros de izolație arsă: bobinaj de stator deteriorat, contacte și mase oxidate.",
        ],
      },
      { type: "h2", text: "Ce mai facem pentru alternatoare" },
      {
        type: "ul",
        items: [
          "Vânzare de alternatoare noi și recondiționate.",
          "Vânzare de piese: rotoare, fulii, relee regulatoare de tensiune, punți de diode, perii și suporturi de perii.",
          "Reparații punctuale — rulmenți, fulie, releu regulator — fără înlocuirea agregatului.",
          "Verificarea tensiunii de încărcare direct pe automobil, împreună cu electricianul auto.",
        ],
      },
      { type: "h2", text: "Garanție" },
      {
        type: "p",
        text: "La reparațiile efectuate și la alternatoarele noi garanția este de 12 luni; la agregatele și piesele second-hand — de la 3 la 6 luni. Garanția acoperă piesele înlocuite și lucrarea, în condiții normale de exploatare: cureaua tensionată corect, clemele și masele curate, bateria în stare bună și fără intervenții în instalația electrică după reparație.",
      },
      {
        type: "faq",
        items: [
          {
            q: "De unde știu dacă problema e alternatorul sau bateria?",
            a: "Se vede la măsurători. Cu motorul pornit, tensiunea la bornele bateriei trebuie să fie în jur de 13,8–14,5 V. Dacă rămâne la nivelul tensiunii bateriei, alternatorul nu încarcă; dacă urcă mult peste, este de vină releul regulator. Facem verificarea la atelier, împreună cu testul bateriei.",
          },
          {
            q: "Se poate schimba doar fulia sau doar releul regulator?",
            a: "Da, și sunt cele mai frecvente reparații punctuale. Releul regulator, periile cu suportul lor, rulmenții și fulia se înlocuiesc separat, fără a schimba alternatorul. Pentru majoritatea modelelor de autoturisme și camioane avem aceste piese pe stoc.",
          },
          {
            q: "Cât durează reparația?",
            a: "Examinarea și devizul se fac de regulă în ziua primirii agregatului, iar lucrarea nu depășește două zile lucrătoare de la aprobarea devizului. Termenul depinde în principal de disponibilitatea piesei.",
          },
          {
            q: "Lucrați cu alternatoare de camion și de utilaj special?",
            a: "Da, inclusiv agregate de 24 V pentru camioane, autobuze, tractoare și utilaj agricol. Pentru piesele mai rare, spuneți-ne marca și numărul de pe plăcuța alternatorului și vă confirmăm disponibilitatea.",
          },
        ],
      },
      {
        type: "cta",
        title: "Aduceți alternatorul la verificare",
        text: "Sunați la 069 30 77 08 sau 079 30 77 08. Ne găsiți în str. Uzinelor 8/1, Chișinău, cu intrarea din str. Varnița. Luni–vineri 09:00–18:00, sâmbătă 09:00–16:00.",
        label: "Contacte și hartă",
        href: "contacte",
      },
    ],
    seo: {
      title: "Reparații alternatoare în Chișinău",
      description:
        "Reparație de alternatoare auto în Chișinău: demontare completă, testare a bobinajului, punții de diode și releului regulator, 12 luni garanție la lucrări.",
    },
  },

  "electrician-auto": {
    title: "Electrician auto și diagnosticare computerizată",
    short: "Electrician auto",
    excerpt:
      "Diagnosticare computerizată, depistarea defecțiunilor din instalația electrică a automobilului și repararea echipamentului electric — cu explicația cauzei, nu doar o listă de coduri.",
    lead:
      "Cele mai multe pene electrice nu încep cu o piesă arsă, ci cu un contact slăbit, o masă oxidată sau un consumator care rămâne alimentat după oprirea contactului. Le căutăm prin măsurători, nu prin înlocuiri pe rând. Programări și informații: 079 10 77 08.",
    highlights: [
      "Citim codurile de eroare din blocurile electronice ale automobilului și le interpretăm cu măsurători pe circuit.",
      "Testăm circuitul de încărcare: tensiune în repaus și la motor pornit, curent de scurgere, cabluri de masă.",
      "Reparăm instalația electrică și echipamentul electric — inclusiv demarorul și alternatorul, în același atelier.",
      "12 luni garanție la reparațiile efectuate.",
    ],
    body: [
      {
        type: "p",
        text: "Diagnosticarea computerizată este punctul de plecare, nu răspunsul final. Calculatorul automobilului semnalează circuitul în care a văzut o valoare anormală; piesa vinovată se stabilește după aceea, cu aparatul de măsură în mână. Lucrăm în acest fel pentru ca înlocuirile inutile de piese să nu ajungă pe nota dumneavoastră de plată.",
      },
      { type: "h2", text: "Ce cuprinde o ședință de diagnosticare" },
      {
        type: "ul",
        items: [
          "Conectarea la mufa de diagnosticare și citirea codurilor de eroare din blocurile electronice disponibile — motor, transmisie, ABS, airbag, confort.",
          "Interpretarea codurilor: fiecare cod este verificat pe circuitul la care se referă, ca să separăm cauza de consecință.",
          "Citirea parametrilor în timp real: tensiunea de alimentare, semnalele senzorilor, comenzile date de calculator.",
          "Verificarea circuitului de încărcare: tensiunea bateriei în repaus și la motor pornit, comportamentul alternatorului în sarcină, starea cablurilor de masă și a clemelor.",
          "Măsurarea curentului de scurgere cu contactul oprit, atunci când bateria se descarcă fără motiv aparent.",
          "Verificarea siguranțelor, releelor și conexiunilor din tabloul de siguranțe.",
          "Ștergerea codurilor după remediere și o nouă citire de control, ca să se vadă dacă defectul revine.",
        ],
      },
      { type: "h2", text: "Cu ce probleme veniți cel mai des la noi" },
      {
        type: "ul",
        items: [
          "Martorul bateriei aprins pe bord sau care se aprinde intermitent în mers.",
          "Motorul nu pornește: demarorul nu reacționează la cheie ori se aude un singur clic.",
          "Bateria este descărcată dimineața, deși seara automobilul funcționa normal — semn clasic de consum parazit.",
          "Siguranțe care se ard repetat, miros de plastic încins, mufe și borne topite.",
          "Încărcare defectuoasă: tensiune prea mică sau prea mare la bornele bateriei.",
          "Consumatori care nu mai funcționează: lumini, geamuri electrice, ventilator, închidere centralizată, senzori.",
          "Erori care revin după ștergere sau care apar doar pe umezeală și la vibrații.",
        ],
      },
      { type: "h2", text: "Reparația instalației și a echipamentului electric" },
      {
        type: "ul",
        items: [
          "Remedierea defecțiunilor din instalația electrică: întreruperi, scurtcircuite, mase slabe, cabluri roase, mufe corodate.",
          "Repararea echipamentului electric: demaror, alternator, contact de pornire, relee, ventilatoare, motoare de geamuri și de ștergătoare.",
          "Refacerea traseelor de cablu deteriorate, cu izolare și fixare corectă, astfel încât defectul să nu revină după prima iarnă.",
          "Verificarea și înlocuirea siguranțelor, releelor și bornelor de baterie.",
        ],
      },
      {
        type: "note",
        text: "Citirea codurilor de eroare și testarea circuitului de încărcare sunt cele două verificări cu care începe aproape fiecare caz de electrică auto. Le facem înainte de a propune orice piesă.",
      },
      {
        type: "p",
        text: "Dacă diagnosticarea arată că problema este în demaror sau în alternator, agregatul intră direct la reparație în același atelier, iar piesele necesare le avem de regulă pe stoc.",
      },
      { type: "h2", text: "Garanție" },
      {
        type: "p",
        text: "La lucrările de reparație executate se aplică garanția de 12 luni, ca la toate reparațiile din atelier. Pentru piesele montate la cerere de client, garanția este cea a producătorului.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Cât durează o diagnosticare computerizată?",
            a: "Citirea codurilor și verificarea circuitului de încărcare durează în mod obișnuit sub o oră. Timpul suplimentar apare la defectele intermitente: un consum parazit sau un contact care cedează la vibrație se caută pas cu pas, prin măsurători pe fiecare circuit.",
          },
          {
            q: "Diagnosticarea îmi spune exact ce piesă trebuie schimbată?",
            a: "Nu întotdeauna, și e corect să știți asta de la început. Codul de eroare indică circuitul în care calculatorul a citit o valoare anormală, nu piesa defectă. Aceasta se stabilește prin măsurători pe circuitul respectiv. De aceea diagnosticarea la noi nu se termină cu o listă de coduri, ci cu explicația cauzei.",
          },
          {
            q: "De ce se descarcă bateria peste noapte?",
            a: "Cel mai des din trei motive: un consumator care rămâne alimentat după oprirea contactului, o diodă străpunsă în alternator, sau o baterie care nu mai ține încărcarea. Se disting prin măsurarea curentului de scurgere și prin verificarea alternatorului — ambele le facem în atelier.",
          },
          {
            q: "Trebuie să las automobilul la atelier?",
            a: "Pentru o diagnosticare obișnuită nu, se face în prezența dumneavoastră. Automobilul rămâne la atelier doar dacă urmează o lucrare mai lungă sau dacă defectul apare rar și trebuie urmărit.",
          },
        ],
      },
      {
        type: "cta",
        title: "Sunați electricianul auto",
        text: "079 10 77 08. Atelierul este în str. Uzinelor 8/1, Chișinău, cu intrarea din str. Varnița. Luni–vineri 09:00–18:00, sâmbătă 09:00–16:00.",
        label: "Contacte și hartă",
        href: "contacte",
      },
    ],
    seo: {
      title: "Electrician auto și diagnosticare computerizată",
      description:
        "Electrician auto în Chișinău: diagnosticare computerizată, citirea codurilor de eroare, verificarea circuitului de încărcare și reparații electrice auto.",
    },
  },
};

export const services: { index: Doc; items: DocMap } = { index, items };
