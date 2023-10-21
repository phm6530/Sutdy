
const map = new Map([
    ['key1','🍌'],
    ['key2','🍌']
]);
console.log(map);
console.log(map.size);//사이즈확인
console.log(map.has('key1')); //키로 있는지 확인 있으면 true 없으면 false
map.forEach((item, key) => console.log(item , key));//매개 변수 : 벨류 , 키
console.log(map.keys()); // 키만 받아오기
console.log(map.values()); // 벨류만 받기
console.log(map.entries()); //전체 키벨류


console.log(map.get('key1')); //

map.set('key3','추가함');
console.log(map);

const key = { name : 'hyunmin', age : 30};
const value = { name : 'hyunmin2', age : 33333};
const map2 = new Map([[key,value]]);
console.log(map2.get(key).name);