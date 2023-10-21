// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함

function result(max, action){
    for(let i = 1; i <= max; i++){
        action(i);
    }
}

function test(num){
    let text;
    if(num % 3 == 0){
        text = `${num}은 3의 배수 입니다`;
    }
    else{
        text = num;
    }
    console.log(text);
}

result(15 , test);

let IsTure = 1;
let i = 0;
do{
    console.log(`${i} - 아직살아있다`)
    if(i == 10){
        break;
    }
    i++;
}while(IsTure);

// function isolate(num){
//     console.log(num * 2);
// }

// result(15 , (event) => console.log(event * 2));

