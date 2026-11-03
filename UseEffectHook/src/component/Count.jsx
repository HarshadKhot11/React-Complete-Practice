import {useState} from 'react';
import {useEffect} from 'react';

export function Count(){
    let [a,setA] = useState(0);
    let [b,setB] = useState(0);
    let [c,setC] = useState(0);

    useEffect(()=>{
        console.log("Hello");
    },[a])


    return(<>
    
    <button onClick={()=>{setA(a+1)}}> runA </button>
    <button onClick={()=>{setB(b+1)}}> runB </button>
    <button onClick={()=>{setC(c+1)}}> runC </button>

<div>
    <p>Value of A = {a}</p>
    <p>Value of B = {b}</p>
    <p>Value of C = {c}</p>
</div>
    
    </>)
}