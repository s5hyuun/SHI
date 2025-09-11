import http from 'http';
import url from 'url';

const server = http.createServer((req, res) => {   
    // req.url을 그냥 사용할 경우 < 문제가 발생할 가능성이 높음 
    // localhost:3000/news  >> /news
    // localhost:3000/post?id=z  >> /post?id=z

    const parsed = url.parse(req.url, true);
    const pathname = parsed.pathname; // 순수한 경로 
    const query = parsed.query; // ? 뒤의 키와 값 

    if (pathname == '/hello'){
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf8'});
        res.end("완료")
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain; charset=utf8'});
        res.end('404 Not Found')
    }
});

server.listen(3000, () => {
    console.log('http://localhost:3000 서버 실행 중');
});