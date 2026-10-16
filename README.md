Jennie Modd – Portfolio

Uppdrag och kravspecifikation

Projektet genomfördes som en skoluppgift på utbildningen Front End Developer vid Medieinstitutet. Uppdraget var att designa och utveckla en responsiv portfolio som en single-page application (SPA) med React och TypeScript. Arbetet skulle utgå från skisser i Figma för både desktop och mobil och använda Vite, återanvändbara komponenter, props och state.

Portfolion skulle innehålla minst sex projektkort, navigation mellan sektioner för Hem, Om mig, Projekt och Kontakt samt interaktivitet med useState, inklusive projektfiltrering. Övriga krav omfattade responsiv design, animationer, versionshantering med Git och GitHub, driftsättning på Vercel samt en README med projektinformation och instruktioner.

För VG ingick bland annat ett kontrollerat kontaktformulär med validering och felhantering, filtrering där flera tekniktaggar kan väljas samtidigt, avancerad animation samt en reflektion kring komponentarkitektur, state-hantering och användning av AI-verktyg.

Vidareutveckling och egna initiativ

Utöver kravspecifikationen valde jag att utveckla en mer långsiktig och hållbar portfolio som på sikt ska kunna integreras med en headless WordPress-lösning. Målet var att skapa en flexibel grund som kan vidareutvecklas i takt med att mina kompetenser och behov växer.

Jag valde även att lägga till separata moduler för tjänster och prispaket, med ambitionen att vidareutveckla dessa till egna undersidor med relevant innehåll och SEO-anpassning.

Mitt mål var att skapa mer än en traditionell portfolio som presenterar min erfarenhet och mina projekt. Jag ville bygga en hemsida som också tydliggör vad jag kan erbjuda som Digital Marketing Specialist och, framöver, Front End Developer. På så sätt fungerar webbplatsen både som en presentation av min kompetens och som en grund för min framtida konsultverksamhet.


### Design & Figma

Jag valde att testa Figma Make för att utforska nya designidéer utifrån min befintliga portfolio, som jag har arbetat med under en längre tid. Det gav mig inspiration till att utveckla den visuella identiteten med fler färger och uttryck, samtidigt som jag ville behålla grunden i min ursprungliga design.

För mig var det viktigt att designen skulle kännas personlig och representera mig, snarare än att upplevas som en generisk, AI-genererad portfolio. Figma Make gav mig en bra utgångspunkt, men resultatet krävde manuella justeringar för att motsvara min vision. Jag har därför arbetat vidare med CSS och bland annat justerat färger och teckenstorlekar samt tagit bort knappar och andra designelement som kändes överflödiga och gjorde helheten rörig.

**Visuell identitet**

Den visuella identiteten bygger på stora typografiska uttryck, plommonlila och rosa nyanser, korallfärgade och gula accenter, rundade former och tydliga CTA-knappar. Målet är att förmedla både kreativitet och teknisk kompetens utan att designen känns som en generisk utvecklarportfolio.

Fokus har varit att skapa en sammanhängande design genom hela webbplatsen, med tydlig visuell hierarki, genomtänkta avstånd och en responsiv layout. Genom att kombinera inspiration från AI med egna designbeslut och manuella justeringar har jag kunnat vidareutveckla min befintliga portfolio och skapa ett uttryck som bättre speglar mig och mitt varumärke.

Figma – De första designskisserna


Övergripande design



Startsida och hero



Projekt och komponenter



✨ Funktioner

Responsiv design för desktop, surfplatta och mobil.

Navigation mellan webbplatsens olika sektioner.

Personlig presentation och professionell bakgrund.

Projektsektion med projektkort och tekniktaggar.

Filtrering av projekt efter kategori, med möjlighet att välja flera filter samtidigt.

Separat funktion för att rensa valda filter.

Presentation av tjänster och prispaket.

Kontaktformulär med validering och felmeddelanden.

Formulärhantering via Formspree.

Återkoppling till användaren efter lyckad formulärinskickning.

Återanvändbara komponenter och separerad data för enklare vidareutveckling.

🛠️ Teknikstack

Frontend

React

TypeScript

CSS Modules

CSS

Utvecklingsverktyg

Vite

npm

Git

GitHub

Visual Studio Code

Design och integrationer

Figma

Formspree

Vercel

📂 Projektstruktur

Projektet är uppbyggt med återanvändbara komponenter och separata datafiler för att göra koden enklare att underhålla och vidareutveckla.

portfolio/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Navigation.module.css
│   │   ├── Hero.tsx
│   │   ├── Hero.module.css
│   │   ├── IntroBanner.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── Packages.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   ├── projects.ts
│   │   └── packages.ts
│   ├── types/
│   │   └── project.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── docs/
│   └── figma/
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md

Obs: Filstrukturen ovan är en översikt. Anpassa den om något filnamn eller någon mapp skiljer sig från den faktiska projektstrukturen.

🚀 Kom igång

Förutsättningar

Node.js

npm

Git

1. Klona projektet

git clone <repository-url>
cd portfolio

Ersätt <repository-url> med adressen till GitHub-repot.

2. Installera beroenden

npm install

3. Starta utvecklingsservern

npm run dev

