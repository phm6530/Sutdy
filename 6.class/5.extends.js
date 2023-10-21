// 상속
class Animal{
    constructor(color){
        this.color = color;
    }
    eat(){
        console.log('eat-tiger');
    }
    sleep(){
        console.log('sleep-tiger');
    }
}

class Tiger extends Animal{
}

class Dog extends Animal{
    constructor(color,ownerName){
        super(color);
        this.ownerName = ownerName;
    }
    play(){
        console.log('playing');
    }
    eat(){
        super.eat();
        console.log('땅콩 먹이');
    }
}

const tiger = new Tiger('노랑');
const dog = new Dog('땅콩','박현민');
const animal = new Animal('땅콩');
// console.log(tiger);
// console.log(dog);
// dog.eat();
console.log(animal);