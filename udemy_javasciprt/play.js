// fetchData
const fetchData = () =>{
    const primise = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve('Done!');
        }, 1500);
    });
    return primise;
}

// Bullring 
setTimeout(()=>{
    console.log('Timer is Done');
    fetchData()
    .then(text2 =>{
        console.log(text2);
        return fetchData();
    }) 
    .then(text3 => console.log(text3)); 
}, 2000); 

console.log('Hello'); 
console.log('First-func'); 