Vite startar en lokal utvecklingsserver. Öppna adressen som visas i terminalen.

4. Bygg projektet

npm run build

Detta skapar en produktionsversion i mappen dist.

5. Förhandsgranska produktionsversionen

npm run preview

Detta gör det möjligt att testa den byggda versionen lokalt innan publicering.

🧩 Komponentarkitektur

Portfolion är uppdelad i mindre komponenter med tydliga ansvarsområden. Det gör det enklare att utveckla, testa och uppdatera enskilda delar utan att hela webbplatsen behöver ändras.

Varje komponent har i huvudsak sin egen CSS Module, vilket gör att komponenternas styling hålls separat och minskar risken för oavsiktliga CSS-konflikter.

Data för projekt och prispaket ligger i separata filer i stället för att hårdkodas direkt i komponenterna. Det gör innehållet lättare att uppdatera och ger en tydligare separation mellan innehåll, logik och presentation.

📁 Datahantering och filtrering

Projektinformationen lagras separat från presentationen. Projektkomponenten använder datan för att rendera projektkort med titel, beskrivning, tekniktaggar och relevanta länkar.

Projektfiltreringen hanteras med React state. Användaren kan välja flera kategorier samtidigt och kombinera filter. Det finns även en funktion för att återställa filtreringen och visa samtliga projekt.

Detta gör projektsektionen mer flexibel och gör det enklare att lägga till nya projekt utan att behöva bygga om komponentens struktur.

✉️ Kontaktformulär

Kontaktformuläret använder Formspree för att hantera formulärinskickningar utan att behöva bygga en egen backend.

Formuläret innehåller fält för namn, e-postadress, telefonnummer, ämne och meddelande.

Funktionaliteten omfattar:

Kontrollerade formulärfält med React state.

Validering av obligatoriska fält och e-postformat.

Individuella felmeddelanden för formulärfälten.

Hantering av fel från Formspree.

Återkoppling efter lyckad inskickning.

Inaktiverad submit-knapp medan formuläret skickas.

E-postvalideringen kontrollerar formatet, men verifierar inte att e-postadressen faktiskt existerar.

🔍 SEO och vidareutveckling

Ett viktigt mål är att utveckla portfolion till en tekniskt välstrukturerad och sökoptimerad webbplats som kan bidra till både synlighet och nya konsultuppdrag.

Planerad vidareutveckling omfattar bland annat:

Teknisk SEO, inklusive sidtitlar, metabeskrivningar, semantisk HTML och en tydlig rubrikhierarki.

Redaktionell SEO med relevant innehåll kring Front End Development, digital marknadsföring, SEO och konsulttjänster.

Optimering av bilder, laddningstid och Core Web Vitals.

Tillgänglighet och förbättrad användarupplevelse.

Analys och spårning av relevanta interaktioner och konverteringar.

Dedikerade landningssidor för utvalda tjänster.

Möjlig framtida integration med headless WordPress för att hantera innehåll mer flexibelt.

Målet är att skapa en hållbar grund som kan utvecklas vidare utan att behöva bygga om hela webbplatsen.

🌐 Publicering

Portfolion publiceras via Vercel och versionshanteras med GitHub.

Projektet byggs med Vite och använder dist som output-katalog.

Vid utveckling och felsökning testas både utvecklingsservern och produktionsversionen lokalt för att upptäcka eventuella skillnader före publicering.

💭 Reflektion

Det här projektet har varit ett sätt att omsätta mina kunskaper inom Front End Development i ett verkligt projekt med en tydlig användare och ett konkret syfte: att bygga min egen portfolio.

Jag har uppskattat att arbeta praktiskt och lära mig genom att testa, göra misstag och förbättra lösningarna längs vägen. En viktig lärdom har varit vikten av struktur. I början placerade jag exempelvis data direkt i TSX-komponenter, men har successivt lärt mig att separera data, logik och presentation för att göra koden mer lättunderhållen.

Jag har också fått en bättre förståelse för hur komponentarkitektur, TypeScript och CSS Modules kan användas tillsammans för att skapa en flexibel webbplats.

AI-verktyg har varit ett komplement i utvecklingsprocessen. Jag har använt ChatGPT för att diskutera lösningar, få kodförslag, granska kod och förstå CSS och interaktioner. När jag fastnat i felsökning har jag även använt Claude som stöd.

AI-genererad kod har inte bara kopierats in rakt av. Jag har själv testat, utvärderat och justerat lösningarna, bland annat genom att finjustera layout, färger, avstånd och styling samt ta bort onödig kod. Det har varit viktigt att förstå vad koden gör och varför en lösning fungerar.

Framåt vill jag fortsätta utveckla portfolion med fokus på teknisk SEO, prestanda, tillgänglighet och fler dedikerade landningssidor för mina tjänster. På längre sikt ser jag även möjligheten att integrera ett headless CMS för att göra innehållshanteringen mer flexibel.

Målet är att portfolion inte bara ska visa vad jag kan idag, utan även fungera som en plattform för min fortsatta utveckling inom frontend, digital marknadsföring och digitala upplevelser.

Utbildning: Front End Developer, Medieinstitutet
Projekt: Personlig portfolio
Teknik: React, TypeScript, Vite och CSS Modules