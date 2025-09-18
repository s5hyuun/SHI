import express from 'express';
import path from 'path';
import session from 'express-session';
import authRouter from './routes/auth.js';

const __dirname = import.meta.dirname;
const app = express();

app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({
  secret: 'secure-secret-key',
  resave: false,
  saveUninitialized: false
}));

app.use('/', authRouter);

app.listen(3000, () => {
  console.log('서버 실행 중: http://localhost:3000/signup');
});
