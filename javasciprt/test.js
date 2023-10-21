
// const obj = 'hyunmin';
// const num = [1,2,3,4];


// function test(value , e){
//     return e.map((item) => { 
//         item + value ;
//         console.log(item + value);
//     });
// }
// test(obj ,num);



const obj = {
    name: 'hyunmin',
    age : 33,
    type : [1,2,3,4]
}

function test(){
    console.log(this.name + ', ' + this.age);
    return this.name + ', ' + this.age;
    
};

// test.call(obj);
const result = test.bind(obj);
result();
// console.log(result);
