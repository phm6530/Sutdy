import React, { useState, useRef } from "react";
import styled from './css/Container.module.css'

function WorkForm({ onAddWork, value, onValueChange }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddWork(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={(e) => onValueChange(e.target.value)} />
      <button type="submit">추가하기</button>
    </form>
  );
}

export default function Container() {
  const [workData, setWorkData] = useState(data.map((e) => ({...e , checked : false })) );
  const [value, setValue] = useState("");
  const idx = useRef(data.length);

  console.log(workData);
  const AddWork = (val) => {
    setWorkData((e) => {
      const resultArr = { id: idx.current, title: val };
      idx.current++;
      return [...e, resultArr];
    });
    setValue(""); // Value 값 초기화
  };

  const chk = (id) => {
    setWorkData((arr) => {
      return arr.map((it) => {
        if (it.id === id) {
          return { ...it, checked: !it.checked };
        } else {
          return it;
        }
      });
      
    });

  }

  const deleteWork = (id) => {
    setWorkData((arr) => {
      const returnArr = arr.filter(item => item.id !== id);
      console.log(returnArr);
      return returnArr;
    });
  };

  return (
    <>
      <ul>
        {workData.map(item => {
          return (
            <li className={`tap ${item.checked ? 'true' : ''}`} key={item.id}>
              
              <label>
                <input type="checkbox" onClick={() => chk(item.id)}></input>
                <div className={styled.true}>1111</div>
                <span>{item.id}</span>
                <span>{item.title}</span>
              </label>
              <button onClick={() => deleteWork(item.id)}>삭제키</button>
            </li>
          );
        })}
      </ul>
      <WorkForm onAddWork={AddWork} value={value} onValueChange={setValue} />
    </>
  );
}

const data = [
  {
    id: 0,
    title: "HTML",
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