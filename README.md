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
- [ ] Legge til index.html og index.jsx i client
- [ ] Oppdatere index.jsx med importeringer og funksjon for å vise spørsmål
- [ ] Legge til server.js(express med get og post) i server
- [ ] Legge til http, prettier, shortcuts til client og server, jest, husky og eslint i root.
- [ ] 