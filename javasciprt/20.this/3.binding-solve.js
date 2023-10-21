// this 바인딩
// this는 항상 자신의 인스턴스 자체를 가리킴
// 정적으로 인스턴스가 만들어지는 시점에서 this가 결정됨
// but, 자바스크립트에서는 누가 호출하냐에 따라 this가 달라짐
// this는 호출하는 사람에 의해 동적으로 결정됨

function Cat(name){
    this.name = name;
    this.printName = function() {
        console.log(`고양이 = ${this.name}`);
    }
}

function Dog(name){
    this.name = name;
    this.printName = function() {
        console.log(`강아지 = ${this.name}`);
    }
}

const cat = new Cat('cat');
const dog = new Dog('Dog');
cat.printName();
dog.printName();

dog.printName = cat.printName;
cat.printName();
dog.printName();