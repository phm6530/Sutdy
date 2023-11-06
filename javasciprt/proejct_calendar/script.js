// function delay(sec, callback) {
//     setTimeout(() => {
//         callback(  new Date().toISOString());
//     }, sec * 1000);
// }

// delay(1, (e ) => {
//     console.log(1, e);
// });
 

// function test(num , callback){
//     console.log(num);
//     console.log(callback());
// }

// function callback(){
//     return '안녕하세요';
// }

// test(1, callback)


const List = ['가위','바위','보'];
const randomIdx = Math.floor(Math.random() * List.length);
const comPuter = List[randomIdx];
const user = '바위';


function me(com , me){
    if( com === me ){
        console.log('비김');
    }else if(com === '가위' && me ==='바위' ||
    com === '바위' && me === '보' ||
    com === '보' && me === '가위'
    ){
        console.log(`You win `);
    }else{
        console.log('computer Win');
    }
}

console.log(`computer :${comPuter} /// You : ${user}`);
me(comPuter , user);
