import React, {useState, useEffect} from 'react';
import './AppXy.css'


// 초기 화면
export default function AppXy(){
    // position 은 오브젝트로도 받을 수 있고 배열로도 받을수있다.
    const [positon , Setpositon] = useState({clientX : 0, clientY : 0});
    console.log(positon);// 좌표값 확인  
    
    useEffect(()=>{
        const handler = (e) =>{
            // console.log('가로값 :' ,e.clientX );
            Setpositon({ X : e.clientX, Y : e.clientY});
            
        };
        document.addEventListener('mousemove', handler);
        return()=>{
            document.removeEventListener('mousemove', handler);
        }
        
    },[]);  
    // Custum
    const Style = {
        left: `${positon.X}px`,
        top: `${positon.Y}px`,
        '--top':`${positon.Y + 30}px`,
        '--left':`${positon.X}px`
    }
    return(
        <div className='container'>
            <div style={Style} className='pointer'></div>
            <p className='firstP' style={Style} >X 값 : {positon.X} </p>
            <p style={Style}>Y 값 : {positon.Y} </p>
        </div>
    )
}