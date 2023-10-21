/**
 * 스택에서 console 1 출력 후 console.log(3)을 출력한다
 * 스택은 한가지씩 처리가 가능하고 비어있을때 
 * settimeout은 루프를 돌고 스택은 큐 메모리구조에 있는 주소값을 가져와 실행한다
 * 큐는 비동기 , 사용자함수 등을 저장함
 */
function execute(){
    console.log('1');
    setTimeout(()=>{
        console.log('2');
    }, 1000);
    console.log('3');
}
execute();
