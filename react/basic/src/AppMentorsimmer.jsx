import { useImmer } from 'use-immer';
// import React, { useState } from 'react';
export default function AppMentor() {
const [person, updatePerson] = useImmer(initialPerson);

const ObjAdd = () => {
  const name = prompt(`추가할 이름은?`);
  const title = prompt(`추가할 타이틀?`);
  updatePerson(person =>{
      person.mentors.push({id : person.mentors.length + 1 , name,title});
  })
  // setPerson((e)=>({
  //   ...e, mentors : [...e.mentors, {id : e.mentors.length + 1 , name ,title}]
  // }));
}

const ObjDelete = () => {
  const name = prompt(`삭제 하고자 하는 멘토는?`);
  updatePerson((person) => {
    const index = person.mentors.findIndex((m) => (m.name === name));
    person.mentors.splice(index ,1);
  });
  // setPerson((e)=>({
  //   ...e,
  //   mentors : e.mentors.filter((item)=>item.name !== name)
  // }));
}

const ObjChange = () => {
  const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
  const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
  if (prev === null || prev.trim() === '' || current === null || current.trim() === '') {
    alert('공백이나 이름을 확인');
    return;
  } else {
    updatePerson(person=>{
      const mentor = {...person.mentors.find(m=> m.name ===prev)};
      mentor.name = current;
      return mentor; // < -- 없어도 애로우 함수는 암묵적으로 객체를 반환함
    });
    // 리액트는 객체를 생성해서 변경해야함 이유는 '불변성'을 지키기 위해
    // setPerson((e) => ({
    //   ...person,
    //   mentors: person.mentors.map((event) => { 
    //       if (event.name === prev) {
    //       return { ...event, name: current };
    //       } else {
    //       return event;
    //       }
    //   }),  

    // })); 
    // setPerson((e) => ({
    //   ...e,
    //   mentors: e.mentors.map((event) => (event.name === prev? { ...event, name: current }: event)),
    // }));
    
  // if(!findName){
  //   console.log('없음');
  // }
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
      <button onClick={ObjChange}> 멘토의 이름을 바꾸기 </button>
      <button onClick={ObjAdd}> 멘토의 추가 하기  </button>
       <button onClick={ObjDelete}>멘토의 삭제</button> 

    </div>
  );
}


const initialPerson = {
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
}