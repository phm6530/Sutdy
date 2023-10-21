/**
 * 동등비교 관계연산자
 * 
 * == 값이 같음
 * === 같과 타입이 둘다 같음
 * != 값이다름
 * !== 값과 타입이 다름
 */

b = 2;
a = 0;


console.log(b == '2');
console.clear();


const obj1 = {
    name : 'js',
}

const obj2 = {
    name : 'js',
}

const obj3 = obj2;

console.log(obj2.name == obj1.name);