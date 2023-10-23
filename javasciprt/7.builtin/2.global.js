

// console.log(isFinite(2));
// console.log(isFinite(Infinity));

console.log(parseInt(1.42));
// console.log(parseFloat('1.42'));
// console.log(parseInt('1.42'));


const URL = 'https://박현민.com';
const encoded = encodeURI(URL);
console.log(encoded);
const decoded = decodeURI(encoded);
console.log(decoded);