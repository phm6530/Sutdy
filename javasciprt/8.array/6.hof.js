// const fristArr =  ['🍌', '🥝', '🍇'];
const fruits = ['🍌', '🍓', '🍇', '🍓'];
// for(let i=0; i  < fruits.length; i++){
//     console.log(fruits[i]);
// }

// 드디어 FOREACH문 
// fruits.forEach(function(value , index, array){
//     console.log(value);    
//     console.log(index);    
//     console.log(array);    
// });

const item1 = {name : '😥', price: 2};
const item2 = {name : '🫥', price: 3};
const item3 = {name : '😎', price: 1};
const products = [item1,item2,item3,item2];
// for(let i = 1; i < products.length; i++){
//     if(products[i].name === '🫥'){
//         console.log('찾았다');
//     }
// }

//  find 는 제일 먼저 조건에 맞는 아이템을 반환함
let result = products.findIndex((value) => value.name === '🫥'); 
//console.log(result);

// 배열의 아이템들이 부분적으로 조건(callback)에 맞는지 확인
result = products.some((item)=> item.name === '🫥');
//console.log(result);

//배열의 아이템들이 전부 조건에 맞는지 확인 
result = products.every((item)=> item.name === '🫥');
//console.log(result);

//조건에 맞는 모든 아이템들을 새로운 배열로 ****
result = products.filter((item)=> item.name === '🫥');
//console.log(result);

const nums = [1,2,3,4,5];
result = nums.map((item)=> item * 2) ;
console.log(result);

result = nums.map((item)=> {
    if(item % 2 === 0){
        return item * 2
    }else{
        return item;
    }
});
console.log(result);

result = nums.map((item) => [1,2]);
console.log(result);

result = nums.flatMap((item) => [1,2]);
console.log(result);

result = ['draem','coding'].flatMap(text => text.split(""));
console.log(result);


//Sort 함수 문자열 형태의 오름차순으로 정렬함 , 기존의 배열을 수정함
const text = ['hi','abc'];
text.sort();
console.log(text);

//a - b의 결과가 양수인 경우, a는 b보다 크므로 a가 b 뒤로 이동합니다.
//a - b의 결과가 음수인 경우, a는 b보다 작으므로 a가 b 앞으로 이동합니다.

const numbers = [0,1,10,5,6,7];
numbers.sort((a, b) => a - b);
console.log(numbers);

//reduce 배열 내 전부 처리하여 값을 하나로  어떻게할지는 본인이 정함
//아래는 sum 한 함수
result= [1,2,3,4,5].reduce((sum, value) => {
    sum += value;
    return sum;
},0)
console.log(result);