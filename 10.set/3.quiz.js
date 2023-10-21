// 주어진 배열에서 중복을 제거 하라
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
//  ['🍌', '🍎', '🍇', '🍑']
// const result = [...new Set(fruits)];

function returns(arr){
        return Array.from(new Set(arr));
}
console.log(returns(fruits));


// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);



// filter로 응용
function resultSet(SetArr1,SetArr2){
    // const array = [...SetArr1].filter((item) => SetArr2.has(item));
    const array = new Set();
    SetArr1.forEach((item) => SetArr2.has(item) ? array.add(item) : undefined);
    return array;
}
console.log(resultSet(set1,set2));

//set객체에서 바로 filter를 사용하는 방법은 없음 x 
//필터를 배열을 새로 만들어 내기에 배열로 변경하여 add하는것이 가장 좋음

// function resultSet(SetArr1,SetArr2){
//     // const resultSet = new Set();
//     const arr1 = [...SetArr1];
//     const arr2 = [...SetArr2];
//     const test = [];
//     arr1.forEach(item => {arr2.includes(item) ? test.push(item) : undefined });
//     return new Set(test);
// }
// console.log(resultSet(set1,set2));



// function resultSet(SetArr1,SetArr2){
//     // const resultSet = new Set();
//     const arr1 = [...SetArr1];
//     const arr2 = Array.from(SetArr2);
//     test = arr1.filter((item) => arr2.includes(item));
//     return test;
// }
// console.log(resultSet(set1,set2));

const obj = {
    k1 : 'hello',
    k2 : 'hello2'
}
console.log(obj);