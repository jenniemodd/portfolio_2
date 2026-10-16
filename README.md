# Portfolio – Jennie Modd

En personlig portfolio byggd för att presentera mina projekt, min erfarenhet och de tjänster jag erbjuder inom digital marknadsföring och frontendutveckling.

Målet har varit att skapa mer än en traditionell portfolio: en webbplats som visar hur strategi, data, innehåll och kod kan samverka för att skapa tydliga och användarvänliga digitala upplevelser.

## Innehåll

- [Förhandsvisning](#förhandsvisning)
- [Uppdrag och kravspecifikation](#uppdrag-och-kravspecifikation)
- [Design och Figma](#design-och-figma)
- [Vidareutveckling och egna initiativ](#vidareutveckling-och-egna-initiativ)
- [Funktioner](#funktioner)
- [Tekniker](#tekniker)
- [Projektstruktur](#projektstruktur)
- [Komponentstruktur och datahantering](#komponentstruktur-och-datahantering)
- [Kontaktformulär](#kontaktformulär)
- [Kom igång](#kom-igång)
- [Reflektion](#reflektion)

## Förhandsvisning


## Uppdrag och kravspecifikation

Projektet genomfördes som en skoluppgift på utbildningen Front End Developer vid Medieinstitutet. Uppdraget var att designa och utveckla en responsiv portfolio som en single-page application (SPA) med React och TypeScript. Arbetet skulle utgå från skisser i Figma för både desktop och mobil och använda Vite, återanvändbara komponenter, props och state.

Portfolion skulle innehålla minst sex projektkort, navigation mellan sektioner för Hem, Om mig, Projekt och Kontakt samt interaktivitet med `useState`, inklusive projektfiltrering. Övriga krav omfattade responsiv design, animationer, versionshantering med Git och GitHub, driftsättning på Vercel samt en README med projektinformation och instruktioner.

Som extra funktion så var kontrollerat kontaktformulär med validering och felhantering något man kunde lägga till, samt filtrering där flera tekniktaggar kan väljas samtidigt.

## Design och Figma

Jag valde att testa Figma Make för att utforska nya designidéer utifrån min befintliga portfolio, som jag har arbetat med under en längre tid. Det gav mig inspiration till att utveckla den visuella identiteten med fler färger och uttryck, samtidigt som jag ville behålla grunden i min ursprungliga design.

För mig var det viktigt att designen skulle kännas personlig och representera mig, snarare än att upplevas som en generisk, AI-genererad portfolio. Figma Make gav mig en bra utgångspunkt, men resultatet krävde manuella justeringar för att motsvara min vision. Jag har därför arbetat vidare med CSS och bland annat justerat färger och teckenstorlekar samt tagit bort knappar och andra designelement som kändes överflödiga och gjorde helheten rörig.

Den visuella identiteten bygger på stora typografiska uttryck, plommonlila och rosa nyanser, rundade former och tydliga CTA-knappar. Målet är att förmedla både kreativitet och teknisk kompetens utan att designen känns som en generisk AI-design.

Fokus har varit att skapa en sammanhängande design genom hela webbplatsen, med tydlig visuell hierarki, genomtänkta avstånd och en responsiv layout. Genom att kombinera inspiration från AI med egna designbeslut och manuella justeringar har jag kunnat vidareutveckla min befintliga portfolio och skapa ett uttryck som bättre speglar mig och mitt varumärke.

## Vidareutveckling och egna initiativ

Utöver kravspecifikationen valde jag att utveckla en mer långsiktig och hållbar portfolio som på sikt ska kunna integreras med en headless WordPress-lösning. Målet var att skapa en flexibel grund som kan vidareutvecklas i takt med att mina kompetenser och behov växer.

Jag lade även till separata moduler för tjänster och prispaket, med ambitionen att vidareutveckla dessa till egna undersidor med relevant innehåll och SEO-anpassning.

Mitt mål var att skapa mer än en traditionell portfolio som presenterar min erfarenhet och mina projekt. Jag ville bygga en hemsida som också tydliggör vad jag kan erbjuda som Digital Marketing Specialist och, framöver, Front End Developer. På så sätt fungerar webbplatsen både som en presentation av min kompetens och som en grund för min framtida konsultverksamhet.

## Funktioner

- Responsiv layout för olika skärmstorlekar.
- Navigation mellan webbplatsens sektioner.
- Projektkort med filtrering på teknik och kategori.
- Möjlighet att välja flera filter samtidigt.
- Separata sektioner för tjänster och prispaket.
- Kontaktformulär med kontrollerade fält, validering och felhantering.
- Bekräftelse när formuläret har skickats.
- Återanvändbara React-komponenter.
- Projekt-, tjänste- och paketdata separerade från presentationen.

## Tekniker

- **React** – komponentbaserad uppbyggnad av gränssnittet.
- **TypeScript** – typning av data och komponentlogik.
- **Vite** – utvecklingsmiljö och byggverktyg.
- **CSS Modules** – komponentnära styling.
- **CSS** – responsiv design och visuella effekter.
- **Git och GitHub** – versionshantering.
- **Vercel** – driftsättning.
- **Figma och Figma Make** – design och utforskning av visuella idéer.
- **Formspree** – hantering av kontaktformuläret.

## Projektstruktur

Nedan visas en förenklad struktur över de viktigaste delarna av projektet. 

├── components/
│   ├── Navigation.tsx
│   ├── Navigation.module.css
│   ├── Hero.tsx
│   ├── Hero.module.css
│   ├── Projects.tsx
│   ├── Projects.module.css
│   └── ...
├── data/
│   ├── projects.ts
│   ├── packages.ts
│   └── services.ts
├── types/
│   ├── project.ts
│   └── package.ts
├── App.tsx
└── main.tsx

## Komponentstruktur och datahantering

Webbplatsen är uppbyggd av separata React-komponenter för att göra koden enklare att läsa, underhålla och vidareutveckla. Varje komponent ansvarar för en avgränsad del av gränssnittet, exempelvis navigation, projekt, tjänster, prispaket eller kontaktformulär.

Projektdata, tjänstedata och paketdata hålls separerade från presentationen. TypeScript-typer används för att beskriva strukturen på datan och hjälpa till att upptäcka fel under utvecklingen.

Projektfiltreringen hanteras med Reacts `useState`. Det gör att användaren kan välja flera filter samtidigt och att projektlistan uppdateras utifrån de valda kategorierna.

## Kontaktformulär

Kontaktformuläret använder Formspree för att hantera inskickade meddelanden. Formuläret har kontrollerade fält och validering för att hjälpa användaren att fylla i uppgifterna korrekt. Felmeddelanden visas vid ogiltiga fält eller problem vid inskickning, och ett bekräftelsemeddelande visas när formuläret har skickats.

## Kom igång

### Förutsättningar

Du behöver ha Node.js och npm installerat.

### Installera och starta projektet

1. Klona repot:

   ```bash
   git clone <repository-url>
   ```

2. Gå till projektmappen:

   ```bash
   cd <project-folder>
   ```

3. Installera beroenden:

   ```bash
   npm install
   ```

4. Starta utvecklingsservern:

   ```bash
   npm run dev
   ```

5. Skapa en produktionsbuild:

   ```bash
   npm run build
   ```

Byt ut `<repository-url>` och `<project-folder>` mot projektets faktiska värden.

## Reflektion

Arbetet med portfolion har gett mig möjlighet att utveckla både mina frontendkunskaper och mitt sätt att tänka kring design, struktur och användarupplevelse. Jag har arbetat med att dela upp webbplatsen i återanvändbara komponenter, hantera interaktivitet med state och använda TypeScript för att skapa tydligare datastrukturer.

Utöver de ursprungliga kraven valde jag även att vidareutveckla projektets kodstruktur genom att separera återanvändbara TypeScript-typer från datan. Exempelvis placerade jag typen `Package` i en egen fil i `types/`, i stället för att definiera den direkt i `data/packages.ts`. Syftet var att skapa en tydligare ansvarsfördelning mellan datamodeller och innehåll samt göra projektet enklare att underhålla och vidareutveckla. Jag vill att strukturen ska kunna växa med webbplatsen, exempelvis om den senare integreras med en headless WordPress-lösning.

Jag använde AI-verktyg som stöd för att utforska designidéer, diskutera lösningar, få förslag på kod och felsöka problem. Förslagen var en utgångspunkt, inte ett färdigt resultat. Jag gick igenom och anpassade lösningarna själv, bland annat genom att justera CSS, färger, avstånd och komponenternas innehåll för att få ett resultat som stämde med min egen vision.

En viktig lärdom har varit att en fungerande lösning inte automatiskt är den bästa lösningen. Jag har behövt utvärdera vad som faktiskt tillför värde, förenkla där det behövts och försöka hitta en balans mellan visuell design, användbarhet och en kodstruktur som är lätt att förstå. Portfolion är därför både en presentation av mina nuvarande kunskaper och en grund som jag vill fortsätta utveckla.

---

## Länkar

- **Liveversion:** [jenniemodd.se](https://jenniemodd.se)
- **GitHub:** [Lägg till länk till repository](<repository-url>)
