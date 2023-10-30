/**
 * this는 동적/정적할당을 하며
 * 동적할당은 
 * 호출 컨텍스트 > this할당 함수 > 전역객체(브라우저 window / node.js global) 순으로 할당함
 * 호출컨텍스트는 아래기준으로 ageTest
 * 
 * 정적할당은
 * 애로우 함수나  this를 할당하는 함수로는 bind apply call로 할당함
 * 
 * 
 * 
 */

const ageTest = {
    unit : '살',
    ageList : [1,2,3],
    getAgeList : function(){
        const self = this;
        const result = this.ageList.map(function(age){
            return age + self.unit;
        });
        console.log(result);
    }
}
ageTest.getAgeList();

// const teser = 5;
// teser =+ 3;
// console.log(teser);

/**
 * 예로 map 함수는 map(콜백(현재 값 , index , arr) , this 위치 )를 가르키는데 
 * bind 함수는 말그대로 바인딩 작업이 필요하기에 새로운 함수로 선언하여 실행하여야만 함
 * call 함수는 즉시 실행함으로 바인딩이 필요없음
 */
const obj = {
    name: 'hyunmin',
    age : 33,
    type : [1,2,3,4]
}

function test(e){
    console.log(this.type[e] + ', ' + this.age);
    return this.name + ', ' + this.age;
};

let result = test.call(obj,2); // call
const tester = result.split(',');
console.log(tester[0]);

//  const result = test.bind(obj);
 
// obj.test(2);



// const numbers = [1, 2, 3, 4, 5];
// const context = { offset: 10 };

// function doubleValue(value, index, arr) {
//     return value * 2 + this.offset;
// }
 
// const doubledValues = numbers.map(doubleValue, context);
// console.log(doubledValues); // 출력: [12, 14, 16, 18, 20]