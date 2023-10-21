// 1. 생성자 함수 <= 고전적인 방법
// 2. 클래스

class Test{

    static MAX_NUM = 5;

    //생성자 : new 키워드로 객체를 생성할때 호출되는 함수
    constructor(name, id){
        this.name = name;
        this.id = id;
    }

    // 인스턴스 레벨의 메서드
    display = () => {
        console.log(`${this.name}: ${this.id}`);
    }

    static makeRandomTest() {
        return new Test('hyunmin','dark_story');
    }
}


// const my = new Test('hyunmin' , 'phm6530');
// my.display();
// console.log(my.id);
 
const tester = Test.makeRandomTest();
console.log(tester);
console.log(Test.MAX_NUM);