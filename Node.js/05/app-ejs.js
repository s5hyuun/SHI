import express from "express";
import path from "path";

const __dirname = import.meta.dirname;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// dirname > app-ejs.js dnlcl
// path.resolve() > node 또는 nodemon을 실행하는 위치
app.use(express.static(  path.join(import.meta.dirname, '../public')   ));

app.get("/", (req, res) => {
    res.render("index", { name: "nodejs" });
});

app.listen(3000, () => {
    console.log("서버 실행 중: http://localhost:3000");
});