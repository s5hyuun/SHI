import http from 'http';
import mysql from 'mysql2/promise';
import url from 'url';

const pool = mysql.createPool({  
  host: 'localhost', user: 'root', password: '1234', database: 'mydb',
  waitForConnections: true, connectionLimit: 10,
})

// 조회할 떄 조건이 없으므로 함수의 미개변수도 없다 
// 비동기 함수
const getUsers = async (search) => {
  try {
    const [rows] = 
        await pool.query( 
            'SELECT * FROM 고객 WHERE 이름 = ? OR 직업 = ?', [search, search]
        );  
    return rows;
  } catch (e) {
    console.error('조회 실패:', e.message);
  }
};

const server = http.createServer(async (req, res) => {
    const url객체 = url.parse(req.url, true);
    const query = url객체.query;
    const search = query.search;

    // 고객명, 등급, 나이, ...
    // url.parse(req.rul, true);
    const rows = await getUsers(search);
    console.log(rows);
    res.setHeader("content-type", "application/json; charset=utf-8");
    res.end(JSON.stringify(rows)); // 문자 string 
});

server.listen(3000, () => {
     console.log('POST 서버 실행 중: http://localhost:3000');
});
