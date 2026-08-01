import type { Article } from "@/content/types";

export const article: Article = {
  title: "Cum să distrugeți rapid alternatorul și demarorul",
  short: "Cum distrugeți un alternator",
  excerpt: "Un ghid scris ironic, după ani de „dar eu n-am făcut nimic”: nouă metode verificate de a arde un alternator sau un demaror, cu procentele și cazurile lor reale.",
  lead: "În atelier auzim aproape zilnic aceeași replică, rostită cu uimire sinceră: „Cum adică s-a ars? Cum poate să se ardă? Eu n-am făcut nimic!” Ca să nu mai rămână loc de îndoială, am adunat mai jos câteva sfaturi care răspund la întrebarea cum se arde rapid și sigur un agregat îndărătnic. Sperăm să vă fie de folos în această îndeletnicire pasionantă.",
  date: "2021-05-21",
  readingMinutes: 9,
  tag: "Sfaturi",
  highlights: [
    "Cinci metode pentru alternator, patru pentru demaror — toate din practica atelierului.",
    "Inversarea polarității: punte de diode arsă în 99% din cazuri.",
    "Un caz real: scurgere de 60 A într-o baterie moartă, la un alternator de 70 A.",
    "Demaror ținut în „Start” după pornire: cinci minute până la capăt.",
    "La final, pe scurt, ce trebuie făcut exact invers.",
  ],
  body: [
    { type: "h2", text: "Cum se arde un ALTERNATOR" },

    { type: "h3", text: "1. „Inversarea polarității” — cea mai bună și cea mai rapidă" },
    {
      type: "p",
      text: "Schimbați între ele cablurile de la bornele bateriei de acumulator. Efectul nu este doar optic — un flash luminos în interiorul alternatorului, un mic nor de fum — ci și sonor, de la un clic până la o pocnitură cu șuierat, apoi olfactiv, cu inconfundabila aromă de conductor ars, și, în sfârșit, tactil: arsură de gradul 1–3, gradul se alege experimental.",
    },
    {
      type: "p",
      text: "După aplicarea acestei metode, puntea de diode se arde cu o probabilitate de 99%, statorul 60%, releul regulator 20%, cablajul 10%, automobilul în întregime 0,01%. Metoda este deosebit de eficientă la pornirea cu cabluri de la alt automobil. Efecte secundare posibile: arderea calculatoarelor de bord, a alarmei, a sistemului audio. Marele avantaj este că nu cere cunoștințe speciale și se însușește ușor de către începători.",
    },

    { type: "h3", text: "2. Metoda „Spălare”" },
    {
      type: "p",
      text: "Spălați motorul automobilului. Spălați cu deosebită atenție alternatorul și urmăriți ca jeturile de apă să clătească bine toate măruntaiele agregatului. În niciun caz nu suflați alternatorul cu aer după spălare. Porniți imediat motorul și cuplați cât mai multe consumatoare: toate luminile, încălzirea, sistemul audio. Dacă efectul nu apare, repetați încercarea. Va apărea, credeți-ne. Un avantaj în plus: alternatorul ars va fi curat.",
    },

    { type: "h3", text: "3. Metoda „bunicului”" },
    {
      type: "p",
      text: "Smulgeți borna de plus de la baterie cu motorul pornit, chipurile pentru a verifica sistemul de încărcare. Procentul releelor arse urcă la 50–70%. Metoda cere o anumită dexteritate — important este să iasă cât mai multe scântei. Procesele de comutație de înaltă tensiune care apar în circuite trebuie, mai devreme sau mai târziu, să ardă ceva în alternatorul dumneavoastră sau, în cel mai rău caz, în automobil.",
    },
    {
      type: "p",
      text: "Ca de obicei, se recomandă să porniți cât mai multe consumatoare: lumini, aeroterme, încălziri. Metoda nu este foarte eficientă pe automobilele vechi, dar pe cele noi, cu puțin noroc, puteți scoate din funcțiune și calculatorul de bord, alarma și sistemul audio. Important este să credeți că așa va fi.",
    },

    { type: "h3", text: "4. Metoda „Balta”" },
    {
      type: "p",
      text: "O metodă folosită de o mulțime de conducători auto fără ca ei măcar să bănuiască. Mulți sunt convinși, sincer și copilăresc, că automobilul și agregatele lui, alternatorul inclusiv, ar trebui să fie etanșe ca un submarin. Un astfel de căpitan ratat, la volanul unui Mercedes, întrebat „și mare era balta?”, a răspuns: „Nu, s-a oprit după vreo șaizeci de metri, și la început era mică — deși, ca să fiu sincer, capătul bălții nu l-am văzut niciodată.” Era început de primăvară, undeva la marginea orașului.",
    },
    {
      type: "p",
      text: "Un sfat simplu în plus: balta trebuie luată cu viteza maximă posibilă, urmărind cu atenție ca stropii să inunde uniform tot compartimentul motor. Absența scuturilor de protecție și a carterului de sub motor vă ușurează considerabil sarcina. Avantaj foarte mare: metoda poate fi folosită practic zilnic, fără să coborâți din automobil.",
    },

    { type: "h3", text: "5. Metoda „Melomanul” și bateria obosită" },
    {
      type: "p",
      text: "Pentru cei foarte tari. Montați în mașinuța dumneavoastră un sistem audio super, o pereche de changere de CD-uri, două-trei amplificatoare cu lămpi de 200–300 W fiecare, un subwoofer de 500 W și vreo zece difuzoare, mai bine cincisprezece. În general, cu cât mai multe, cu atât mai bine. Vreo 12–25 de mii de dolari. Nu este o exagerare, cazul este documentat. Porniți! Dacă după câteva minute alternatorul încă funcționează, iar fumul și mirosul caracteristic tot nu apar, înseamnă că ați cumpărat aparatură prea ieftină.",
    },
    {
      type: "p",
      text: "Varianta „acumulator” este cea mai perfidă și cea mai misterioasă dintre toate, pentru că înțelegerea ei cere cunoștințe de chimie și de fizică — măcar legea lui Ohm, ceea ce nu le este dat tuturor. Mai simplu spus: folosiți o baterie de acumulator expirată de mult, de cel puțin trei-cinci ani. Cu cât mai bătrână, cu atât mai mari șansele să aibă un element scurtcircuitat. Bateria poate da în continuare semne de viață — pornește motorul, se încarcă de la redresor — dar devine o sarcină parazită puternică în circuitul alternatorului.",
    },
    {
      type: "p",
      text: "La un automobil japonez am înregistrat o scurgere spre baterie de 60 A, la un alternator cu debit nominal de 70 A. Este limpede că cei 10 A rămași ajungeau, cu chiu și vai, pentru funcționarea injecției, iar la aprinderea farurilor de drum și a încălzirii alternatorul se încingea atât încât putea fi folosit la prăjit ouă în condiții de camping. Marele avantaj al acestei metode este că se produce oricum, cândva, și fără dorința dumneavoastră. Trebuie doar să învățați să așteptați.",
    },

    { type: "h2", text: "Și acum câte ceva despre cum se arde DEMARORUL" },

    { type: "h3", text: "1. Metoda „Clasică”" },
    {
      type: "p",
      text: "După ce ați pornit motorul, continuați să țineți cheia în contactul de pornire, în poziția „Start”. Corectitudinea acțiunilor dumneavoastră se apreciază după scrâșnetul caracteristic pe care îl scoate în convulsiile de dinaintea sfârșitului orice demaror care se respectă. Dacă din fire nu sunteți sadic, sfârșitul iubitului demaror poate fi grăbit cu puțină accelerație, urcând motorul la 3000–4000 rot/min.",
    },
    {
      type: "p",
      text: "La un raport între rotațiile volantei și cele ale demarorului de circa 1:20, nu este greu de calculat viteza cu care bendixul încearcă să prindă din urmă coroana volantei la asemenea turații. Urmărirea se încheie invariabil: bendixul, transpirat serios, se supraîncălzește și se blochează, apropiind finalul fatal. Bendixul blocat trage după el fie axul cu grupul planetar și rotorul, fie direct rotorul, la demaroarele fără reductor.",
    },
    {
      type: "p",
      text: "Apoi colectorul, care se rotește deja nebunește, face praf în câteva secunde ce a mai rămas din perii, iar rotorul se încălzește până la o culoare albăstruie. Pe parcurs se mai rup suporturile de perii, inelul de plastic al grupului planetar se împrăștie în bucăți mici și, uneori, chiar carcasa demarorului crapă. Pe scurt, când în locul scrâșnetului demarorul începe să scoată un fel de grohăit nedeslușit, sau de sub capotă apare un fir de fum, procedura poate fi considerată încheiată. Totul ar trebui să dureze cel mult cinci minute.",
    },
    {
      type: "p",
      text: "Din observațiile noastre, această metodă de luptă cu demaroarele place mult persoanelor care au față de tehnică o atitudine strict botanică. Să remarcăm și că un contact de pornire defect preia adesea singur conducerea operațiunii, mai ales la automobilele diesel, unde demaroarele au de regulă putere mai mare și, prin urmare, prin contactele contactului de pornire trec curenți considerabil mai mari, din care motiv contactele se ard cu timpul și rămân lipite.",
    },

    { type: "h3", text: "2. Metoda „Ecologică”, alias „Economică”, „Pentru leneși”, „Nu vreau să împing!”" },
    {
      type: "p",
      text: "Dacă vă este aproape tema ecologiei, nimic nu vă împiedică să vă transformați automobilul în vehicul electric chiar acum. Nu aveți benzină în rezervor? Nici nu trebuie. Cuplăm curajos o treaptă de viteză și răsucim cheia. Ura, merge! Metoda se poate folosi și când ați rămas într-o baltă mare — nu-i cazul să vă udați picioarele — sau la intrarea în garaj, unde cheia se pierde mereu, în general oricând vă este lene să căutați ceva, să înțelegeți ceva sau pur și simplu să vă ridicați din scaunul cald.",
    },
    {
      type: "p",
      text: "Ei bine, câteva sute de metri se pot parcurge așa, și cu siguranță va fi cântecul de lebădă al demarorului. Chiar dacă vă dezmeticiți la jumătatea drumului, după rănile primite demarorul nu mai este de trăit pe lumea asta. Exhumarea demaroarelor terminate astfel arată o identitate perfectă între rămășițele lor și măruntaiele agregatelor răpuse prin metoda „Clasică”.",
    },

    { type: "h3", text: "3. Metoda „Eterul” — numai pentru dieseliști" },
    {
      type: "p",
      text: "Dieseliștii sunt oameni economi: nu fiecare se apucă să alimenteze cu motorină de iarnă în ger cumplit. Mult mai simplu este să pulverizezi puțin eter unde trebuie — și iată, pare că a pornit. Doar că ce este acest zgomot suspect care vine acum de la demaror? Ia te uită, bendixul e terminat. Vai, a crăpat și carcasa demarorului? A, da, a fost un fel de detonație la pornire, dar ce legătură are?",
    },
    {
      type: "p",
      text: "Are toată legătura. La o reglare greșită a pompei de injecție și la folosirea „diluanților” de genul eterului, în momentul pornirii motorului este posibilă detonația din cauza aprinderii prea timpurii a amestecului, iar din pricina ei coroana volantei poate da lovituri inverse în bendix. Se știe că raportul de compresie la motoarele diesel este în medie de vreo trei ori mai mare decât la cele pe benzină, prin urmare de trei ori mai mari sunt și suprasarcinile pe care le suportă demarorul la pornire.",
    },
    {
      type: "p",
      text: "Iar dacă la detonație demarorul mai primește și „peste dinți”, atunci nu-i mai ajunge nicio sănătate: demarorul pleacă la knockout. Se rupe nu doar bendixul; adesea nu rezistă nici partea din față a demarorului, masca, și se rupe chiar și axul de oțel al rotorului. Dieseliști, centrele de colectare a fierului vechi vă așteaptă.",
    },

    { type: "h3", text: "4. Metoda „Balta”, varianta pentru demaror" },
    {
      type: "p",
      text: "O metodă veche și de încredere, verificată de multe generații de încăpățânați care consideră că automobilul trebuie să circule pe orice vreme și pe orice drum. Ce să spunem: un duș rece pentru demaror, urmat de încălzirea lui, este o bună călire pentru un demaror adevărat. Păcat doar că mulți dintre ei încep după aceea să „strănute” și să „tușească”, pe mulți îi „lovește paralizia” și pur și simplu se blochează, pentru că adesea rotorul ruginește definitiv împreună cu statorul.",
    },
    {
      type: "p",
      text: "Recomandăm metoda în special posesorilor de automobile cu cutie automată și mai ales tuturor jeep-urilor și celorlalte „de teren”, ai căror proprietari cred naiv că un vehicul de teren este o amfibie confortabilă. În schimb vă veți întări serios musculatura spatelui și a centurii scapulare, împingând tarantasul oprit afară din pădurea mlăștinoasă sau din vadul acela mic. Rămâne totuși de ghicit cum va ajunge acolo platforma de tractare — iar remorcarea cu cablu a unui automobil cu cutie automată este foarte, foarte nerecomandată.",
    },
    {
      type: "p",
      text: "„Demarorul ud, garanția sănătății” — iată ce vă va deveni deviză în timpul plimbărilor pe jos, care vor urma neapărat cât durează reparația demarorului sau căutarea unuia nou.",
    },

    {
      type: "cta",
      title: "Dacă una dintre metode a funcționat deja",
      text: "Demontăm agregatul, îl verificăm la stand și vă spunem în aceeași zi ce se mai poate salva și cât costă.",
      label: "Reparații demaroare",
      href: "servicii/reparatii-demaroare",
    },
    {
      type: "note",
      text: "Textul de mai sus este scris ironic: fiecare „metodă” este un caz pe care l-am reparat în atelier. Pe scurt, ce trebuie făcut exact invers — verificați polaritatea de două ori înainte de a lega cabluri la baterie; nu îndreptați jetul de presiune spre alternator și spre demaror și nu porniți motorul imediat după spălare; nu verificați încărcarea prin smulgerea bornelor, ci cu un voltmetru; eliberați cheia în clipa în care motorul a pornit; nu urniți automobilul cu demarorul; treceți prin apă la pas, nu în viteză; schimbați bateria când și-a făcut vremea, nu când vă lasă în drum. Iar dacă s-a întâmplat deja, spuneți-ne sincer ce a fost — ne scurtează munca și vă scurtează factura.",
    },
  ],
  seo: {
    title: "Cum să distrugeți rapid alternatorul și demarorul",
    description: "Ghid ironic din atelierul Starter Plus, Chișinău: nouă moduri sigure de a arde un alternator sau un demaror — și, la final, ce trebuie făcut exact invers.",
  },
};
