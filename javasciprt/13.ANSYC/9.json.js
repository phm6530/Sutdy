// object > json [stringify]
// json > object [parse]    

const huynmin = {
    name : 'hyunmin',
    age : 33,
    eat: ()=>{
        console.log(eat);
    }
}

const changeJson = JSON.stringify(huynmin);
//JSON은 객체의 상태, 프로퍼티만 저장가능 함수 x 
console.log(changeJson);
console.log(huynmin);

const obj = JSON.parse(changeJson);
console.log(obj);