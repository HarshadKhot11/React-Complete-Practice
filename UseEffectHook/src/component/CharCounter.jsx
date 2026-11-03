import {useState,useEffect} from 'react';

export function CharCounter(){

    let [char,setChar] = useState("");
    let [count,setCount] = useState(0);

   useEffect(()=>{
    setCount(char.length);
   })

    return(<>
    
    <input type="text"
    placeholder='Enter text'
    value = {char}
    onChange={(e)=>{setChar(e.target.value)}} />

    <h2>{char}</h2>

    <h1>Character Count:{count}</h1>

    </>)
}