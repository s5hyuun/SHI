const response = await fetch('http://ggoreb.com/quiz/운수좋은날.txt');
const text = await response.text();


const regex = /김[ ]*첨[ ]지/g;

const result = text.match(regex);
console.log(result, result.length);