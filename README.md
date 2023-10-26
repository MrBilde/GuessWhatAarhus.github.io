# Guess Whats hjemmeside

Dette GitHub repository indeholder alle kildefiler og kode til Guess Whats hjemmeside.

Denne README fil er delt ind i to sektioner. Den første beskriver, hvordan man som bruger admin panelet på guess-what.com/admin.
Anden sektion går mere i dybden og er relevant, hvis man ønsker at ændre mere fundamentale ting på hjemmesiden, som for eksempel dens design.

## Admin panelet
Admin panelet tilgåes på guess-what.com/admin og kræver login.
Panelet er lavet med [TinaCMS](https://tina.io/).

Når du er logget ind, vil du i venste side se en menu opdelt i **Collections**, **Site** og **Cloud**.
De to første sektioner er relevante for almindeligt brug, og den sidste er til mere avanceret konfigurering.

Under **Collections** kan du se tre punkter: **Pages**, **Menu**, og **Settings**.

### Pages
På **Pages** siden kan du se de forskellige sider på hjemmesiden, for eksempel forsiden, lyt siden osv.
For at redigere en side skal du trykke på dens navn.
Derefter vil du blive præsenteret for en form med fire bokse: 

- Title: 
  - Titlen på siden
- Draft:
  - Hvorvidt siden stadig er et udkast og dermed ikke skal publiceres.
- Permalink:
  - Dette felt bruges til at overskrive det automatiske "permalink" for siden.
  - Permalinket er den del af hjemmeside adressen som specificerer den relevante side, for eksempel "/bliv-medlem" i "guess-what.dk/bliv-medlem".
  - Hvis feltet er tomt vil permalinket blive sidens filnavn lavet om så den kun bruger små bogstaver og `_` samt mellemrum vil blive erstattet med `-`.
  - Feltet er til stede for at kunne sætte forsidens permalink til "index.html" i stedet for det automatiske "/forside". Dette er nødvendigt for at "guess-what.dk/" vil lede direkte til forsiden. Dette sker fordi "index.html" har en særlig betydning.
- Hero image
  - Et såkaldt hero image er et stort billede i starten af en side.
  - Pt. har kun forsiden et hero image.
  - Hvis man trykker på feltet, dukker to ekstra felter op:
    - Image: Hvor man kan vælge det aktuelle billede
    - Extra CSS classes: Ekstra indstillinger i forhold til designet (avanceret brug)
- Body
  - Her skrives teksten til selve hjemmesiden.
  - Links, billeder, fed skrift osv. understøttes og vises direkte.
  - Bagvedliggende bruges tekstformateringssproget [markdown](https://www.markdownguide.org/), og du kan se selve markdown teksten ved at trykke på det lille markdown ikon til højre for *i'et* med kursiv skrift.
  - Ud over markdown, så understøttes de følgende specielle kommandoer, lavet specifikt til siden:
    - `audio`:
      - For at tilføje lydfiler som kan afspilles på siden, som det ses på "/lyt" siden, bruges audio kommandoen.
      - Kommandoen tager to argumenter, en titel og en sti til en lydfil. Begge argumenter skal starte og slutte med anførselstegn `"`.
      - Eksempel: `{% audio "Vi Fik Ikke Nogen Besked" "/static/media/audio/Vi_Fik_Ikke_Nogen_Besked.mp3" %}`
        - Filen kan ses under **Site**/**Media Manager** i menuen til venstre, hvilket beskrives længere nede.
    - `youtube`:
      - For at tilføje YouTube videoer direkte på siden.
      - Kommandoen tager to argumenter, en titel samt id'et på videoen. Begge argumenter skal starte og slutte med anførselstegn `"`.
      - Id'et kan ses i URL'en på YouTube. For Gangnam Style er Id'et `9bZkp7q19f0` (https://www.youtube.com/watch?v=9bZkp7q19f0)
      - Eksempel: `{% youtube "PSY - GANGNAM STYLE(강남스타일) M/V" "9bZkp7q19f0" %}`
    - `emphasize`:
      - For at bringe fokus til tekst, hvor sidens temafarve (gul) bruges.
      - Kommandoen tager et enkelt argument, som er selve teksten.
      - Eksempel: `{% emphasize "Guess What!" %}`

Når der trykkes på **Save** knappen, så går der nogle minutter før ændringerne kan ses på hjemmesiden.
Dette skyldes, at hjemmesiden at bygges først og det tager lidt tid.

### Menu
På **Menu** siden er der en enkelt fil kaldet `navigation.yaml` som indeholder menupunkterne der ses i toppen af selve hjemmesiden.
Rækkefølgen kan ændres, nye menupunkter kan tilføjes og nuværende menupunkter kan ændres.
Hvis du trykker på et *Menu item* kan du redigere

- Text: Selve teksten som vises.
- Link: Linket der refereres til.
  - Dette svarer til det permalink, som siden har, hvilket er beskrevet ovenover.
  - For forsiden er permalinket blot en skråstreg `/`, da det svarer til `guess-what.dk/`.
  
### Settings
På **Settings** siden er der en enkelt fil kaldet `settings.yaml`, hvori man kan ændre sidens titel, kreatør og url.
Det er ikke forventet, at disse skal ændres.


### Media Manager
Under **Site** sektionen findes **Media Manager** siden.

Der er to mapper, `img` til billeder og `audio` til lydfiler.
For at uploade nye filer, trykkes der på den relevante mappe og derefter trykker man på **Upload** knappen på siden.

Billederne kan indsættes ved at trykke på billedeknappen mens man redigerer en side.
Lydfiler indsættes ved hjælp af `audio` kommandoen beskrevet ovenover. Her er filnavnet og stien vigtig.
Hvis du tilføjer en ny fil `vores-nye-sang.mp3` i `audio` mappen, vil stien blive `/static/media/audio/vores-nye-sang.mp3`. 

## Avanceret

Denne sektion beskriver sidens underliggende struktur og opbygning.
For at ændre design m.m. er en smule forståelse for HTML og evt. CSS tilstrækkelig.
For lidt mere avancerede ændringer skal man forstå lidt Javascript.
Derudover kræver alle ændringer i denne sektion, at man kan bruge en terminal og versionsstyringsprogrammet [git](https://git-scm.com/), samt at man har en bruger på GitHub. Skriv evt. til Kasper Dissing Bargsteen for hjælp med dette.

### Download og kør hjemmesiden lokalt

- Installer [git](https://git-scm.com/), hvis du ikke allerede har det.
- Åben en terminal, fx Command Prompt, Terminal eller lignende.
- Download projektet med `git clone https://github.com/GuessWhatAarhus/GuessWhatAarhus.github.io.git`
- Naviger til mappen i terminalen med `cd GuessWhatAarhus.github.io`.
- Installer [yarn](https://yarnpkg.com/)
- Klargør projektet ved at installere dependencies med `yarn install`
- Kør projektet med `yarn start`.
 - Du kan nu se hjemmesiden lokalt på http://localhost:8080
 
### Gem ændringer

- Gem ændringerne ved at køre `git commit -m "BESKRIVELSE AF ÆNDRINGER"` i en terminal
- Send ændringerne til "skyen" med `git push`.
- Lær mere om git på https://www.atlassian.com/git

### Projektets struktur

Projektet er bygget med static site generatoren [eleventy](11ty.dev), hvilket tager markdown filer samt template/design filer og kombinerer dem til helt almindelig HTML filer som kan uploades på en hjemmeside.

Al indholdet på hjemmesiden er derfor gemt i markdown (`.md`) filer i mappen `src/pages`. For at gøre det nemt at redigere, bruges [TinaCMS](https://tina.io), der giver et admin panel, hvor man kan redigere filerne og hvor de automatisk deployes.

CSS frameworket [Tailwind CSS](https://tailwindcss.com/) bruges, hvilket har et væld af små CSS klasser, som skrives direkte i HTML'en. Det er meget nemt at bruge og de har god dokumentation.

[Alpine.js](https://github.com/alpinejs/alpine) er et Javascript framework som bruges til at lave de få dynamiske elementer på siden. For eksempel menuen på mobil telefoner.

#### Mappen `src`
Indeholder al teksten til siderne samt deres design i HTML.

- Mappen `pages`
  - Indeholder de markdown filer som redigeres i adminpanelet.
- Mappen `_data`
  - Indeholder navigation og settings filerne som kan redigeres i adminpanelet.
- Mappen `_includes`
  - Indeholder de HTML filer som beskriver designet af hjemmesiden
  - `default.html`
    - Er basis designet. Det er en blanding af HTML og template sproget [Nunjuncks](https://mozilla.github.io/nunjucks/).
    - Designet inkluderer delelementerne `/partials/navbar.html` og `/partials/footer.html`.
  - `pages.html`
    - Er designet der bruges til alle sider `pages` mappen med markdown filer.
    - Den bruger `default` siden som udgangspunkt og tilføjer lidt ekstra, blandt andet hero billedet beskrevet længere oppe.
  - Mappen `partials`
    - `email-form.html`: Designet af email formen
    - `footer.html`: Designet af footeren, altså bunden af siden
    - `navbar.html`: Designet af menuen, der bliver til et lille burger ikon på mobiler.
    
#### Mappen `static`
Indeholder de statiske filer, fx billeder, lydfiler og CSS designfiler.

#### Mappen `tina`
Indeholder konfiguration af adminpanelet.

#### Mappen `.github`
Indeholder koden der køres automatisk når man kører `git push` og får hjemmesiden bygget og lagt tilgængelig på guess-what.dk.

#### Mappen `_site` (genereret)
Indeholder selve den genererede hjemmeside. Når man kører `yarn start`, så kombineres filerne i `src/pages` med de øvrige designfiler i `src` for at lave almindelige HTML sider som kan vises.
Denne mappe eksisterer kun, hvis man har kørt `yarn start` mindst en gang.

#### Diverse filer

- `eleventy.js`
  - Indeholder opsætning af EleventyJS. Hvert element er beskrevet med kommentater.
- `.eleventyignore`
  - Beskriver filer som skal ignoreres når hjemmesiden bygges.
- `.gitignore`
  - Beskriver filer som ikke skal medtages i `git commit` og `git push`.
- `CNAME`
  - Beskriver navnet på domænet. Denne fil gør at domænet guess-what.dk leder hen til den server hvor hjemmesiden ligger.
- `LICENSE`
  - Licens fil. Kan ignoreres.
- `README.md`
  - Filen du læser lige nu.
- `package.json`
  - Konfiguration af `yarn`, hvor nødvendige pakker specificeres og forskellige kommander beskrives, blandt andet `yarn start` kommandoen.
- `postcss.config.js`
  - [PostCSS](https://postcss.org/) konfigurationsfil. Det bør ikke være nødvendigt at ændre denne.
- `tailwind.config.js`
  - Konfigration af TailwindCSS inklusiv hvilke ekstra pakker der bruges.
- `yarn.lock`
  - En automatisk generet fil, der beskriver de specifikke versioner af pakkerne brugt af `yarn`.
