const input = [10, 20, 30, 40 , 50 ];
function changeArray(e){
    return e.map((item, index, arr) => {
        if(index === 0 ){
            return item;
        }
        else{
            return item + arr[index - 1];
        }
        
    });
} 
console.log('1번 문제 답 : ',changeArray(input));



function sum(e){
    const arrSum = e.reduce((item , value) => (item += value) ,0 );
    return arrSum;
}


console.log('1번 문제 답 : ',sum(input));


function tester(e){
    const result = e.map((item , index , array) => {
        if(index === 0 ){
            return item;
        }else{
            return item + array[index - 1];
        }
    })
    return console.log(result);
}

tester(input);

function tester(e) {
    const result = e.reduce((acc, item, index) => {
        if (index === 0) {
            acc.push(item);
        } else {
            acc.push(item + e[index - 1]);
        }
        return acc;
    }, []);
    return result;
}

console.log(tester(input));