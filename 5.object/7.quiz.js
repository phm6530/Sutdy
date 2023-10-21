
function iterate(max, action){
    for(let i = 1; i<= max; i++){
        action(i);
    }
}

function log(num){
    if(num % 3 ==0){
        console.log(num + ' = 3의 배수');
    }else{
        console.log(num);
    }
}

function DoubleLog(num){
    console.log(num * 2 + ' 숫자');
}


setTimeout(function(){
    iterate(10, DoubleLog);
},3000);

// setTimeout(()=>{
//     iterate(10, DoubleLog);
// },3000);







