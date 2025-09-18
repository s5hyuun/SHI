import express from 'express';
import bcrypt from 'bcrypt';
import pool from '../db.js';

const router = express.Router();

// 회원가입 폼
router.get('/signup', (req, res) => {
  res.render('signup');
});

// 회원가입 처리
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashed = await bcrypt.hash(password, 10);
    const sql = 'INSERT INTO member_encrypt (username, password) VALUES (?, ?)';
    await pool.query(sql, [username, hashed]);
    res.render('success', { username });
  } catch (e) {
    console.error('가입 오류:', e.message);
    res.status(500).send('가입 실패');
  }
});

// 로그인 폼
router.get('/signin', (req, res) => {
  res.render('signin');
});

// 로그인 처리
router.post('/signin', async (req, res) => {
  const { username, password } = req.body;

  try {
    const sql = 'SELECT * FROM member_encrypt WHERE username = ?';
    const [rows] = await pool.query(sql, [username]);

    if (rows.length === 1) {
      const user = rows[0];
      const match = await bcrypt.compare(password, user.password);

      if (match) {
        req.session.user = { id: user.id, username: user.username };
        return res.redirect('/welcome');
      }
    }

    res.send('<h2>로그인 실패</h2><a href="/signin">← 다시 시도</a>');
  } catch (e) {
    console.error('로그인 오류:', e.message);
    res.status(500).send('로그인 실패');
  }
});

// 환영 페이지
router.get('/welcome', (req, res) => {
  if (!req.session.user) return res.redirect('/signin');
  res.render('welcome', { user: req.session.user });
});

// 로그아웃
router.get('/signout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/signin');
  });
});

export default router;
