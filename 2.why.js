// 클로저는 내부 정보를 은닉하고, 공개 함수를 통한 데이터 조작을 위해 사용
// 캡슐화와 정보은닉 클래스의 private 필드와 동일 
function makeCounter(){
    let count = 0;
    function increase(){
        count ++;
        console.log(count);
    }
    
    return {
        increase,
        getCount: () => {
            return count;
        }
    }

    
}
const plus = makeCounter();

plus.increase();
plus.increase();
plus.increase();
plus.increase();
plus.increase();
plus.increase();


console.log(plus.getCount());

