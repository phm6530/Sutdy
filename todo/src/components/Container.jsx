import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styled from './css/Container.module.css';

export default function Container() {
  const [workData, setWorkData] = useState(data.map((e) => ({...e , checked : false })) );
  const [value, setValue] = useState("");
  const idx = useRef(data.length);

  const AddWork = (val) => {
    setWorkData((e) => {
      const resultArr = { id: idx.current, title: val , checked : false };
      idx.current++;
      return [...e, resultArr];
    });
    setValue(""); // Value 값 초기화
  };

  const chk = (id) => {
    setWorkData((arr) => {
      return arr.map((it) => it.id === id ? { ...it, checked: !it.checked } : it);
    });
  }

  const deleteWork = (id , title) => {
    console.log(title);
      const confirm = window.confirm(`${title} 삭제하시겠습니까?`);
      if(!confirm){
          return;
      } 
    setWorkData((arr) => {
      const returnArr = arr.filter(item => item.id !== id);
      console.log('returnArr : ',returnArr);
      return returnArr;
    });
  };

  const handler = (e) => {
    e.preventDefault(); 
    if(!value){
      alert('입력해주셈');
      return;
    }
    if(value.trim() === ''){
      alert('공백만 입력 금지 안됨');
      return;
    }
    AddWork(value);
  };

  useEffect(()=>{
    console.log(workData);
  },[workData])
  
  const List = () =>{
    
    return(
      <>
        <div className={styled.list + ' ' +styled.active}>ALL</div>
        <div className={styled.list}>Active</div>
        <div className={styled.list}>Completed</div>
      </>
    )
  };

  return (
    <>
    <div className={styled.container}>
      <div className={styled.tabHeader}>
        <span className={styled.darkMode}>dark mode</span>
        <List/>
      </div>
      <div className={styled.uiArea}>
        <ul>
          {workData.map(item => {
            return (
              <li className={`${styled.tab}`} key={item.id}>
                {item.checked === true ? <div className='before'>hi</div> : <div className='before'>fuck</div>}
                <label onClick={() => chk(item.id)} className={`chk ${item.checked ? styled.end : ''}`}>
                  <span className={styled.index}>{item.id}.</span>
                  <span className={styled.title}>{item.title}</span>
                </label>
                <button onClick={() => deleteWork(item.id ,  item.title)}>
                  <FontAwesomeIcon icon={faXmark} className={styled.iconHover}/>
                  
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <form className={styled.submit} onSubmit={handler}>
        <input className={styled.ipt_title} type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button className={styled.button}>Add</button>
        </form>

    </div>
      
      
      {/* <WorkForm onAddWork={AddWork} value={value} onValueChange={setValue} /> */}
    </>
  );
}
// const listArr = ['All','Active','Compl'];

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