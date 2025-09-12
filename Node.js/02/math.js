import http from 'node:http';
import Calculator from './calculator.js';

function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

const server = http.createServer((req, res) => {
    const result = Calculator(add, sub)(4, 3);
    res.end(`add: ${result.add}, sub: ${result.sub}`);
});

server.listen(3000, () => {
    console.log('http://localhost:3000 에서 결과를 확인하세요');
});