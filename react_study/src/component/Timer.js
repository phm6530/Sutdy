import React, { useState, useEffect } from 'react';

export default function Timer(props) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    // 컴포넌트가 언마운트될 때 타이머 해제
    return () => {
        clearInterval(timer);
        console.log('Timer Exit');
    }
  }, []); // 빈 배열을 전달하여 최초 렌더링 시에만 실행되도록 함

  return (
    <div>
      <span>{time}</span>
      <span>TIMER 시작</span>
    </div>
  );
}