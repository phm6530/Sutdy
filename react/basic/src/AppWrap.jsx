import React from 'react';
// import Avartar from './basic/components/Avartar';
import './basic/App.css';
// import Avatar from './basic/components/Avatar';
// import img from "./basic/image/test2.jpg";

export default function AppWrap(){
    return (
        <div>
            <Navbar>
                <Avatar
                    img = './image/img1.jpg'
                    name = 'bob'
                    size = {200}
                    isNew
                />
                <span>hi</span>
            </Navbar>

        </div>
    )
}
function Navbar({children}){
    return(
        <header style={{background:'red'}}>{children}</header>
    )
}

function Avatar({src, name , size , isNew}){
    return(
        <div className='nav'>
            
            <img 
                src={src} 
                alt={name} 
                width={size} 
                // height={size}
            />
            <span>hello</span>
            {isNew && <span className='new'>New</span>}
        </div>
    )
}