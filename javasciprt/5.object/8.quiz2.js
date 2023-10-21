
// function Num(e){
//     console.log(e);
// }

function Num(number){
    console.log(number);
}

// let Num = number => console.log(number);

function iterate(max, action){
    for(i = 1;i<= max;i++ ){
        action(i);
    }
    console.log('-------------');
    for(i = 1;i<= max;i++ ){
        action(i * 2);
    }

}

iterate(13 , Num);

function tester(obj){
    console.log(obj);
}

const hyunmin = { name : 'test'}
tester(hyunmin.name);