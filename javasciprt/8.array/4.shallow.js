const pizza = {name : '😎', price : 2};
const ramen = {name : '🫥', price : 1};
const sushi = {name : '😥', price : 3};

const store1 = [pizza , ramen];
console.log('store 1 = ', store1);
 
const store2 = Array.from(store1);
console.log('store 2 = ' ,store2);

store2.push(sushi);
console.log('store 22 = ' ,store2);


pizza.price = 4;
console.log('store 1 = ' , store1);
console.log('store 2 = ' , store2);