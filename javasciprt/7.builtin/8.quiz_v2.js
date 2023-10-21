// 1. 문자열의 모든 char를 하나씩 출려갛라 
const text = 'hello world!';
for(let i=0; i< text.length; i++){
    console.log(text[i]);
}

// 2. 사용자들의 id를 잘라내어 각 id를 배열로 보관
const ids = 'user1, user2 , user3, user4';
const idsReplace = ids.replace(/(\s*)/g ,'');
const arr = idsReplace.split(',');
console.log(arr);

// 3. 1초에 한번씩 시계를 출력해보자
setInterval(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const today = date.getDay();
    const arr_day = ['일','월','화','수','목','금','토'] ;
    const hour = (e) => {
        return e.getHours() >= 12 ? `오후 ${e.getHours() - 12}시` : `오전 ${e.getHours()}시`;
    };

    const monute = date.getMinutes();
    const seconds = date.getSeconds();
    console.log(`${year}-${month}-${day} ${arr_day[today]}요일 ${hour(date)} ${monute}분 ${seconds}초`);

}, 1000);

