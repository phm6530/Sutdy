const fruits = ['🙄','😣','😥','😮','🫥']
fruits.splice(2,1,2);
console.log(fruits);


const input = ['🍌', '🍓', '🍇', '🍓']
const test = input.splice(input.indexOf('🍓',1) ,1,'test');
console.log(input);