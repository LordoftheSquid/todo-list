import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}));


app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/list-1", (req, res) => {
    res.render("list-1.ejs");
});

app.get("/list-2", (req, res) => {
    res.render("list-2.ejs");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});