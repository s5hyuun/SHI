import express from 'express';
import { logger } from './ middleware/logger.js';
const app = express();

app.use((req, res, next)=> {
    console.log("미들웨어 동작");
    // IP 확인 코드 나중에 작성 
    res.status(403).send("접근 불가!");
    next();
})

app.use(logger);

app.get('/', (req, res) => {
    res.status(200).type('html').send('<h1>Hello, Express!</h1>');
});

app.listen(3000, () => {
    console.log('http://localhost:3000 실행 중');
});