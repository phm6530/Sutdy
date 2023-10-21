//접근제어자
// private(#) , public(기본), protected
class Test{
    #name;
    #id;
    #type = 'test';
    constructor(name, id){
        this.#name = name;
        this.#id = id;
    }
    display = () => {
        console.log(`${this.#name}: ${this.#id}`);
    }
}

const that = new Test('hm','phm');
console.log(that);
console.log(that.name);