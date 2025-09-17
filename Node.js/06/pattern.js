const response = await fetch('http://ggoreb.com/quiz/pattern.html');
const data = await response.text();
const idx = data.lastIndexOf('<!--');
const text = data.substring(idx);
// OOOxOOO
const regex = /[^A-Z][A-Z]{3}([a-z]{1})[A-Z]{3}[^A-Z]/g; // [^A-Z] : 대문자가 아니다

const result = [...text.matchAll(regex)].map(m => m[1]);
console.log(result);