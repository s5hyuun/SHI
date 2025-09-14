import express from 'express';
import unitRouter from './assembly-member/routes/unit.js';
import nameRouter from './assembly-member/routes/name.js';
import districtRouter from './assembly-member/routes/district.js';
import { getListAll } from './assembly-member/db.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// /user로 시작하는 요청은 userRouter에게 위임
app.use('/unit', unitRouter);
app.use('/name', nameRouter);
app.use('/district', districtRouter);

app.get('/', async (req, res) => {
  const list = await getListAll();
  res.json(list);
});

app.listen(3000, () => {
  console.log('http://localhost:3000 서버 실행 중');
});