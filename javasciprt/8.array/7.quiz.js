// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// 맵 매개변수 (현재 값 , index ,array);
const input = ['🍌', '🍓', '🍇', '🍓']
function changeArray(e , prev , before){
    return e.map((item) => (item === prev ? before : item));
} 
console.log('1번 문제 답 : ',changeArray(input , '🍓' , '🥝'));

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
function inputCount(arr , frute){
    const counting = arr.filter((item) => (item === frute));
    return counting.length === 0 ? "x" : counting.length;
}
console.log('2번 문제 답 : ',inputCount(input ,'🍓'));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

const fristArr =  ['🍌', '🥝', '🍇'];
const lastArr = ['🍌', '🍓', '🍇', '🍓'];
function result(arrFrist , arrLast){
    return arrFrist.filter((item) => arrLast.includes(item));
}
 
//  정답
 console.log('3번 문제 답 : ',result(fristArr ,lastArr));


//quiz 4
//5이상 보다 큰 숫자들의 평균 
// reduce는 결과의 값을 반환하고 map은 새로운 변화된 새로운 배열을 반환함
// reduce의 
const nums = [3,16,5,25,4,34,21];
function avgArray(e , num){
    const array = e.filter((item) => item > num);
    return array.reduce((sum , value) => (sum += value)) / array.length;
}
console.log('4번 문제 답: ' , avgArray(nums, 5));

function test(e , callback){
    e.map((item) => callback(item));
    
}
function callback(item){
    console.log(item);
}

test(nums, callback);