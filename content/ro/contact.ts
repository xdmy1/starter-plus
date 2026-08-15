import type { Doc } from "@/content/types";

export const contact: Doc & { formIntro?: string } = {
  title: "Contacte",
  short: "Contacte",
  excerpt: "Atelierul se află pe str. Uzinelor 104, în Chișinău — aceeași adresă apare și ca Lunca Bâcului 35 A.",
  lead: "Puteți veni cu automobilul sau doar cu demarorul ori alternatorul demontat: verificăm ambele variante la atelier. Dacă nu sunteți sigur care este defecțiunea, sunați înainte și descrieți simptomul — de multe ori se clarifică la telefon.",
  highlights: [
    "str. Uzinelor 104, Chișinău (Lunca Bâcului 35 A) — intrare din str. Lunca Bâcului",
    "Luni – Vineri 09:00 – 18:00 · Sâmbătă 09:00 – 16:00 · Duminică zi liberă",
    "Startere și generatoare: 069 30 77 08, 079 30 77 08",
    "Electrician auto și diagnosticare: 079 10 77 08",
    "Examinare și deviz în ziua în care primim agregatul",
  ],
  formIntro: "Scrieți în două rânduri ce se întâmplă cu automobilul și lăsați un număr de telefon. Vă sunăm și vă spunem ce urmează: diagnosticare la atelier, reparație sau înlocuirea agregatului.",
  body: [
    { type: "h2", text: "Cum ajungeți la atelier" },
    {
      type: "p",
      text: "Atelierul este în zona industrială de pe str. Uzinelor, la numărul 104. Se ajunge ușor cu automobilul, inclusiv cu camioane și utilaj special, pentru că accesul se face pe drumul de serviciu, nu prin curți de bloc.",
    },
    {
      type: "note",
      text: "Adresa are două denumiri: str. Uzinelor 104 și Lunca Bâcului 35 A. Navigația poate afișa oricare dintre ele — este același loc. Intrarea pe teritoriu se face din str. Lunca Bâcului. Dacă ajungeți și nu găsiți intrarea, sunați de la fața locului la 069 30 77 08.",
    },
    {
      type: "p",
      text: "În curte se poate intra cu automobilul și lăsa mașina cât durează verificarea. Dacă ajungeți și nu găsiți intrarea, sunați de la fața locului la 069 30 77 08 — vă ghidăm în câteva secunde.",
    },

    { type: "h2", text: "Telefoane" },
    {
      type: "p",
      text: "Sunați direct pe linia de care aveți nevoie: la reparații răspunde atelierul de startere și generatoare, la electrică răspunde electricianul auto.",
    },
    {
      type: "table",
      head: ["Telefon", "Pentru ce sunați"],
      rows: [
        ["069 30 77 08", "Reparația starterelor și generatoarelor, comenzi de piese și componente"],
        ["079 30 77 08", "Aceleași solicitări, a doua linie — folosiți-o dacă prima este ocupată"],
        ["079 10 77 08", "Electrician auto și diagnosticare computerizată a automobilului"],
      ],
    },
    {
      type: "p",
      text: "Pentru cereri scrise, oferte pentru firme și facturi: starter-plus@mail.ru. La e-mail răspundem în timpul programului de lucru.",
    },

    { type: "h2", text: "Program de lucru" },
    {
      type: "table",
      head: ["Zi", "Ore"],
      rows: [
        ["Luni – Vineri", "09:00 – 18:00"],
        ["Sâmbătă", "09:00 – 16:00"],
        ["Duminică", "zi liberă"],
      ],
    },
    {
      type: "note",
      text: "Sâmbăta programul este mai scurt. Dacă lăsați un demaror sau un alternator pentru reparație, veniți în prima parte a zilei — așa apucăm să facem examinarea și devizul înainte de închidere.",
    },

    { type: "h2", text: "Ce se întâmplă când ajungeți" },
    {
      type: "steps",
      items: [
        {
          title: "Spuneți ce se întâmplă",
          text: "Descrieți simptomul cât mai concret: demarorul nu se rotește, se aude un singur clic, motorul pornește greu la rece, becul de baterie rămâne aprins, bateria se descarcă peste noapte. Detaliile scurtează diagnosticarea.",
        },
        {
          title: "Examinare și deviz",
          text: "Demontăm agregatul, curățăm piesele și verificăm bobinajele, colectorul, puntea de diode, rulmenții și bucșele. Apoi primiți devizul cu piesele care trebuie înlocuite. Pentru un agregat adus la atelier, examinarea și devizul se fac în ziua primirii.",
        },
        {
          title: "Decideți dumneavoastră",
          text: "Lucrarea începe numai după ce acceptați devizul, iar termenul convenit nu depășește 2 zile. Dacă reparația nu se justifică, vă spunem direct și vă propunem un agregat nou sau recondiționat din stoc.",
        },
        {
          title: "Predare cu garanție",
          text: "După asamblare verificăm funcționarea agregatului și abia apoi îl predăm. Reparația efectuată și piesele noi au garanție de 12 luni, iar unitățile și piesele second-hand între 3 și 6 luni.",
        },
      ],
    },

    { type: "h2", text: "Ce este bine să aveți cu dumneavoastră" },
    {
      type: "ul",
      items: [
        "Agregatul complet, dacă îl aduceți demontat: demarorul cu bendix și releu de cuplare, alternatorul cu fulie și releu regulator. O piesă parțial dezasamblată se verifică mai greu.",
        "Datele automobilului: marca, modelul, anul și motorizarea. Ideal, numărul de pe plăcuța demarorului sau a alternatorului.",
        "Codul VIN, dacă îl aveți la îndemână — după el identificăm piesa exactă atunci când există mai multe variante pentru același model.",
        "Documentul de la lucrarea anterioară, dacă agregatul este în perioada de garanție acordată de noi.",
        "Pentru firme: datele de facturare, dacă plata se face prin transfer bancar.",
      ],
    },

    { type: "h2", text: "Firme, parcuri auto și documente" },
    {
      type: "p",
      text: "Lucrăm cu companii de transport, autoservice-uri și deținători de parcuri auto: preluare pe bază de contract, plată în numerar sau prin transfer, garanție documentată pe lucrări. Datele juridice și bancare complete sunt pe pagina de rechizite.",
    },
    {
      type: "cta",
      title: "Aveți un parc auto de întreținut?",
      text: "Condițiile de colaborare, sistemul de reduceri și forma de plată pentru persoane juridice.",
      label: "Persoane juridice",
      href: "info/persoane-juridice",
    },

    { type: "h2", text: "Întrebări frecvente" },
    {
      type: "faq",
      items: [
        {
          q: "Trebuie să sun înainte de a veni?",
          a: "Nu este obligatoriu, puteți veni în timpul programului. Un telefon înainte ajută totuși: aflăm ce automobil aveți, verificăm dacă piesa de care ați putea avea nevoie este în stoc și vă spunem dacă merită să veniți cu mașina sau doar cu agregatul demontat.",
        },
        {
          q: "Pot veni doar cu piesa, fără automobil?",
          a: "Da, majoritatea clienților aduc demarorul sau alternatorul demontat. Verificăm agregatul separat și vă dăm devizul. Dacă însă problema nu este clar în agregat — bateria se descarcă, siguranțele sar, motorul pornește intermitent — veniți cu automobilul, pentru că defectul poate fi în instalație, în contactul de pornire sau în baterie.",
        },
        {
          q: "Cât durează o reparație?",
          a: "Examinarea și devizul se fac în ziua în care primim agregatul. După ce acceptați devizul, lucrarea se încadrează în cel mult 2 zile. Termenul exact vi-l comunicăm odată cu devizul, pentru că depinde de piesele necesare.",
        },
        {
          q: "Ce garanție primesc?",
          a: "12 luni la reparația efectuată și la demaroarele și alternatoarele noi, 3–6 luni la unitățile și piesele second-hand. Garanția acoperă toate subansamblurile și piesele înlocuite, cu condiția respectării regulilor de exploatare descrise la condițiile de garanție.",
        },
      ],
    },
  ],
  seo: {
    title: "Contacte — atelier demaroare și alternatoare Chișinău",
    description: "Adresa, telefoanele și programul atelierului Starter Plus din Chișinău: str. Uzinelor 104 (Lunca Bâcului 35 A). Reparații demaroare și alternatoare.",
  },
};
