import express from 'express';
import { pool } from '../db.js';
import multer from 'multer';
import path from 'path';

const __dirname = import.meta.dirname;

// multer 저장소 설정
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public', 'uploads'));
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});

// 파일 저장 방식(storage)을 적용한 multer 미들웨어 생성
const upload = multer({ storage });

const router = express.Router();

// 게시글 목록 보기
router.get('/', async (req, res) => {
  // http://localhost:3000/board?q=검색어
  const q = req.query.q || '';

  // http://localhost:3000/board?page=1
  const page = req.query.page || 1;

  // 현재 페이지 계산 기준
  // page = 1    start = 0      (1-10)  page * 10
  // page = 2    start = 10.    (11-20) 
  // page = 213  start = 2120   (2121-2130)
  let start = (page * 10) - 9;
  let startPage = Math.floor((page-1) / 10) * 10 + 1;
  let endPage = startPage + 9;

  try {
    const sql2 = 'SELECT count(1) AS cnt FROM articles';
    const [totalCount] = await pool.query(sql2);
    console.log(totalCount);
    const totalPage = Math.ceil(totalCount[0].cnt / 10);
    // endPage 가 10, 전체 페이지가 4
    endPage = endPage>totalPage ? totalPage : endPage;

    const sql = 'SELECT id, title, writer, created_at, views FROM articles WHERE title LIKE CONCAT('%', ?, '%') ORDER BY id DESC LIMIT ?, 10';
    const [articles] = await pool.query(sql, [q, start-1]);

    res.render('board-list', { articles, startPage, endPage, totalCount, totalCount: totalCount[0].cnt });
  } catch (err) {
    console.error('게시글 목록 조회 오류:', err.message);
    res.send('<h2>게시글을 불러오는 데 실패했습니다.</h2>');
  }
});

// 글쓰기 폼
router.get('/write', (req, res) => {
  if (!req.session.user) {
    return res.send('<h2>로그인 후 작성할 수 있습니다. <a href="/signin">로그인</a></h2>');
  }
  res.render('board-write');
});

// 글쓰기 처리
router.post('/write', upload.single('f'), async (req, res) => {
  if (!req.session.user) {
    return res.send('<h2>로그인이 필요합니다.</h2>');
  }

  const { title, content } = req.body;
  const writer = req.session.user.username;

  // 업로드한 원본 파일명
  const originalname = req.file.originalname;

  // 저장된 파일명 (파일명 => "현재시각-파일명")
  const savename = req.file.filename;

  try {
    // 게시물 정보 입력
    const sql = 'INSERT INTO articles (title, content, writer) VALUES (?, ?, ?)';
    const [result] = await pool.query(sql, [title, content, writer]);
    console.log(result);
    const articlesId = result.insertId;

    // 첨부파일 정보 입력
    const membersId = req.session.user.id;

    const sql2 = 'INSERT INTO files (members_id, articles_id, save_name, original_name) VALUES (?, ?, ?, ?)';
    const [result2] = await pool.query(sql2, [membersId, articlesId, savename, originalname]);


    res.redirect('/board');
  } catch (err) {
    console.error('글쓰기 오류:', err.message);
    res.send('<h2>글쓰기 실패! 다시 시도해 주세요.</h2>');
  }
});

// 게시글 상세 보기
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = req.session.user;

  try {
    const sql = 'SELECT * FROM articles WHERE id = ?';
    const [rows] = await pool.query(sql, [id]);

    if (rows.length === 0) {
      return res.send('<h2>존재하지 않는 게시글입니다. <a href="/board">목록으로</a></h2>');
    }

    const article = rows[0];

    // 조회수 증가 처리
    if (user) {
      const conn = await pool.getConnection();
      try {
        await conn.beginTransaction();

        const sqlCheck = `
          SELECT * FROM views_log 
          WHERE user_id = ? AND article_id = ? AND view_date = CURDATE()
        `;
        const [logs] = await conn.query(sqlCheck, [user.id, id]);

        if (logs.length === 0) {
          await conn.query('UPDATE articles SET views = views + 1 WHERE id = ?', [id]);
          await conn.query(
            'INSERT INTO views_log (user_id, article_id, view_date) VALUES (?, ?, CURDATE())',
            [user.id, id]
          );
        }

        await conn.commit();
      } catch (err) {
        await conn.rollback();
        console.error('조회수 트랜잭션 오류:', err.message);
      } finally {
        conn.release();
      }
    }

    // 댓글 목록 조회
    const [comments] = await pool.query(
      `SELECT c.*, m.username 
       FROM comments c 
       JOIN members m ON c.user_id = m.id 
       WHERE c.article_id = ?
       ORDER BY c.id ASC`,
      [id]
    );

    // 댓글 목록 조회
    const [files] = await pool.query(
      `SELECT save_name FROM files
        WHERE articles_id = ?`,
      [id]
    );

    res.render('board-detail', { article, comments, file: files[0] });
  } catch (err) {
    console.error('상세보기 오류:', err.message);
    res.send('<h2>게시글을 불러오는 데 실패했습니다.</h2>');
  }
});

