import { useEffect, useRef, useState } from 'react';

export function useCus(Url, initalType){
  const [data , setValue ] = useState(null);
  const prevType = useRef(null)
  const fetchUrl = async (type) => {
    fetch(Url + '/' + type)
      .then((res) => res.json())
      .then((data) => {
        console.log('현재 타입 : ', type);
        console.log('이전 타입 : ',prevType.current); // 업데이트된 값을 출력
        prevType.current = type; // 이전 값을 기록
        setValue(data); // 현재 값을 업데이트
        // console.log(data);
        
      });
  }
  useEffect(()=>{
    fetchUrl(initalType)
  },[]);

  return { data , fetchUrl } ;

}