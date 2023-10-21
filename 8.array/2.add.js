
const fruits = ['🙄','😣','😥','😮','🫥']
console.log(fruits[0]);
console.log(fruits.length);

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// 추가 , 삭제 안좋은 방식 
fruits[1] = '2'; 
console.log(fruits);
delete fruits[2];
console.log(fruits);



// 배열 자체를 변경하는지, 새로운 배열을 반환하는지
//

console.log(Array.isArray(fruits)); // true
console.log(Array.isArray({})); // false

console.log(fruits.indexOf('🙄')); // 배열 내에 🙄를 찾음


// ***추가 - 배열 뒤에 추가 배열자체 변경 *****
// update 하는 함수
const test = fruits.push('add'); // <  맨뒤에 업데이트 
console.log(fruits); 
console.log(test);  // < -- add 어디있는지 확인 가능

fruits.unshift('front'); // <-- 맨 앞에 업데이트
console.log(fruits); 

console.log(fruits.pop()); // 맨뒤 리턴
console.log(fruits.shift()); // 맨앞 리턴

 fruits.splice(2,1,2);  //splice(2,1,2) = index 2번째에 1번째 있는 값 삭제후 2 추가 중간에 추가될경우 밀림
 console.log(fruits);

 //배열을 만드는 
const fruitsVer2 = ['🙄','😣','😥','😮','🫥']
let newArr = fruitsVer2.slice(0,2);
newArr = fruitsVer2.slice(-1);
// console.log(fruitsVer2);
console.log(newArr);
// newArr = fruitsVer2.slice(0)
// console.log(newArr);