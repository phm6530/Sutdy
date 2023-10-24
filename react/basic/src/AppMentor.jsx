import React, { useState } from 'react';

export default function AppMentor(props) {
  const [person, setPerson] = useState({
    name: '엘리',
    title: '개발자',
    mentor: {
      name: '밥',
      title: '시니어개발자',
    },
  });
  const handler = (val , id) =>{
    if(val === null){
      return;
    }
    else if(val.trim() === ''){
      alert('공백 x');
      return;
    }
    else{
      setPerson((e) =>{
        if(id === 0){
          return {...e , name : val};
        }else if(id === 1){
          return {...e , mentor: { ...e.mentor , title : val }};
        }
        return e;
      });
    }
  };
  // console.log(person.mentor.name);
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`what's your mentor's name?`);
          handler(name, 0);
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const title = prompt(`what's your mentor's title?`);
          handler(title, 1);
        }}
      >
        멘토 타이틀 바꾸기
      </button>
    </div>
  );
}
