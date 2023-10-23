// function solution(arr, k) {
//     const arrSize = [...new Set(arr)];
//     arrSize.length < k ? answer = [...arrSize , ...Array(k - arrSize.length).fill(-1)] : answer = arrSize.slice(0,k);
//     return answer;
// }


function solution(arr, k) {
    const Arr = [...new Set(arr)];
    // const answer = k > Arr.length ? [...Arr , ...Array(k - Arr.length).fill('없음')] : [...Arr].slice(0,k);
    // return answer;
    const answer = [];
    for(let i =0; i<k; i++){
        if(Arr[i] === 0 || Arr[i]){
            answer.push(Arr[i]);
            
        }else{
            answer.push(-1);
        }
    }
    return answer;
}

const arr = [0, 1, 1, 2, 2, 3];
console.log(solution(arr, 4));