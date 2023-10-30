import React, { memo, useCallback, useMemo, useReducer} from 'react';
import personReducer from './reducer/person-reducer';
export default function AppMentor() {
const [person , dispatch]  = useReducer(personReducer, initialPerson);
// const [person, setPerson] = useState(initialPerson);

const ObjAdd = useCallback(()=>{
  const name = prompt(`누구의 이름을 바꾸고 싶은가요?`);
  const title = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
  dispatch({type : 'added' , name , title});
},[])

const ObjDelete = useCallback(() => {
  const name = prompt(`삭제 하고자 하는 멘토는?`);
  dispatch({type : 'deleted' , name });
},[])

const ObjChange = useCallback(() => {
  const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
  const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
  if (prev === null || prev.trim() === '' || current === null || current.trim() === '') {
    alert('공백이나 이름을 확인');
    return;
  } else {
    dispatch({type : 'updated' , prev, current});

    
    // 리액트는 객체를 생성해서 변경해야함 이유는 '불변성'을 지키기 위해
    // setPerson((e) => ({
    //   ...e,
    //   mentors: e.mentors.map((event) => (event.name === prev? { ...event, name: current }: event)),
    // }));
  }
},[])

  
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
      <Button text='멘토 이름 변경' onClick={ObjChange}></Button>
      <Button text='멘토 이름 추가' onClick={ObjAdd}>  </Button>
      <Button text='멘토 삭제' onClick={ObjDelete}></Button> 
    </div>
  );
}


const Button = memo(({text, onClick}) =>{
  console.log('Button' , text ,'re-renderring ');
  const result = useMemo(()=>calculateSometing(),[text]) ;
  return(
    <button
      onClick={onClick}
      style={{
        backgroundColor : '#000',
        color:'white',
        borderRadius: '20px',
        margin: '0.4rem'
      }
      }
    >
     {text} {result}
    </button>
  )
})

const calculateSometing = () =>{
  for(let i = 0; i < 10000; i +=5 ){
    console.log('😉');
  }
  return 10;
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