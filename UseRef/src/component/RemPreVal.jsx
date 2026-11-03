import {useState,useRef,useEffect} from 'react';

export function RemPreval(){

    let [count,setCount] = useState(0);
    let myRef = useRef(0);

    useEffect(()=>{
        myRef.current = count;
    },[count]);

    return<>
        <p>Before:{myRef.current}</p>
        <p>After:{count}</p>
        <button onClick={()=>setCount(count+1)}>click</button>
    </>
}