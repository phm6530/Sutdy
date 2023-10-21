// 매개변수의 기본값은 무조건 undifined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
function add(a = 1,b = 1){

    console.log(a);
    console.log(b);
    // console.log(arguments[2]);
    return a + b;
}

// result = add(1,2);
// console.log(result);

// REST 매개변수 Rest Parameters
function sum(...number){
    console.log(number);
}


sum(2,1,5);
// let array = sum(1,2,3,4,5);



// let i;
// for ( i = 0; i < 5; i ++){
//     console.log(i);
// }
