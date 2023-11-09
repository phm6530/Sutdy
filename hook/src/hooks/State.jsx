import React, { useState , useRef } from 'react';
import './custum.css';
import { useEffect } from 'react';

const List = [{id: 0 , name : '홍길동'},{id : 1,  name : '나길동'}];

const heavyWork = (e) =>{
    console.log('heavy')
    return e;
}
// console.log(heavyWork(List));

export default function App(){
const [Value , setValue ] = useState('');
const idx = useRef(List.length);
const [data , setdata ] = useState(() => heavyWork(List));

useEffect(()=>{
    console.log(data);
},[data]);

const handerChange = (e) =>{
    setValue(e.target.value);
}

const handlerClick = () =>{
    if(Value === ''){
        alert('데이터를 입력해주세요.');
        return;
    }
    else if(Value.trim() === ''){
        alert('빈칸도 입력 안돼요');
        return;
    }
    else{
        setdata((prev) => [...prev , {id : idx.current++, name : Value}]);
        setValue('');
    }
}

return(
    <>
        <input type="text" value={Value}  onChange={handerChange}/>
        <button onClick={handlerClick}>추가하기</button>
        <h2>List<br></br>--------------</h2>
        {data.map((e)=>
            <p key={e.id}>{e.name}</p>
        )}
    </>
)
}