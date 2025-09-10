import http from 'node:http';

const server = http.createServer((req, res) => {
    res.setHeader(
        "content-type", "application/json; charset=utf-8"); // 한글 깨짐 방지
                        // video/mp4; 비디오 재생 가능    
    const obj = {"id": "abcd", "pw": 1234};
    res.end( JSON.stringify(obj) );
});

server.listen(3000);