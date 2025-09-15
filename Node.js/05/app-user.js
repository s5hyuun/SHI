import express from "express";
import path from "path";

const __dirname = import.meta.dirname;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/welcome", (req, res) => {
    const name = req.query.name
    res.render('welcome', {name: `${name}`} )
});

app.listen(3000, () => {
    console.log("서버 실행 중: http://localhost:3000");
});