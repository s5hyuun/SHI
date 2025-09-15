import express, { json, urlencoded } from 'express';

const app = express();
app.use(urlencoded());
app.use(json());


app.get('/search', (req, res) => {
    const data = req.query.q
    res.send(`<h2> ${data} 검색 완료 </h2>`);

    // const {q} = req.qeury;
    // res.send(`<h2> ${q} 검색 완료 </h2>`);
});

// POST 
app.post('/signup', (req, res) => {
    const { username, age} = req.body;
    res.send(`<h2> ${username}님(${age}), 회원가입 완료! </h2>`)
});

app.post('/profile', (req, res) => {
    const { name, age } = req.body;
    res.send(`<h2> message: ${name} 님(${age}) 프로필 등록 완료 </h2> `);
    // res.json(JSON.parse(` message: ${name} 님(${age}) 프로필 등록 완료 `));
});

app.listen(3000);