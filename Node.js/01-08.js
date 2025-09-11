import http from 'http';
import url from 'url';

const server = http.createServer((req, res) => {
  res.writeHead(200, {'content-type': 'text/html'});

  const parsed = url.parse(req.url, true);
  const query = parsed.query;
  const pathname = parsed.pathname;

  if (pathname == '/hello') {
    res.end('안녕하세요');
  } else {
    res.end('페이지 없음');
  }
});

server.listen(3000, () => {
  console.log('POST http://localhost:3000/add');
});
