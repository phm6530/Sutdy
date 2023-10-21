function fetchEgg1(chicken){
    // return new Promise((resolve,reject)=> {});
    return Promise.resolve(`${chicken}  => '시계1'`);
}
function fetchEgg2(chicken){
    // return new Promise((resolve,reject)=> {});
    return Promise.resolve(`${chicken}  => '시계2'`);
}
function fetchEgg3(chicken){
    if(!chicken){
        return Promise.reject(new Error('ERROR!!!'));
    }else{
        return Promise.resolve(`${chicken}  => '시계3'`);
    }
    
}

fetchEgg3()//
.catch((error)=>{
    return fetchEgg3('⏲️');
})
.then(egg3 => fetchEgg2(egg3)) // <-- 전달인자와 호출인자가 같으면 생략 가능함
.then(egg2=> fetchEgg1(egg2))
.then(result => console.log(result))
.catch(error => console.log(error.name));



