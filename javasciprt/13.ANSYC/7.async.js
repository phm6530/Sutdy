function getBanana() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('🍌');
      }, 1000);
    });
  }
  
  function getApple() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('🍎');
      }, 3000);
    });
  }
  
  function getOrange() {
    return Promise.reject(new Error('no orange'));
  }
  
//바나나와 사과를 같이 리턴함
// function fatchfruit(){
//     return getBanana()
//     .then(banana => 
//         getApple().
//         then( apple => {return [banana,apple];})
//     )
// }

//비동기 함수를 동기적으로 실행 
async function fatchfruit(){
    const banana = await getBanana();
    const apple = await getApple();
    const orange = await getOrange()
    return [banana , apple, orange];
}

fatchfruit()
.then(console.log);