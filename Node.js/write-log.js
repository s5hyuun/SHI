import fs from 'node:fs';

const date = new Date();
const text = `[${date.toISOString()}] 서버가 시작되었습니다 `;
const text2 = `[${date.toISOString()}] 사용자가 로그인했습니다 `;


console.log(text);

// fs.mkdir('logs', {}, ()=> {});
// fs.mkdirSync('logs', {});
const exists = fs.existsSync('logs')
console.log(exists);
if(!exists) fs.mkdirSync('logs', {});
fs.writeFileSync('logs/log.txt', text + '\n');
// fs.appendFileSync('logs/log.txt', '\n추가 \n');
fs.appendFileSync('logs/log.txt', text2);