// 함수 선언문 function name()
// 함수 표현식 const num = function(){ }
// arrow 함수 const num () => {}

let add = function (a,b){
    return a + b;
}

console.log(add(1,2));

//화살표함수
add = (a,b) => {
    return a + b;
}
console.log(add(1,2));

//값만 설정할때는 아래처럼 축약가능
add = (a,b) => a + b;

console.log(add(1,2));

//생성자 함수 const object = new function(); // 객체편에서 다시다룸


// IIFE (immedicately-invoked Function Expressions)
// 함수 바로 실행될때
(function run(){
    console.log('e');
})();