/**
 * 데이터 타입은 원시,객체 데이터로 나뉨
 * 
 * 원시 - Number , string , boolean , null , undefined , symbol
 * 객체 - object[array] , function
 * 
 */


let interger = 123;
let negative = -123;
let double = 1.23;

let UserName = '이용석';
let MyFav = '페미니스트';

let string = `안녕하세요? \n${UserName} 입니다. \n저는 ${MyFav} 입니다.`;
 
console.log(string);

let isFalse = false;


console.clear();
/**
 * 0은 false
 * 1은 true 
 */

// let variable = null;



let list = {
    key_1 : 1000,
    key_2 : 2000,
    key_3 : 3000,
}

console.log(list.key_1);
console.log(list.key_2);
console.log(list.key_3);



let apple = { name : 'apple'}
apple.name = '오렌지';

//console.log(apple);

/**
 * type of 데이터확인
 * 
 */

let variable;
console.log(typeof variable)



