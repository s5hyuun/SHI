import express from "express";
import path from "path";
const __dirname = import.meta.dirname;
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());
app.get("/form", (req, res) => {
    res.render("form-advanced");
});
app.post("/form/result", (req, res) => {
    const { username, gender, hobbies } = req.body;
    res.render("result-advanced", {
        username,
        gender,
        hobbies: Array.isArray(hobbies) ? hobbies : [hobbies].filter(value => Boolean(value))
    });
});

app.listen(3000, () => {
    console.log("서버 실행 중: http://localhost:3000/form");
});