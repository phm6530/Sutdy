import React, { useState } from 'react';

export default function Counter({Total,onClick}) {
    const [count, setcount] = useState(0);
    const plus = () => {
        setcount(prev => prev + 1);
        onClick();
    } 
    return (
        <div className='counter'>
            <span>{count}</span>  <span className='Total_span'>/{Total}</span>
            <div className="buttonArea">
                <button onClick={plus}>Add +</button>
            </div>
        </div>
    );
}

