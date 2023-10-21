

function Test(name,id){ 
    this.name = name;
    this.id = id;
    this.display = () => {
        console.log(`${this.name} : ${this.id}`);
    }
}

const my = new Test('hyunmin','phm6530');
console.log(my.display);
my.display();