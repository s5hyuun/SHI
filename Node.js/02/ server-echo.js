import http from 'node:http';
import url from 'node:url';
import { handleEcho } from './echo.js';  

const server = http.createServer((req, res) => {
    const parsed = url.parse(req.url, true);
    const pathname = parsed.pathname;
    const query = parsed.query;

    if (parsed.pathname == '/echo'){
        handleEcho(req, res, query);
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain; charset=utf8'});
        res.end('잘못된 요청' );
    }
});

server.listen(3000, () => {
    console.log('http://localhost:3000 에서 결과를 확인하세요');
});
