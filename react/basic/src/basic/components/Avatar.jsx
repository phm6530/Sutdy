import React from 'react';

export default function Avatar({image, isNew}) {
    return (
        <div>
            <img src={image} alt="react"/>
            {isNew  && <div className='isNew'>New</div>}
        </div>
    );
}

 