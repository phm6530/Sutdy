import React, { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: '엘리',
    title: '개발자',
    mentors: [
      {
        id : 1,
        name: '밥',
        title: '시니어개발자',
      },
      {
        id : 2,
        name: '제임스',
        title: '시니어개발자',
      },
    ],
  });

  const handler = (prev, current) => {
    if (prev === null || prev.trim() === '' || current === null || current.trim() === '') {
      alert('공백이나 이름을 확인');
      return;
    } else {
      let findName = false;
      
      setPerson((e) => ({
        ...e,
        mentors: e.mentors.map((event) => { 
          if (event.name === prev) {
            console.log('변경함');
            findName = true;
            return { ...event, name: current };
          } else {
            // console.log('없음');
            return event;
          }
        }),
      })); 

      setPerson((e) => ({
        ...e,
        mentors: e.mentors.map((event) => (event.name === prev? { ...event, name: current }: event)),
      }));
      
    if(!findName){
      console.log('없음');
    }
    }
  }

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor) => (
          <li key={mentor.id}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
          const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
          handler(prev, current);
        }}
      >
        멘토의 이름을 바꾸기
      </button>
    </div>
  );
}
