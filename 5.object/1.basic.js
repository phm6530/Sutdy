
// 사용예제 1
function add(_,item){
    return _ + item;
}

const result = add(1,2);
console.log(result);
console.clear();

// 사용예제 2
function fullName(lastName , firstName){
    let fullName = `${lastName} ${firstName}`;
    return fullName;
}



const testResult = fullName('김','현민');
console.log(testResult);