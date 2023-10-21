/**
 * 삼항조건연산자
 * 조건식 ? 
 */



let fruit = 'orange';

if(fruit === 'apple'){
    console.log('apple');
}else if(fruit === 'orange'){
    console.log('orange');
}else{
    console.log(fruit);
}

fruit === 'apple' ? console.log('orange') : console.log(fruit);;
let emoji = fruit === 'apple' ? 'orange' : fruit;
console.log(emoji)

