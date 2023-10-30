import React from 'react';

export default function Avartar({ image, name ,isNew}) {
  return (
    <div className='avatar'>
        <img className='photo' src={image} alt='avatar' /><br></br>
        <span>이름 : {name}</span>
        {isNew && <span className='new'>New</span>}
    
    </div>
  );
}
