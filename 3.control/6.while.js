/**
 * 
 * while(조건){}
 * 조건이 false가 될때까지 반복실행
 */

let num = 5;

while(num >=0 ){    
    console.log(num);
    num--;
}

let isAtive = false;
let i = 0;

while(isAtive){
    console.log('실행---')
    if(i === 100){
        console.log('끝');
        break;   
    }
    i++;
}


do {
    console.log('do-while');
}while(isAtive);


// let test = 0;
// console.log(test --);
// console.log(test);