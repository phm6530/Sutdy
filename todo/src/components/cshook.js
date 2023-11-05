import { useState ,useEffect } from 'react';

export function useCustumHook(key, initial){
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