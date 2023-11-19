
const weatherIcon = (key) => {
    return `img/icon/${key}.png`;
};

// 카드생성
function addCard(country , city , allData , btnDay){
    const currentDate = new Date();
    const koreaTime = new Date(currentDate.getTime() + (9 * 60 * 60 * 1000));
    const today = koreaTime.toISOString().split('T')[0];
    const todayThistime = new Date().getHours();


    let whatThisDay = !btnDay || today === btnDay ? today : btnDay ;
    !allData[whatThisDay] ? whatThisDay = Object.keys(allData)[0] : allData[whatThisDay];

    const amArr = [];
    const pmArr = [];
    allData[whatThisDay].forEach(e =>{
        e.dt_txt.split(" ")[1].slice(0,2) < 12 ||  e.dt_txt.split(" ")[1].slice(0,2) === '24' ? amArr.push(e) : pmArr.push(e);
    });

    const calculateTemper= (arr) => {
        return Math.round(
        arr.reduce((acc, val) => acc + val.main.temp - 273.15 + val.main.temp_kf, 0) / arr.length
    );
};


    const CardData = allData[whatThisDay][0];

    const cardWrap = document.querySelector('.card-wrap');
    const card = document.createElement('div');
    card.classList.add('card');
    const cardBg = createAndAppend(card, 'div', '', 'card-bg');
    // cardBg.style.backgroundImage = 'url(./img/weather/november.jpg)';
    const cardInfo = createAndAppend(card, 'div', '', 'card-info');
    const day = new Date(whatThisDay).getDay();
    // const selectData = CardData[CardData.length - 1 ];
    // console.log(day);
    const icon = CardData.main;
    const cardDate = CardData.dt_txt.split(" ")[0].split("-");
    // console.log(cardDate);

    let html = '';
    html += `<div class='card_day'>${cardDate[2]} <span>${textMonth[cardDate[1] - 1].slice(0,3)}</span> ${cardDate[0]}</div>`
    html += `<div class='card_date'>${fullTextDays[day]}</div>`;

    const iconArea = createAndAppend(cardInfo, 'p', '', 'iconArea');
    const todayMatch = createAndAppend(cardInfo, 'div','' ,'todayMatch')

    iconArea.innerHTML = html;
    todayMatch.innerHTML += `<div class='temp-align'>
        <img class='weather_icon' src='${weatherIcon(CardData.weather[0].main)}'
        alt='${CardData.weather[0].main}' >

        <span class='temp-style'>
            ${today !== whatThisDay 
                ? `<span class='ampm'>AM</span> ${calculateTemper(amArr)} <span>°</span>
                    <span class='ampm'>PM</span> ${calculateTemper(pmArr)}` 

            : Math.round(CardData.main.temp - 273.15)}<span>°</span> `;
            
        `</span>
        
        </div>`;
    todayMatch.innerHTML += `<span class='city'>${city} .${country}</span>`;
    todayMatch.innerHTML += `</div>`;
    cardWrap.appendChild(card);
}




// slide 생성
function addSlider(arr , days){
    const div = document.createElement('span');
    div.classList.add('firstTime');

    days ? div.textContent = days.slice(5,10) :days = null;

    let firstHTML = '';
    const hourFormat = arr.dt_txt.split(" ")[1].slice(0,2);
    const resultHour = hourFormat.charAt(0) === '0' ? hourFormat.charAt(1) : hourFormat;
    firstHTML += '<div class="swiper-slide">';
    days ? firstHTML += div.outerHTML : '';
    firstHTML += `<img src='${weatherIcon(arr.weather[0].main)}' alt='${arr.weather[0].main}'>`;
    firstHTML += (resultHour === '24' ? '0' : resultHour) + '시<br><br>';
    firstHTML += Math.round(arr.main.temp - 273.15)+ '°';
    firstHTML += '</div>';
    return firstHTML;
}

