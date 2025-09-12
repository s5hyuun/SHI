import express from 'express';
import userRouter from './routes/user.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// /user로 시작하는 요청은 userRouter에게 위임
app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.send('홈페이지입니다.');
});

app.listen(3000, () => {
    console.log('http://localhost:3000 서버 실행 중');
});