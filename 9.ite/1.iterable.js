const num = [1,2,3];
function add(a,b,c,d,...e){
    console.log(e);
}
add(1,2,3,4,5,5,6,7,87,8,);


// console.log(add(...num));

const array = [1,2,3];
const array2 = {name: 'key',type : 'gg'};
for(const item in array2){
    console.log(item);
};
// for(const item of array){
//     console.log(item);
// }

const obj = {0:1, 1:2};
