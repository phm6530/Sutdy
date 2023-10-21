function runIndelay(callback, seconds){
    if(!callback){
        throw new Error('callback 함수 ERROR');
    }if(seconds < 0 ){
        throw new Error('seconds의 값이 0보다 작음');
    }else{
        setTimeout(()=>{
            call(seconds);
        },seconds * 1000);
    }
}
function call(e){
    console.log(e + '초뒤 실행');
}

try{
    runIndelay(call,3);
}catch(error){
    // console.log(error.name);
    // console.log(error.message);
    console.log(error.stack);
}