function btnWeatherday(days , date){   
    // console.log(date);
    const dashBoard = document.querySelector('.dashBoard');
    const btnArea = createAndAppend(dashBoard, 'div', '', 'btnArea');

    days.forEach((e, idx) => {
        const textday = new Date(e).getDay();
        const btnDiv = document.createElement('div');
        btnDiv.setAttribute('data-set', e);
        btnDiv.setAttribute('data-slide', idx);
        idx === 0 ? btnDiv.classList.add('WeatherBtn' , 'active') : btnDiv.classList.add('WeatherBtn');
        btnDiv.textContent = textDays[textday];
        btnArea.appendChild(btnDiv);
    });
}
 
function dataHandler(country, city, setArr , resultKeys){
    const targetSwiper =  document.querySelector('.dashBoard');
    const weatherContents = createDiv3(1,'weatherContents');
    
    const weatherData = setArr.weatherData;

    // console.log(setArr.weatherData);

    const filterArr = {};
    const today = new Date().setHours(0,0,0,0);

    
    Object.keys(weatherData).forEach((e)=>{
        weatherData[e].forEach((data)=>{
            today <= new Date(data.dt_txt.split(" ")[0]).setHours(0,0,0,0) 
            ? filterArr[e] = weatherData[e] : filterArr[e] ;
        });
    });


        // console.log(allData);

    // allData.forEach(e=>{
    //     swiperWrapper.innerHTML += addSlider(e);
    // });
    targetSwiper.appendChild(weatherContents);



    // btnClick 함수에 mySwiper를 전달하여 사용할 수 있도록 함
    addCard( country , city  ,weatherData);
    btnClick(setArr);
    
}



const test = document.getElementById('waether');

const loadingText = createDiv(1, 'loading');
loadingText.classList.add('loadingDiv');
loadingText.textContent = 'Loading...';
test.appendChild(loadingText);

function btnClick(data) {
  const target = document.querySelectorAll('.WeatherBtn');
//   console.log(data);
  target.forEach((e) => {
    e.addEventListener('click', () => {
      target.forEach((del) => del.classList.remove('active'));
      e.classList.add('active');
      const idx = e.getAttribute(['data-slide']);
      const clickDate = e.getAttribute(['data-set']);
      console.log(clickDate);
    //   swiper.slideTo(idx);
      const cardWrap = document.querySelector('.card');
      
      // 애니메이션 클래스 추가
      cardWrap.classList.add('removeAnimation');

      // 애니메이션 끝난 후의 작업 처리
      cardWrap.addEventListener('animationend', () => {
        const cardWrapf = document.querySelector('.card-wrap');
        cardWrapf.innerHTML = '';
        
        // 애니메이션 클래스 제거
        cardWrap.classList.remove('removeAnimation');
        
        // addCard 함수 호출
        thisDayinfo(data.weatherData , clickDate );
        addCard(data.country, data.city,  data.weatherData , clickDate );
      });
    });
  });
}

function thisDayinfo(data , click){
    
    const targetDiv = document.querySelector('.weatherContents');
    // data[click].forEach(e=>{
    //     console.log(e);
    // });
    
    let html = '';
    html += `<div class='contents-wrap'>`
    html += `<span>WindSpeed : ${data[click][0].wind.speed}</span>`;
    html += `<span>humidity : ${data[click][0].main.humidity}%</span>`;
    html += `<span>WindSpeed : ${data[click][0].wind.speed}</span>`;
    html += `<span>humidity : ${data[click][0].main.humidity}%</span>`;

    html += '</div>'

    targetDiv.innerHTML = html;
    // console.log(data , click);
}

