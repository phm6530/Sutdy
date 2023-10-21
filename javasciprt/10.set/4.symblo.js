

const map = new Map();
const key1 = Symbol.for('key');
const key2 = Symbol.for('key');
map.set(key1, 'hello');
console.log(map.get(key2));
console.log(key1 === key2)
// console.log(map);?

// const obj = Symbol.for('key');


const obj = { k1 : 'hello', [Symbol('key')] : 1};
console.log(obj);
console.log(Symbol.keyFor(key1));

const arr1 = {hello:'1'};
const arr2 = {hello:'2'};
const test =  arr1 && arr2; 
console.log(test);  