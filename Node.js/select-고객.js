import http from 'http';
import mysql from 'mysql2/promise';
import url from 'url';

const pool = mysql.createPool({  // ① 데이터베이스 연결
  host: 'localhost', user: 'root', password: '1234', database: 'mydb',
  waitForConnections: true, connectionLimit: 10,
})

// 조회할 떄 조건이 없으므로 함수의 미개변수도 없다 
// 비동기 함수
const getUsers = async () => {
  try {
    const [rows] = 
        await pool.query( 
            'SELECT 고객아이디, 이름, 나이, 등급, 직업, 적립금 FROM 고객'
        );  
    return rows;
  } catch (e) {
    console.error('조회 실패:', e.message);
  }
};

const server = http.createServer(async (req, res) => {
    // 고객명, 등급, 나이, ...
    // url.parse(req.rul, true);
    const rows = await getUsers();
    console.log(rows);
    res.setHeader("content-type", "application/json; charset=utf-8");
    res.end(JSON.stringify(rows)); // 문자 string 
});

server.listen(3000, () => {
     console.log('POST 서버 실행 중: http://localhost:3000');
});
