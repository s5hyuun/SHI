import http from 'http';
import mysql from 'mysql2/promise';
import url from 'url';

const pool = mysql.createPool({  // ① 데이터베이스 연결
  host: 'localhost', user: 'root', password: '1234', database: 'mydb',
  waitForConnections: true, connectionLimit: 10,
})

const saveUser = async (id, name, age) => {
  try {
    const [rows] = await pool.query(
        'INSERT INTO 고객 (고객아이디, 이름, 나이) VALUES (?, ?, ?)', [id, name, age]);  // ② SQL 실행
    console.log(rows);  // ③ 실행결과 출력
  } catch (e) {
    console.error('조회 실패:', e.message);
  }
};

const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'text/html; charset=utf8');
    const url객체 = url.parse(req.url, true);
    const query = url객체.query;
    const id = query.id;
    const name = query.name;
    const age = query.age;
    saveUser(id, name, age); // DB에 insert

    res.end("등록이 완료 되었습니다.")
});

server.listen(3000, () => {
     console.log('POST 서버 실행 중: http://localhost:3000');
});

// const server = http.createServer((req, res) => {
//     res.setHeader('content-type', 'text/html; charset=utf8');

//     if (req.method === 'POST') {
//         let body = '';
//         req.on('data', chunk => {
//             body += chunk; // name = park
//         });

//         req.on('end', () => {
//             // body =  name = park
//             const name = body.split('=')[1];
//             if (req.url == '/hello') {
//                 if(name){
//                     res.end(`안녕하세요, ${name}님!`);
//                 } else {
//                     res.end(`누구신가요?`);
//                 } 
//             } else {
//                     res.end("/hello로 접속해주세요");
//                 }

//             });


//     } else {
//         res.end("POST로 접속해주세요");
//     }
// });

// server.listen(3000, () => {
//     console.log('POST 서버 실행 중: http://localhost:3000');
// });