

/**
 * for문 
 * 
 * 실행순서
 * 변수선언문 > 조건식 > {}코드 수행 > 증감식
 * 
 * 
*/


// for (let i = 0; i <= 5; i ++ ) {
//     for(let j =0; j <= 5; j++){
//         // console.log(i,j);
//     }
// }

for (let i = 0; i < 10; i++){
    console.log(i);
    if(i === 5){
        continue;        
        console.log('i는 5')
        break;
    }
}




