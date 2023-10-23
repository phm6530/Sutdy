// function solution(arr, query) {
//     let answer = [...arr];
//     for(let i = 0; i < query.length; i++) {
//         if(i % 2 === 0 ){
//            answer = answer.slice(0, query[i] + 1);
//         }else{
//             answer = answer.slice(query[i]);
//         }
//     }
//     return answer;
// }

function solution(arr, query) {
    let answer = [...arr];
    query.forEach((value , idx) => {
        // console.log(value);
       answer = idx % 2 === 0 ? answer = answer.slice(0, value + 1) : answer = answer.slice(value);
    });    
    return answer;
}

const arr = [0,1,2,3,4,5];
const query = [4,1,2];
console.log(solution(arr ,query));
