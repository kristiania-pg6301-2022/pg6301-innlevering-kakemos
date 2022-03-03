Målet med innleveringen er at man skal kjøre en webapplikasjon på skytjenesten Heroku. Applikasjonen skal være en quiz der brukeren får et quiz-spørsmål og skal velge riktig svar.

**Applikasjonen skal vise at dere behersker:**
- [ ] Parcel
- [ ] React
- [ ] React Router
- [ ] Jest
- [ ] Github Actions
- [ ] Coveralls
- [ ] Express
- [ ] Heroku

**Oppsummert:**
- [ ] Få en Parcel til å bygge en React applikasjon
- [ ] Få React Router til å navigere rundt i applikasjonen
- [ ] Få React til å hente og lagre informasjon til et API
- [ ] Få Github Actions til å kjøre Jest-testene og publisere coverage til Coveralls
- [ ] Få Heroku til å publisere websidene
- [ ] Express-serveren skal ha følgende API:
- [ ] GET /api/question - returnerer et tilfeldig spørsmål med { id, category, question, answers }
- [ ] POST /api/question - tar inn { id, answer } og returnerer "true" eller "false"

Dere kan ta utgangspunkt i følgende eksempel på spørsmål, men dere må endre på formatet som returneres til klienten slik at klienten ikke vet hvilket alternativ som er riktig: https://quizapi.io/

**Steps**
- [x] CLIENT: Legge til index.html og index.jsx i client
- [x] CLIENT: Legge til alle nødvendige dependencies
- [ ] CLIENT: Oppdatere index.jsx med importeringer(react, react-dom, spørsmål etc) og funksjon for å vise spørsmål
  - [ ] Liste spørsmål
  - [ ] Liste svar
  - [ ] Lage knapp til å levere svaret
  - [ ] Knapp til å få nytt spørsmål
- [x] SERVER: Legge til server.js(express med get og post) og questions.js i server
- [x] SEVRER: Legge til alle nødvendige dependencies
- [ ] ROOT: Legge til http.jsx, prettier, shortcuts til client og server, jest, husky og eslint i root.
- [ ] ROOT: Legge til alle nødvendige dependencies
- [ ] JEST: Skrive tester
- [ ] Koble til heroku
- [ ] Koble til Github Actions
- [ ] Koble til Coveralls
- [ ] faen, legge til node_modules i server, dobbeltsjekk AT DEN GITIGNORERES!