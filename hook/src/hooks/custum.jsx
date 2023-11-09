import {useCustum} from './custumHook'
import './custum.css'
// import { handler } from '../components/handler';

export default function App(){
    const [value , handleChange  , handlerAlert] = useCustum('');
    
    return(
        <>
            <h2>hi</h2>
            <input type="text" value={value} onChange={handleChange}/>
            <button onClick={handlerAlert}>확인</button>
            
        </>
    )
}