function addSliderContainer(allData){
    // console.log(allData);
    const dashBoard = document.querySelector('.dashBoard');
    const swiperContainer = createAndAppend(dashBoard , 'div' , '' , 'swiper-container' );
    const swiperWrapper = createAndAppend(swiperContainer , 'div' , '' , 'swiper-wrapper' );
    let html = '';

    const uniqueDates = {};
    allData.forEach((e) => {
        const date = e.dt_txt.split(" ")[0];

        // 중복 여부 확인
        if (!uniqueDates[date]) { 
            // console.log(date);
            // console.log('작동');
            html += addSlider(e, date); // 중복되지 않을 때만 date 값을 전달
            // 중복이 아닌 경우에는 해당 날짜를 기록
            uniqueDates[date] = true; 
        }else{
            html += addSlider(e, null);
        }
        // console.log(uniqueDates);
    });
    swiperWrapper.innerHTML = html;
    
    const mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 10,
        spaceBetween: 10,
        freeMode: true
    });
}





// 위치 정보 받기
navigator.geolocation.getCurrentPosition(async (position) => {
    const { latitude, longitude } = position.coords;
    const apiKey = '4ff4e9b9bb000db3b5905140478fd229';
    const apiURI = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;            
    // console.log(apiURI);
    const fetchData = async () =>{
    fetch(apiURI)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('에러 났네');
            }
        })
        .then(data => {

            const cityName = data.city.name;
            const country = data.city.country;
            // const text = createDiv3(1, 'weatherWrap');
            test.removeChild(loadingText);
            // test.appendChild(text);

            const tester = data.list;
            // console.log(tester)
            // console.log(new Date(tester[0].dt * 1000)); 
            const dtValue = data.list[0].dt;
            const koreaTime = new Date(dtValue * 1000).toLocaleString('kr-KR');
            // console.log(koreaTime);

            // console.log(new Date().toLocaleString('kr-KR'));
            // console.log(data);

            // 일별 객체배열 생성
            const resultArr = ()=>{
                const weatherArr = {city: data.city.country , country : data.city.name , weatherData : []};
                data.list.forEach((e)=>{
                    const date = new Date(e.dt * 1000);
                    const formattedDate = date.toLocaleString('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        timeZone: 'Asia/Seoul',
                        hour12: false // AM/PM 표기를 사용하지 않고 24시간 형식으로 표시
                    }).replace(/(\d+)\/(\d+)\/(\d+), (\d+:\d+:\d+)/, '$3-$1-$2 $4');
                    // console.log(formattedDate);
                    // console.log(formattedDate);
                    // console.log(formattedDate.split(" ")[1].slice(0,2) === 24 ?);
                    e.dt_txt = formattedDate;
                    const dayFormating = new Date(e.dt * 1000).toLocaleDateString('ko-KR');
                    const dayFormat = dayFormating.replace(/[\s.]+/g, '-').replace(/-$/, '');


                    if(!weatherArr.weatherData[dayFormat]){
                        weatherArr.weatherData[dayFormat] = [];
                    }
                    weatherArr.weatherData[dayFormat].push(e);
                });
                // console.log(weatherArr.weatherData);
                return weatherArr;
            }
        //    const resultArr = data.list.reduce((arr , val) =>{
        //             const data =  val.dt_txt.split(" ")[0];
        //             arr[data] = arr[data] || [];
        //             arr[data].push(val);
        //             return arr
        //     },{});
            // 일 생성
        function mergeData(dataByDate) {
            // 날짜별 데이터를 배열로 추출
            const dataArray = Object.values(dataByDate);
            // 배열을 하나로 합치기
            const mergedData = [].concat(...dataArray);
            return mergedData;
            }
        // 모든 데이터를 합침
        const allData = mergeData(resultArr().weatherData);
            
            const Keys = Object.keys(resultArr().weatherData);
            const today = new Date().setHours(0,0,0,0);

            const resultKeys = Keys.filter((e)=>{
                return new Date(e).setHours(0,0,0,0) >= today;
            });
                

            btnWeatherday(resultKeys);
            dataHandler(country , cityName , resultArr() , resultKeys );
            thisDayinfo(resultArr().weatherData , resultKeys[0]); // 초기값
            addSliderContainer(allData);
            // addCard( country , cityName , CardData[CardData.length - 1] ,weatherData);
        })
        .catch(error => {
            loadingText.textContent = error;
            console.error('Error fetching data:', error);
        });
    }
    fetchData();
});