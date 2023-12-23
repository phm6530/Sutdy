import React , { useState } from 'react';
import Timer from './component/Timer.js';

function App() {
  const [showTimer , setShowtimer] = useState(false);
  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={()=>setShowtimer(!showTimer)}>toggle timer</button>
    </div>
  );
}

export default App;
