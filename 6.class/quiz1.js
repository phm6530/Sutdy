// counter 만들기
// 0 이상의 값으로 초기화 한 뒤 하나 씩 숫자를 증가 할 수 있는 카운터를 만들기

class Counter{
    #value;
    constructor(StartValue){
        if(!isNaN(StartValue) && StartValue < 0){
            console.log('다시 입력해주세요');
            return;
        }else{
            this.#value = StartValue;
        }
    }
    plus(){
        return ++this.#value;
    }
    minus(){
        return --this.#value;
    }
    get value(){
        return this.#value;
    }

}

const my = new Counter(0);
my.plus()
my.plus()
my.plus()
my.plus()
my.plus()
console.log(my.value);