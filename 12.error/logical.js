
const obj_1 = {test : 1, owner: 2};
const obj_2 = {test : 2};



if(obj_1 && obj_2){
    console.log('참');
}

console.log(obj_1&&obj_2);
console.log(obj_1||obj_2);

function changeowner(obj){
    if(!obj.owner){
        throw new Error('주인 없음');    
    }else{
        obj.owner = 'owner change';
    }
    
}
obj_1.owner && changeowner(obj_1);
obj_2.owner && changeowner(obj_2);

console.log(obj_1);
console.log(obj_2);


function makenewowner(obj){
    if(obj.owner){
        throw new Error('주인 존재함');
    }
    obj.owner = 'owner';
}

obj_1.owner && changeowner(obj_1);
obj_2.owner && changeowner(obj_2);

console.log(obj_1);
console.log(obj_2);

//obj_3 가 Null 인지 undefind 인지 검사 후 name을 objVal에 값을 넣음
const obj_3 = {name : 3};
const objVal = obj_3 && obj_3.name;

console.log(objVal);

const obj_4 = 0;
console.log(obj_4 || 1); // ||일때 0은 false로 판단하기에 1을 출력
console.log(obj_4 ?? 1); //