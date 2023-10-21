{
    const x = 1;
    {
        const y = 2;
        console.log(x);
    }
    console.log(x);
    // console.log(y);
}


const text = 'global scope'; // 전역 변수 & 전역 스코프 (global 변수, global scope)
{
    const text = 'inside scope'; // 지역 변수, 지역 스코프
    {   
        const text = 'inside scope2'; 
        console.log(text); 
    }
}