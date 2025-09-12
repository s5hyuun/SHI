import express from 'express';
import mysql from 'mysql2/promise';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const pool = mysql.createPool({
  host: 'localhost', user: 'root', password: '1234', database: 'mydb',
  waitForConnections: true, connectionLimit: 10,
})

const getUsers = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM assembly_member ');
    console.log(rows);
  } catch (e) {
    console.error('조회 실패:', e.message);
  }
};
getUsers();


app.listen(3000, () => {
    console.log('http://localhost:3000 서버 실행 중');
});

