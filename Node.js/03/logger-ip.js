// 사용자가 접속하면 사용자의 IP 주소를 로그로 남기는 미들웨어 작성
import express from 'express';

const app = express();

app.use((req, res, next) => {
    console.log(`사용자 IP: ${req.ip}`);
});

app.listen(3000, () => {
    console.log('http://localhost:3000 실행 중');
});