// 에러 핸들링
// try catch finally
function readFile(path){
    
    throw new Error('File path Notfinding');
    return 'File infomation';
}

function processFile(path){
    let contents;
    try{
        contents = readFile(path);
    }catch(error){
        console.log(error.name);
        console.log(error.message);
        console.log(error.stack);
        contents = '기본내용';
    }finally{
        console.log('끝');
    }
    const result = 'hi ' + contents;
    return result;
}

const result = processFile('경로');
console.log(result);