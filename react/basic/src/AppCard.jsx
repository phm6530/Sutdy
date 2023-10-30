import React from 'react';
import './App.css'

export default function AppCard(){

    return(
        <>
            <Card>
                <span>현민</span>
                <span>1</span>
            </Card>
            <Card>
                <span>현민</span>
                <span>1</span>
            </Card>
        </>

        
    )
}
function Card({children}){
    return(
        <div className='card'>
            {children}
        </div>
    )
}