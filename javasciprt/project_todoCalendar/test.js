const apiURI = `https://api.openweathermap.org/data/2.5/forecast?lat=37.552128&lon=127.2020992&appid=4ff4e9b9bb000db3b5905140478fd229`;

const fetchData = async () => {
    try {
        const response = await fetch(apiURI);

        if (!response.ok) {
            throw new Error('에러 났네');
        }
        const data = await response.json();
        // const epochTime = data.list[0].dt;
        console.log(new Date().toLocaleString('ko-KR').getDate());

        // data.list.forEach((e)=>{
        //     const koreaTime = new Date(e.dt * 1000).toLocaleString('ko-KR');
        //     console.log(koreaTime);
            
        // });
        
        // console.log('날씨 데이터 시간:', koreaTime);
        // console.log('현재 시간:', new Date().toLocaleString('ko-KR'));




    } catch (error) {
        console.error('데이터를 가져오는 중 에러 발생:', error);
    }
};

fetchData();