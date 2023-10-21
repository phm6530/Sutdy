//접근자 프로퍼티 Accessor property

class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName =lastName;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(value){
        console.log(value);
    }
}

const student = new Student('박','현민');
student.value = 'test';
console.log(student.value);



