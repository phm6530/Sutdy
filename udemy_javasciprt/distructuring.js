const { Console } = require('console');



const person = [ 'hyunmin' , 'ttt']

const result = [...person , 'test'];


const toArray = (...args) =>{
    return args;
}

//Rest
console.log(toArray(1,2,3,4,5));

//Shift
console.log(person);
console.log(result);