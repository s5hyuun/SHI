import http from 'http';
import url from 'url';

const server = http.createServer((req, res) => {
  if(req.method == 'GET') {
    const parsed = url.parse(req.url, true);
    const pathname = parsed.pathname; // 순수한 경로
    const query = parsed.query; // ? 뒤의 키와 값

    res.writeHead(200, {'content-type': 'text/html'});
    res.end('result ' + (query.x*1 + query.y*1));
  } else {
    res.writeHead(400, {'content-type': 'text/html'});
    res.end('bad request');
  }
});

server.listen(3000, () => {
  console.log('POST http://localhost:3000/add');
});
