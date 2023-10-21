// 콜백함수 
const add = (a,b) => a+b;
const multiple = (a,b) => a * b;

// 전달된 action은 callback 함수이다.
// 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아닌 
// 함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달됨
function calulator(a,b, action){
    if(a < 0 || b < 0){
        return;
    }
    let result = action(a,b);   
    console.log(result);
    // return result;
}

calulator(1,2 , multiple);

