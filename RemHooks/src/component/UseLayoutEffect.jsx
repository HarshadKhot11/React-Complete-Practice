import { useLayoutEffect, useState } from "react";

export function UseLayoutEffect(){

    let [state,setState] = useState(0);
    useLayoutEffect(()=>{
        console.log("use layout effect called",state);
    },[state]);

    return<>
    <p>{state}</p>
    <button onClick={()=>{setState(state+1)}}> click </button><br /><br />
    </>

}