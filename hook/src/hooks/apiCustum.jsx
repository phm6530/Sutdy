import React from 'react';
import {useCus} from './apiCustumCustum';
import './custum.css';

const BaseUrl = 'https://jsonplaceholder.typicode.com';
export default function App(){
    const  {data , fetchUrl} = useCus( BaseUrl , 'users' );
    
    return(
            <>  
            <button onClick={() => fetchUrl('users')}> user Api 버튼</button>
            <button onClick={() => fetchUrl('Posts')}> user Post 버튼</button>
            <button onClick={() => fetchUrl('todos')}> user todos  버튼</button>
            <pre style={{color:'#fff'}}>{JSON.stringify(data , null ,2)}</pre>
            {/* {<pre style={{color:'#fff'}}>{JSON.stringify(postData[0] , null ,2)}</pre>} */}
                
            </>
    )
}