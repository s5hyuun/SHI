const text = '사용자 정보, 이름: 꼬렙, 전화번호 : 1234, 이메일 : seorab@naver.com    ';
// const regex = /이메일\s*:\s*([a-z.@]+)/;
const regex = /이메일\s*:\s*([a-z]+@[a-z]+[.][a-z]+)/; // 한 글자 이상 : +
const result = regex.exec(text);
console.log(result[1]);