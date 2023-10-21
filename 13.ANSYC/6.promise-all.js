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
getBanana().then(banana => 
    getApple()
    .then( apple => {
        return [banana,apple];
    })
    ).then(console.log);


// primise.all 병렬적으로 한번에 가져오려면 all
Promise.all([getApple() , getBanana()])
.then(furit => console.log('all', furit))
.catch(console.log);


// primise.race 성공한 것 부터 가져오면 race사용
Promise.race([getApple() , getBanana()])
.then(furit => console.log('race', furit));


// primise.allsettled 실패하던 성공하던 설명함
Promise.allSettled([getApple() , getBanana(), getOrange()])
.then(furit => console.log('all-error', furit));


