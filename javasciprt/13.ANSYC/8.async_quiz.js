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
    }
    return Promise.resolve(`${chicken}  => '시계3'`);
}

async function fatchEggResult(t){
    let egg3 = t;
    try {
        egg3 = await fetchEgg3(t) //
            ;
    } catch(error) {
        egg3 = '⏲️';
    }
    const egg2 = await fetchEgg2(egg3);
    return await fetchEgg1(egg2);
}

const t = '😮';
fatchEggResult(t).then(console.log)

// 내가푼거
// async function fatchEggResult(e){
//     const egg3 = await fetchEgg3(e).catch((error)=>{return fetchEgg3('⏲️')});
//     const egg2 = await fetchEgg2(egg3);
//     const egg1 = await fetchEgg1(egg2);
//     return egg1;
// }

// const e = '😎';
// fatchEggResult(e).then(console.log);

