import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost', user: 'root', password: '1234', port: 3306,
  database: 'mydb'
});

const login = async (username, password) => {
  try {
    const query = `
      SELECT * FROM test_user WHERE username = '${username}' AND password = '${password}'
    `;
    console.log('실행 쿼리:', query);

    const [rows] = await pool.query(query);
    
    if (rows.length > 0) console.log('로그인 성공:', rows[0]);
    else console.log('로그인 실패');
  } catch (e) {
    console.error('에러:', e.message);
  } finally {
    await pool.end();
  }
};

// 정상 로그인
// SELECT * FROM test_user WHERE username = 'alice' OR '1' = '1
await login("alice' OR '1' = '1 ", "dfs");

// await login("alice' # ", '아무거나');
// await login("alice' -- ", '아무거나');
// await login("alice' OR '1'='1", '아무거나');

