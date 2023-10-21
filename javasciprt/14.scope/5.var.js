// var 특징 
//  => 일반 코딩 방식과 어긋남
//  => var를 사용하면 코드의 가독성와 유지보수성에 좋지 않음


// 아래 처럼 선언한다면 묵시적으로 var 를 사용함 
// 그러므로 선언인지 재할당인지 확인이 어려움
something = '⏲️';
console.log(something); 


// var는 변수가 재선언되도 에러가 나지않음
var poo = '😎';
var poo = '😎';
console.log(poo);


// var를 사용하면 지역, 블록 스코프가 무시됨 
var apple = '사과';
{
    var apple = 'd';
    {
        var apple = 'c';
    }
}
console.log(apple);


// 함수 레벨 스코프는 지원됨 
// test();
// function test(){
//     var dog = '개';
// }
// console.log(dog);

// console.log(add(...num));

const array = [1,2,3];
const array2 = {name: 'key',type : 'gg'};
for(const item of array){
    console.log(item);
};
// for(const item of array){
//     console.log(item);
// }

const obj = {0:1, 1:2};
