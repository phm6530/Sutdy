
const Arr = (start , limit) =>{ 
    return Array.from({length: limit} , (_, data)=>{
        return start + data; 
    });
}

console.log(Arr(1 , 10));




const add = (a,b) =>{
    return a + b;
}
console.log(add(1,2));


function cal(func,a,b){    
    return func(a , b);
}   

console.log(cal(add, 1,2))