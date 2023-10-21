
const text = 'hello world';

console.log(text.indexOf('l'));
console.log(text.lastIndexOf('l'));
console.log(text.includes('he'));

console.log(text.startsWith('h')); 
console.log(text.endsWith('d'));

console.log(text.toUpperCase()); // 전부 대문자로
console.log(text.toLowerCase()); // 전부 소문자로

console.log(text.substring(0,5)); // 0부터 ~ 4까지 5는 제외

console.log(text.slice(-2)); 

const long = 'Get to the, point';
console.log(long.trim()); // 공백제거
console.log(long.split(','));