// 게시글 수정 폼
router.get('/:id/edit', async (req, res) => {
  if (!req.session.user) {
    return res.send('<h2>로그인 후 수정할 수 있습니다. <a href="/signin">로그인</a></h2>');
  }

  const { id } = req.params;

  try {
    const [rows] = await pool.query('SELECT * FROM articles WHERE id = ?', [id]);

    if (rows.length === 0) {
      return res.send('<h2>존재하지 않는 게시글입니다.</h2>');
    }

    const article = rows[0];

    if (article.writer !== req.session.user.username) { // 작성자만 수정 가능
      return res.send('<h2>본인이 작성한 글만 수정할 수 있습니다.</h2>');
    }

    res.render('board-edit', { article });
  } catch (err) {
    console.error('수정 폼 오류:', err.message);
    res.send('<h2>수정 폼을 불러오는 데 실패했습니다.</h2>');
  }
});

// 게시글 수정 처리
router.post('/:id/edit', async (req, res) => {
  if (!req.session.user) {
    return res.send('<h2>로그인이 필요합니다.</h2>');
  }

  const { id } = req.params;
  const { title, content } = req.body;

  try {
    // 작성자 확인
    const [rows] = await pool.query('SELECT * FROM articles WHERE id = ?', [id]);
    if (rows.length === 0) return res.send('<h2>게시글이 존재하지 않습니다.</h2>');
    if (rows[0].writer !== req.session.user.username) {
      return res.send('<h2>본인이 작성한 글만 수정할 수 있습니다.</h2>');
    }

    const sql = 'UPDATE articles SET title = ?, content = ? WHERE id = ?';
    await pool.query(sql, [title, content, id]);

    res.redirect(`/board/${id}`);
  } catch (err) {
    console.error('수정 처리 오류:', err.message);
    res.send('<h2>글 수정 중 오류가 발생했습니다.</h2>');
  }
});

// 게시글 삭제
router.get('/:id/delete', async (req, res) => {
  if (!req.session.user) {
    return res.send('<h2>로그인 후 삭제할 수 있습니다. <a href="/signin">로그인</a></h2>');
  }

  const { id } = req.params;

  try {
    const [rows] = await pool.query('SELECT * FROM articles WHERE id = ?', [id]);

    if (rows.length === 0) {
      return res.send('<h2>존재하지 않는 게시글입니다.</h2>');
    }

    const article = rows[0];

    if (article.writer !== req.session.user.username) {
      return res.send('<h2>본인이 작성한 글만 삭제할 수 있습니다.</h2>');
    }

    await pool.query('DELETE FROM articles WHERE id = ?', [id]);
    res.redirect('/board');
  } catch (err) {
    console.error('삭제 오류:', err.message);
    res.send('<h2>글 삭제 중 오류가 발생했습니다.</h2>');
  }
});

// 좋아요 처리
router.get('/:id/like', async (req, res) => {
  if (!req.session.user) {
    return res.send('<h2>로그인 후 좋아요를 누를 수 있습니다. <a href="/signin">로그인</a></h2>');
  }

  const { id } = req.params;
  const userId = req.session.user.id;

  try {
    const [existing] = await pool.query(
      'SELECT * FROM likes_log WHERE user_id = ? AND article_id = ?',
      [userId, id]
    );

    if (existing.length > 0) {
      return res.send('<h2>이미 평가한 게시글입니다. <a href="/board/' + id + '">돌아가기</a></h2>');
    }

    await pool.query('UPDATE articles SET likes = likes + 1 WHERE id = ?', [id]);
    await pool.query('INSERT INTO likes_log (user_id, article_id, type) VALUES (?, ?, ?)', [userId, id, 'like']);
    res.redirect('/board/' + id);
  } catch (err) {
    console.error('좋아요 처리 오류:', err.message);
    res.send('<h2>좋아요 처리 중 오류가 발생했습니다.</h2>');
  }
});

// 싫어요 처리
router.get('/:id/dislike', async (req, res) => {
  if (!req.session.user) {
    return res.send('<h2>로그인 후 싫어요를 누를 수 있습니다. <a href="/signin">로그인</a></h2>');
  }

  const { id } = req.params;
  const userId = req.session.user.id;

  try {
    const [existing] = await pool.query(
      'SELECT * FROM likes_log WHERE user_id = ? AND article_id = ?',
      [userId, id]
    );

    if (existing.length > 0) {
      return res.send('<h2>이미 평가한 게시글입니다. <a href="/board/' + id + '">돌아가기</a></h2>');
    }

    await pool.query('UPDATE articles SET dislikes = dislikes + 1 WHERE id = ?', [id]);
    await pool.query('INSERT INTO likes_log (user_id, article_id, type) VALUES (?, ?, ?)', [userId, id, 'dislike']);
    res.redirect('/board/' + id);
  } catch (err) {
    console.error('싫어요 처리 오류:', err.message);
    res.send('<h2>싫어요 처리 중 오류가 발생했습니다.</h2>');
  }
});

// 댓글 등록
router.post('/:id/comment', async (req, res) => {
  if (!req.session.user) {
    return res.send('<h2>로그인 후 댓글을 작성할 수 있습니다. <a href="/signin">로그인</a></h2>');
  }

  const { id } = req.params;
  const { content } = req.body;
  const userId = req.session.user.id;

  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();

    await conn.query(
      'INSERT INTO comments (article_id, user_id, content) VALUES (?, ?, ?)',
      [id, userId, content]
    );

    await conn.query(
      'UPDATE articles SET comment_count = comment_count + 1 WHERE id = ?',
      [id]
    );

    await conn.commit();
    res.redirect('/board/' + id);
  } catch (err) {
    await conn.rollback();
    console.error('댓글 등록 오류:', err.message);
    res.send('<h2>댓글 등록 중 오류가 발생했습니다.</h2>');
  } finally {
    conn.release();
  }
});

export default router;