
// Div 동적생성
const calendarElement = document.getElementById('myCalendar');

const createAndAppend = (parent, elementType, textContent = '', className = '') => {
    const element = document.createElement(elementType);
    element.textContent = textContent;
    element.className = className;
    parent.appendChild(element);
    return element;
};
  
const navDiv = createAndAppend(calendarElement, 'div', '', 'calendar-nav');
const calendarDiv = createAndAppend(calendarElement, 'div', '', 'calendar');
const todayDate = createAndAppend(navDiv, 'div' , '', 'calendar-month');
const btnPrev = createAndAppend(navDiv, 'button', '<' , 'btn-prev');
const btnNext = createAndAppend(navDiv, 'button', '>' , 'btn-next');

// 날짜 배열로 ..
const textDays = ['Sun','Mon','Tue','Wen','Thu','fri','Sat'];
const textMonth = ['January','February','March','April','May','june','july','August','September','October','November','December'];

//오늘 날짜
const date = new Date();
let ViewYear = date.getFullYear();
let ViewMonth = date.getMonth() + 1;
let ViewDay = date.getDate();


const updateCalendarMonthYear = (year, month) => {
    ViewYear = year;
    ViewMonth = month;
    render(ViewYear, ViewMonth);
};

const cusMonth = (item) => {
    item === 'prev' ? ViewMonth -= 1 : ViewMonth += 1;
    if(ViewMonth > 12){
        updateCalendarMonthYear(ViewYear + 1, 1);
    }else if(ViewMonth < 1){
        updateCalendarMonthYear(ViewYear - 1, 12);
    } else {
        render(ViewYear, ViewMonth);
    }
    render(ViewYear, ViewMonth);
    addClickHandler('td' , ClickEvent);
}

//prev, next 버튼
btnPrev.addEventListener('click', () => cusMonth('prev'));
btnNext.addEventListener('click', () => cusMonth('next'));

// 2월 때문에 넣은 윤년.. 계산법모름 그냥 붙여넣음
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}



// 랜딩 페이지
const render = (year , month)=> {
    todayDate.innerHTML =`${textMonth[month -1]}<br> <p class="nav-year">${year}.${month}</p> `;
    const startDay = new Date(year, month - 1, 1).getDay(); // 이번달 시작 요일 구하기
    const isLastDay = [ 31, isLeapYear(ViewYear) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ] 
    
    
    // 달력 innerHtml 
    let html = '<table class="custum-calendar">';
    html += '<thead>';
    textDays.forEach((item ,idx) =>{
        html += `<th class="${idx === 0 ? 'sunday ' : idx === textDays.length - 1 ? 'saturday' : ''}">${item}</th>`;
    });
    html += '</thead>';

    let day = 1;
   // 현재 날짜 정보 가져오기
    const today = new Date();
    html += '<tbody>';
    console.log(isLastDay[month - 1]);
    for (let row = 0; day <= isLastDay[month - 1]; row++) {
        html += '<tr>';
        for (let col = 0; col < 7; col++) {
            // 저번 달 날짜 계산
            if (row === 0 && col < startDay) {
                html += '<td class="NotThisMonth"></td>';
            } 
            // 이번 달 날짜 계산
            else if (day <= isLastDay[month - 1]) {
                const currentDate = new Date(year, month - 1, day);
                const isToday = currentDate.toDateString() === today.toDateString();
                html += `<td class="${isToday ? 'today' : ''}">${day++}</td>`;
            } else {
                html += `<td class="NotThisMonth"></td>`;
            }
        }
        html += '</tr>';
    }
    
    html += '</tbody>';
    html += '</table>';
    calendarDiv.innerHTML = html;
}

const addClickHandler = (ClassName ,  callback)=>{
    const target = document.querySelectorAll(ClassName);
    callback(target);
}

const ClickEvent = (div) =>{
    div.forEach(e => {
        e.addEventListener('click', () => {
            if(!e.classList.contains('NotThisMonth')){
                if (e.classList.contains('active')) {
                    e.classList.remove('active');
                } else {
                    div.forEach(del => del.classList.remove('active'));
                    e.classList.add('active');
                }
            }
        });
    });
}
render(ViewYear , ViewMonth); //초기 화면 랜더링
addClickHandler('td' , ClickEvent);









