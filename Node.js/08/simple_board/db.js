import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'simple_board',
  waitForConnections: true,
  connectionLimit: 5
});

// 테이블 초기화
export const initTables = async () => {
  // members와 articles 테이블 생성을
  // 하나의 트랙잭션으로 묶기 위해 getConnection() 사용
  const conn = await pool.getConnection();
  try {
    await conn.query(`
      CREATE TABLE IF NOT EXISTS members (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    await conn.query(`
      CREATE TABLE IF NOT EXISTS articles (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        content TEXT NOT NULL,
        writer VARCHAR(50) NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log("✅ 테이블 생성 완료");
  } catch (e) {
    console.error("❌ 테이블 생성 실패:", e.message);
  } finally {
    conn.release();
  }
};
