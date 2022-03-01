import express from "express";

const app = express();

app.get("/api/question", (req, res) => {

});

app.post("/api/question", (req, res) => {

});

const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on http://localhost:${server.address().port}`);
});
