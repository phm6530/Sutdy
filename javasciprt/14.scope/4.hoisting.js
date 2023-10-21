
// 함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해줌
// 함수의 선언문은 선언 이전에도 호출이 가능함
print();

function print(){
    console.log('hello');
}

let hi = 'hi'; // 변수는 클래스는 선언만 호이스팅이 되고 초기화는 되지않음
// 변수는 초기화가 되어야함
console.log(hi);


let x = 1; // 환경 외부 참조 변수
{
    console.log(x);
    let x = 2; // let x => 환경 레코드
}