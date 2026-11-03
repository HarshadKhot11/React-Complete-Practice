//Counter app
import {useState} from 'react';

export function UseStateHook(){
    //let [currentValue, setterFunction] = useState("initial value");

    let [count,setCount] = useState(0);

    return(
        
        <>
        
        <input type="text" value={count} />
        <button onClick={()=>setCount(count + 1)}> + </button>
        <button onClick={()=>setCount(count - 1)}> - </button>
        <button onClick={()=>setCount(0)}> Reset </button>

        <p>{count}</p>
        </>
    )
}