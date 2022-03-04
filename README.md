[![Node.js CI](https://github.com/kristiania-pg6301-2022/pg6301-innlevering-kakemos/actions/workflows/node.js.yml/badge.svg)](https://github.com/kristiania-pg6301-2022/pg6301-innlevering-kakemos/actions/workflows/node.js.yml) [![Coverage Status](https://coveralls.io/repos/github/kristiania-pg6301-2022/pg6301-innlevering-kakemos/badge.svg?branch=main)](https://coveralls.io/github/kristiania-pg6301-2022/pg6301-innlevering-kakemos?branch=main)

Link til heroku (som ikke fungerer): https://git.heroku.com/pg6301-mct.git

Målet med innleveringen er at man skal kjøre en webapplikasjon på skytjenesten Heroku. Applikasjonen skal være en quiz der brukeren får et quiz-spørsmål og skal velge riktig svar.

**Applikasjonen skal vise at dere behersker:**
- [x] Parcel
- [x] React
- [x] React Router
- [x] Jest
- [x] Github Actions
- [x] Coveralls
- [x] Express
- [ ] Heroku

**Oppsummert:**
- [x] Få en Parcel til å bygge en React applikasjon
- [x] Få React Router til å navigere rundt i applikasjonen
- [x] Få React til å hente og lagre informasjon til et API
- [x] Få Github Actions til å kjøre Jest-testene og publisere coverage til Coveralls
- [ ] Få Heroku til å publisere websidene
- [x] Express-serveren skal ha følgende API:
- [x] GET /api/question - returnerer et tilfeldig spørsmål med { id, category, question, answers }
- [x] POST /api/question - tar inn { id, answer } og returnerer "true" eller "false"

Dere kan ta utgangspunkt i følgende eksempel på spørsmål, men dere må endre på formatet som returneres til klienten slik at klienten ikke vet hvilket alternativ som er riktig: https://quizapi.io/

**Steps**
- [x] CLIENT: Legge til index.html og index.jsx i client
- [x] CLIENT: Legge til alle nødvendige dependencies
- [x] CLIENT: Oppdatere index.jsx med importeringer(react, react-dom, spørsmål etc) og funksjon for å vise spørsmål
  - [x] Liste spørsmål
  - [x] Liste svar
  - [x] Lage knapp til å levere svaret
  - [x] Knapp til å få nytt spørsmål
- [x] SERVER: Legge til server.js(express med get og post) og questions.js i server
- [x] SEVRER: Legge til alle nødvendige dependencies
- [x] ROOT: Legge til http.jsx, prettier, shortcuts til client og server, jest, husky og eslint i root.
- [x] ROOT: Legge til alle nødvendige dependencies
- [ ] JEST: Skrive tester
- [x] Koble til heroku
- [x] Koble til Github Actions
- [x] Koble til Coveralls
- [x] faen, legge til node_modules i server, dobbeltsjekk AT DEN GITIGNORERES!
