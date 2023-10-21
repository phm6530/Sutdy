

const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1);
console.log(typeof num2);

function isEqual(origin, expected){
    return Math.abs(origin - expected) < Number.EPSILON;
}

console.log(isEqual(1,1));
