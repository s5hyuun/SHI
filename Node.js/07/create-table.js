import mysql from 'mysql2/promise';
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'mydb',
    waitForConnections: true,
    connectionLimit: 10,
});
const createUser = async () => {
    const sql = `CREATE TABLE IF NOT EXISTS users (
 id INT PRIMARY KEY AUTO_INCREMENT,
 name VARCHAR(50), age INT)`;
    try {
        await pool.query(sql);
        console.log("테이블 생성 완료");
    } catch (e) {
        console.error("테이블 생성 실패: ", e.message);
    } finally {
        await pool.end();
        console.log("풀 종료");
    }
};
// createUser();

const insertUser = async () => {
    const sql = 'INSERT INTO users (name, age) VALUES (?, ?)';
    try {
        const [result] = await pool.query(sql, ['nodejsnodejsnodejsnodejsnodejsnodejsnodejsnodejsnodejsnodejsnodejsnodejsnodejsnodejsnodejsnodejsnodejsnodejsnodejsnodejsnodejsnodejsnodejsnodejs', 20]);
        console.log('사용자 삽입 완료:', result);
    } catch (e) {
        console.error('삽입 실패:', e.message);
    } finally {
        await pool.end();
        console.log('풀 종료');
    }
};
// insertUser();

const getUsers = async () => {
    try {
        const [rows] = await pool.query('SELECT * FROM users');
        console.log(rows);
    } catch (e) {
        console.error('조회 실패:', e.message);
    } finally {
        await pool.end();
        console.log('풀 종료');
    }
};
getUsers();
