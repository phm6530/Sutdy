import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

export default function AppCounter() {
    const [count, setcount] = useState(0);
    const handler = () => {
        setcount(prev => prev + 1);
    }
    return (
        <div className="container">
            <div className="totalCounter">
                <p>총합 :</p> {count} {count >= 10 ? '😉':'😎'};
            </div>
            <Counter Total={count} onClick={handler}/>
            <Counter Total={count} onClick={handler}/>
        </div>
            

    );
}


