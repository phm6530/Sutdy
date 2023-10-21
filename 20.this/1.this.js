/**
 * 글로벌 컨텍스트의 this
 *  - 브라우저
 *  - 노드
 */

const x = 0;
module.exports.x = x;
console.log(this);
console.log(globalThis);

console.clear();

// 함수내부의 this
function fun(){
    console.log(this);
}

fun();


function Cat(name){
    this.name = name;
    this.printName = function() {
        console.log(this.name);
    }
}


const cat1 = new Cat('Cat1');


cat1.printName();