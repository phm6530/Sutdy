
const fullTextDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const textDays = ['Sun','Mon','Tue','Wen','Thu','Fri','Sat'];
const textMonth = ['January','February','March','April','May','june','july','August','September','October','November','December'];
// div 생성
const createAndAppend = (parent, elementType, textContent = '', className = '') => {
    const element = document.createElement(elementType);
    element.textContent = textContent;
    element.className = className;
    // console.log(parent);
    parent.appendChild(element);
    return element;
};

const createDiv3 = (what, Name) => {
    const div = document.createElement('div');
    what === 1
        ? div.classList.add(Name)
        : div.setAttribute('id', Name);
    return div;
}

   // btn id 반영
const idClassButton = (id) => {
    const btn = document.createElement('button');
    btn.setAttribute('id', id);
    btn.classList.add('btn-styleType2')
    btn.setAttribute('type', 'submit');
    return btn;
}

// onClick 이벤트 반영 리턴
const createButton = (event) => {
    const btn = document.createElement('button');
    btn.setAttribute('onClick', event);
    return btn;
}

// div 생성 및 class name 반영 리턴
const createDiv = (e) => {
    const div = document.createElement('div');
    div.classList.add(e);
    return div;
}

// input 타입생성
const creatInput = (id, type) =>{
    const input = document.createElement('input');
    input.setAttribute('id' , id);
    input.setAttribute( 'type' , type);
    return input;
}

const creatInputClass = (Class, type) =>{
    const input = document.createElement('input');
    input.classList.add(Class);
    input.setAttribute( 'type' , type);
    return input;
}



// span 생성
const creatSpan = (className) =>{
    const input = document.createElement('span');
    input.classList.add(className);
    return input;
}


// 타이머
const timerDiv = createDiv('timer');
const setMonth = createDiv('setMonth');
const clockArea = document.querySelector('.timer');

function thisClick(){
    const today = new Date();
    return today;
}

const textClock = (date)=>{
    const second = ('0' + date.getSeconds()).slice(-2); // 2자리수가 되면 문자 3자리가 될수도있으니 염두하고 slice(-2) 해야함
    const minit = ('0' + date.getMinutes()).slice(-2); // 2자리수가 되면 문자 3자리가 될수도있으니 염두하고 slice(-2) 해야함
    const hour = ('0' + date.getHours()).slice(-2); // 2자리수가 되면 문자 3자리가 될수도있으니 염두하고 slice(-2) 해야함
    const day = ('0' + date.getDate()).slice(-2); // 2자리수가 되면 문자 3자리가 될수도있으니 염두하고 slice(-2) 해야함
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    
    const formattedTime = `${month}월 ${day}일 ${hour}시 ${minit}분 ${second}초`;
    return formattedTime;
}

const appendClock = (data) =>{
    const clockElement = document.createElement('div');
    clockElement.textContent = data;
    clockArea.textContent = ''; //초기화 시킨거임
    clockArea.appendChild(clockElement);
}

setInterval(()=> {
    const formatChange = textClock(thisClick());
    appendClock(formatChange);
    // console.log(formatChange);
}, 1000);

const currentDate = thisClick();
const initalText = textClock(currentDate);
appendClock(initalText);



// 카드효과 
function tilt(event) {
    var card = document.querySelector('.card');
    var cardInfo = document.querySelector('.card-info');
    var cardBg = document.querySelector('.card-bg');
    var bodyWidth = document.body.clientWidth;
    var bodyHeight = document.body.clientHeight;

    var sxPos = ((event.pageX / bodyWidth) * 100 - 50) * 30;
    //   console.log(sxPos);
    var syPos = ((event.pageY / bodyHeight) * 100 - 50) * 10;
    //   console.log(syPos);

    setTransform(card, -0.03 * sxPos, 0.03 * syPos );
    setTransform(cardInfo, -0.03 * sxPos, 0.03 * syPos );
    setTransform(cardBg, -0.03 * sxPos, 0.03 * syPos );
}   

function resetTilt(element) {
    var card = element.querySelector('.card');
    setTransform(card, 0, 0);
}

function setTransform(element, rotationY, rotationX) {
    element.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;
//   element.style.transformOrigin = transformOrigin;
}
