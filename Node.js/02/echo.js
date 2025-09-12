export function handleEcho(req, res, query) {
    const text = query.text;
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf8'});

    if (text) {
        res.end(text);
    } else {
        res.end('텍스트를 입력해주세요 예: /echo?text=hello');
    }
}