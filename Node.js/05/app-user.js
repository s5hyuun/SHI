import express from "express";
import path from "path";

const __dirname = import.meta.dirname;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/welcome/:user", (req,res) => {
    const name = req.query.name;
    const user = req.params.user;
    res.render(
        'welcome', {
            name: `${name}`,
            items: ["apple", "banana", "cherry"],
        } 
    );
});

app.listen(3000, () => {
    console.log("서버 실행 중: http://localhost:3000");
});