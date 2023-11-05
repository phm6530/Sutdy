import React from 'react';
import {useCus} from './useCus';
import './custum.css';

const BaseUrl = 'https://jsonplaceholder.typicode.com';
export default function App(){
    const [ApiValue , fetchUrl] = useCus( BaseUrl , 'users' );
    
    return(
            <>  
            <button onClick={() => fetchUrl('users')}> user Api 버튼</button>
            <button onClick={() => fetchUrl('Posts')}> user Post 버튼</button>
            <button onClick={() => fetchUrl('todos')}> user todos  버튼</button>
            <pre style={{color:'#fff'}}>
            {ApiValue ? JSON.stringify(ApiValue , null ,2) : '데이터가 없습니다.'}
                </pre>
                
            </>
    )
}