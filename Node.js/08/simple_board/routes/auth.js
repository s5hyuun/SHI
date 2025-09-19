import express from 'express';
import { pool } from '../db.js';
import bcrypt from 'bcrypt';

const router = express.Router();

// 회원가입 폼
router.get('/signup', (req, res) => {
  res.render('signup');
});

// 회원가입 처리
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  const new_password = await bcrypt.hash(password, 10);

  try {
    const sql = 'INSERT INTO members (username, password) VALUES (?, ?)';
    await pool.query(sql, [username, new_password]);

    res.render('signup-result', { success: true, username });
  } catch (err) {
    console.error('회원가입 오류:', err.message);
    res.render('signup-result', { success: false, error: err.message });
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
    const sql = 'SELECT * FROM members WHERE username = ?';
    const [rows] = await pool.query(sql, [username]);

    if (rows.length === 1 && await bcrypt.compare(password, rows[0].password)) {
      req.session.user = {
        id: rows[0].id,
        username: rows[0].username
      };
      // res.render('signin-result', { success: true, username });
      res.redirect('/board');
    } else {
      res.render('signin-result', { success: false, message: '아이디 또는 비밀번호가 올바르지 않습니다.' });
    }
  } catch (err) {
    console.error('로그인 오류:', err.message);
    res.render('signin-result', { success: false, message: '서버 오류가 발생했습니다.' });
  }
});

// 로그아웃 처리
router.get('/signout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.error('로그아웃 오류:', err.message);
      return res.render('signout-result', { success: false });
    }
    res.render('signout-result', { success: true });
  });
});

export default router;
