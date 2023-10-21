

/**
 조건문에 해당
 switch if와 다름 
 정해진 값에 대해 특정한 일을 해야 하는 경우
*/

let day = 6; // 일
let dayName;
if(day == 0 ){
    dayName = '일요일';
}
else if( day == 1 ){ // 월 
    dayName = '월요일';
}
else if( day == 2 ){ // 화 
    dayName = '월요일';
}
else if( day == 3 ){ // 수
    dayName = '월요일';
}
else if( day == 4 ){ // 목 
    dayName = '월요일';
}
else if( day == 5 ){ // 금
    dayName = '월요일';
}
else if( day == 6 ){ // 금
    dayName = '토요일';
}

console.log(dayName);
console.clear();

switch(day) {
    case 0:
        dayName = '월요일'
        break
    case 1:
        dayName = '월요일'
        break
    case 2:
        dayName = '월요일'
        break
    case 3 : 
        dayName = '월요일'
        break
    default:
        console.log('값 없음 ')
}

console.log(dayName);