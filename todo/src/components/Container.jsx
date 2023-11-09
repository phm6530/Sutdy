import React, { useState,  useEffect } from "react";
import { MSG, initData , listArr} from './constants';
import { handler } from './handler';
// import {useCustumHook} from './cshook';/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
// import { faLightbulb} from "@fortawesome/free-regular-svg-icons";
import styled from './css/Container.module.css';

function useCustumHook(key, initial){
  const [Value ,setValue] = useState(()=>{
    const LocalData = localStorage.getItem(key); 
    return LocalData ? JSON.parse(LocalData) : initial ; 
  });
  useEffect(()=>{
    localStorage.setItem(key , JSON.stringify(Value));
    console.log(Value);
  },[Value , key]) //
  return [Value , setValue];
}

export default function Container() {
  // const [workData, setWorkData] = useState(data.map((e) => ({...e , checked : false })) );
  const [workData, setWorkData] = useCustumHook('TodoList', initData)
  const [mode , Setmode] = useCustumHook('mode' , false);
  // const [value, setValue] = useState(""); 애니메이션 문제로 DOM으로 처리해버림
  const [active , setActive] = useState(0);
  const [ani , aniSet] = useState(false);


  const AddWork = (val) => {
    setWorkData((e) => [...e, { 
      id: workData.length + 1, 
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

  useEffect(()=>{
    console.log('로컬 : ',localStorage.getItem('List'))
    aniSet(true);
  },[active]);

  const chk = (id) => {
    setWorkData((arr) => {
      return arr.map((it) => it.id === id ? { ...it, checked: !it.checked } : it);
    });
  }

  const Component = () =>{
      const filtering = {
        0 : () => true, // ALL
        1 : item => item.checked === false, // Active
        2 : item => item.checked === true, // Complete
      }
      const showData = workData.filter(filtering[active]);
      function ListMap(){
          return (
            <>
            {showData.map(item => (
              <li className={`${styled.tab}`} key={item.id}>
                <label onClick={() => {chk(item.id); aniSet(false) }} className={`chk ${item.checked ? styled.end : ''}`}>
                  <span className={styled.index}>{item.id}.</span>
                  <span className={styled.title}>{item.title}</span>
                  <span className={`${styled.state} ${item.checked === true ? styled.after : styled.before }`}>
                    {item.checked ? 'Completed' : 'NotYet'}
                  </span>
                </label>
                <button onClick={() => deleteWork(item.id ,  item.title)}>
                  <FontAwesomeIcon icon={faXmark} className={styled.iconHover}/>
                </button>
              </li>
            )
              )
            }
            </>
          );
      }

      return(
        <>
        {showData.length === 0 ?  <div className={`${styled.slide} ${styled.NoData}`}>
          <FontAwesomeIcon className={styled.xicon} icon={faCircleXmark} />
          데이터가 없습니다.</div> :  <ul className={`${styled.slide} ${ani ? '' : styled.noAnimation}`}><ListMap/></ul>
        }
        </>
      )      
  }

  function List(){
    return (
      <>
        {listArr.map((data , idx) => (
          <div key={data} className={`${styled.list} ${idx === active && styled.active}`}
            onClick={()=> setActive(idx)}> {data} </div>
        ))}
        
      </>
    );
  }

  const DarkModeToggle = () =>{
      Setmode(!mode);
  }

  useEffect(() => {
    if (mode) {
      document.body.classList.add(`${styled.dark}`);
    } else {
      document.body.classList.remove(`${styled.dark}`);
    }
  }, [mode]);
  
  return (
    <>
    <div className={styled.container}>
      <div className={styled.tabHeader}>
        <span className={styled.darkMode}>
          <button className={`${styled.mode} ${mode ? styled.active : "" }`} onClick={DarkModeToggle}></button>
        </span>
        <List/>
      </div>
      <div className={styled.uiArea}><Component/></div>
     
      <form className={styled.submit} onSubmit={(e) => handler(e, MSG, AddWork)}>
      <input id='inputValue' className={styled.ipt_title} type="text"/>
      <button className={styled.button} type='submit'>Add</button>
</form>

    </div>
      
      
      {/* <WorkForm onAddWork={AddWork} value={value} onValueChange={setValue} /> */}
    </>
  );
}


