import express from 'express';
import session from 'express-session';
import path from 'node:path';
import expressLayouts from 'express-ejs-layouts';
import { initTables } from './db.js';
import authRouter from './routes/auth.js';
import boardRouter from './routes/board.js';
import multer from 'multer';

const app = express();
const __dirname = import.meta.dirname;

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false
}));

// 현재 로그인 사용자 정보를 템플릿에서 사용할 수 있도록
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});


app.use(expressLayouts);
app.set('layout', 'layout');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

await initTables();

app.use('/', authRouter);
app.use('/board', boardRouter);

app.listen(3000, () => {
  console.log('서버 실행 중: http://localhost:3000');
});
