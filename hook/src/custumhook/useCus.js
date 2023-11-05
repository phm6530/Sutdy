import { useEffect, useRef, useState } from 'react';

export function useCus(Url, initalType){
  const [Value , setValue ] = useState(null);
  const test = useRef(null)
  const fetchUrl = async (type) => {
    fetch(Url + '/' + type)
      .then((res) => res.json())
      .then((data) => {
        console.log('타입 : ', type);
        test.current = Value; // 이전 값을 기록
        console.log('이전데이터 : ',test.current); // 업데이트된 값을 출력
        setValue(data); // 현재 값을 업데이트
        console.log(data);
        
      });
  }
  useEffect(()=>{
    fetchUrl(initalType)
  },[]);

  return [ Value , fetchUrl ] ;

}