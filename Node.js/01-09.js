import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    if (req.url === '/info') {
        res.end(new Date().toLocaleString());
    } else if (req.url === '/exit') {
        res.end('종료합니다');
    } else {
        res.end('알 수 없는 요청');
    }
});

server.listen(3000);
