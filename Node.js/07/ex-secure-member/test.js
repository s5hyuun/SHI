import bcrypt from 'bcrypt';

// 비밀번호 해시
const hash = await bcrypt.hash('my-password', 10);
console.log(hash); // 결과: $2b$10$abc...

// 검증
const isMatch = await bcrypt.compare('my-password', hash);
console.log(isMatch); // true


