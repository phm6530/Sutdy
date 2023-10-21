//promise는 콜백을 받지않음 
// resolve는 Promise에 내장된 함수 = 성공인지 실패인지를 확인 이후 then을 실행
function runIndelay(seconds){
    return new Promise((resolve,reject)=>{
        if(!seconds || seconds < 0 ){
            reject(new Error('second가 없거나 0보다 작음'));
        }
        setTimeout(resolve('foo'), seconds *1000);
    });
}
// function call(e){
//     console.log(e + '초뒤 실행');
// }
function test(a){
    console.log(a);
}

runIndelay(3)
    // .then(test)
    .then((e)=> console.log(e + '타이머 완료'))
    .catch(console.error)
    .finally(()=> console.log('end'));



