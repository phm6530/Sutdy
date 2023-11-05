import { useState } from 'react';


export function useCustum(initialData){
    const [value, setvalue] = useState(initialData);

    const handleChange = (e) =>{
        setvalue(e.target.value);
    }
    const handlerAlert = () =>{
        value === '' || value.trim() === '' ?  alert('값을 입력하세요'): alert(value) ;        
        setvalue('');
    }


    return [value , handleChange , handlerAlert];
}