import express from 'express';
import { logger } from './ middleware/logger.js';
import { checkIp } from './ middleware/logger-ip.js';
const app = express();

app.use((req, res, next)=> {
    console.log("미들웨어 동작");
    // IP 확인 코드 나중에 작성 

    // ip 검사
    // 로그인 여부 확인,
    // 블랙리스트 포함 여부 확인
    next();
});

app.use(logger);
app.use(checkIp)

app.get('/', (req, res) => {
    res.status(200).type('html').send('<h1>Hello, Express!</h1>');
});

app.get('/user', (req, res) => {
    res.status(200).type('html').send('<h1>Hello, Express!</h1>');
});

app.listen(3000, () => {
    console.log('http://localhost:3000 실행 중');
});