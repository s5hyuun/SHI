import express from 'express';

const app = express();

app.use(express.urlencoded());
app.use(express.json());


app.get('/search', (req, res) => {
    const data = req.query.q
    res.send(`<h2> ${data} 검색 완료 </h2>`);
});

// POST 
app.post('/signup', (req, res) => {
    const data = req.body
    res.send(`<h2> ${data.username}님 (${data.age}), 회원가입 완료! </h2>`)
});

app.post('/profile', (req, res) => {
    const { name, age } = req.body;
    res.json(`<h2> message: ${name} 님(${age}) 프로필 등록 완료 </h2> `);
});


app.listen(3000);