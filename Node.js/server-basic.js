// import http from 'node:http';

// const server = http.createServer((req, res) => {
//     res.setHeader(
//         "content-type", "application/json; charset=utf-8"); // 한글 깨짐 방지
//                         // video/mp4; 비디오 재생 가능    
//     const obj = {"id": "abcd", "pw": 1234};
//     res.end( JSON.stringify(obj) );
// });

// server.listen(3000);

import http from 'node:http';
import url from 'url';

const server = http.createServer((req, res) => {
    const url객체 = url.parse(req.url, true);
    const path = url객체.pathname;
    const id = url객체.query.id;
    const pw = url객체.query.pw;
    res.setHeader('content-type', 'text/plain; charset=utf8');
    console.log(id, pw);
    res.end(`path: ${path}, id: ${id}, pw: ${pw}`);
});

server.listen(3000);