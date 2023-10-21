// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
const input = ['🍌', '🍓', '🍇', '🍓']
 function inputChange(arr){
    const output = Array.from(arr);
     for(let i = 0; i <arr.length; i++){  
        if (output[i] === '🍓'){
            output[i] = '🥝';
        }
     }
     return output;
 }
 console.log('1번 문제 답 : ',inputChange(input));
 
// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
function inputCount(arr , frute){
    let count = 0;
    for(let i = 0; i <arr.length; i++){  
        if (arr[i] === frute){
            count += 1;
        }
     }
     return count;
}

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

const fristArr =  ['🍌', '🥝', '🍇'];
const lastArr = ['🍌', '🍓', '🍇', '🍓'];
function result(arrFrist , arrLast){
     let output = [];
     for(let i = 0; i <arrFrist.length; i++){  
        if(arrLast.includes(arrFrist[i])){
            output.push(arrFrist[i]);
        }
     }
     return output;
 }

//  정답
 console.log('1번 문제 답 : ',inputChange(input));
 console.log('2번 문제 답 : ',inputCount(input ,'🍓'));
 console.log('3번 문제 답 : ',result(fristArr ,lastArr));


