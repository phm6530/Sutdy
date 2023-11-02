import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styled from './css/Container.module.css';

export default function Container() {
  const [workData, setWorkData] = useState(data.map((e) => ({...e , checked : false })) );
  const [value, setValue] = useState("");
  const idx = useRef(data.length);
  const [active , setActive] = useState(0);
  const [ani , aniSet] = useState(false);

  const MSG = {
    0 : '입력이 필요합니다',
    1 : '공백은 입력이 불가합니다.',
    2 : ' 삭제하시겠습니까?'
  }

  useEffect(()=>{
    aniSet(true);
  },[active]);

  const chk = (id) => {
    setWorkData((arr) => {
      return arr.map((it) => it.id === id ? { ...it, checked: !it.checked } : it);
    });
  }

  const Component = () =>{
      const filtering = {
        0 : () => true,
        1 : item => item.checked === false,
        2 : item => item.checked === true,
      }
      const showData = workData.filter(filtering[active]);
      return(
        <>
        {showData.length === 0 ? 
        <div className={styled.slide}>data</div> : <ul className={ani ?`${styled.slide} $` : "" }>
          {showData.map(item => {
            return (
              <>
                <li className={`${styled.tab}`} key={item.id}>
                  <label onClick={() => {chk(item.id); aniSet(false) }} className={`chk ${item.checked ? styled.end : ''}`}>
                    <span className={styled.index}>{item.id + 1}.</span>
                    <span className={styled.title}>{item.title}</span>
                    <span className={`${styled.state} ${item.checked === true ? styled.after : styled.before }`}>
                      {item.checked ? 'Completed' : 'NotYet'}
                    </span>
                  </label>
                  <button onClick={() => deleteWork(item.id ,  item.title)}>
                    <FontAwesomeIcon icon={faXmark} className={styled.iconHover}/>
                  </button>
                </li>
            
              </>
            );
          })}
        </ul>
        }
        </>
      )
  }

  const AddWork = (val) => {
    setWorkData((e) => [...e, { 
      id: idx.current++, 
      title: val, 
      checked : false 
    }]);
  };

  const deleteWork = (id, title) => {
    if (!window.confirm(title + MSG[2])) {
      return;
    }
    setWorkData(arr => arr.filter(item => item.id !== id));
  };

  const handler = (e) => {
    e.preventDefault();
    if(!value){
      alert(MSG[0]);
      return;
    }
    if(value.trim() === ''){
      alert(MSG[1]);
      return;
    }
    AddWork(value);
    setValue(""); // Value 값 초기화
  };

  const List = () => {
    return (
      <>
        {listArr.map((data , idx) => (
          <div key={data} className={`${styled.list} ${idx === active && styled.active}`}
            onClick={()=> setActive(idx)}> {data} </div>
        ))}
        
      </>
    );
  }

  
  return (
    <>
    <div className={styled.container}>
      <div className={styled.tabHeader}>
        <span className={styled.darkMode}>dark mode</span>
        <List/>
      </div>
      <div className={styled.uiArea}><Component/></div>
     
      <form className={styled.submit} onSubmit={handler}>
      <input className={styled.ipt_title} type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button className={styled.button} type='submit'>Add</button>
</form>

    </div>
      
      
      {/* <WorkForm onAddWork={AddWork} value={value} onValueChange={setValue} /> */}
    </>
  );
}
const listArr = ['All','Active','Complete'];

const data = [
  {
    id: 0,
    title: "React",
  },
  {
    id: 1,
    title: "CSS",
  },
  {
    id: 2,
    title: "JavaScript",
  }
];