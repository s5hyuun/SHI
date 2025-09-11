import http from 'node:http';
import url from 'url';

const server = http.createServer((req, res) => {
    const url객체 = url.parse(req.url, true);
    const query = url객체.query;
    console.log(url객체.pathname);
    

    res.setHeader('content-type', 'application/json; charset=utf8');
    res.end(JSON.stringify(query));
});

server.listen(3000);