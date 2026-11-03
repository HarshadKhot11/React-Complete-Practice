import {useState} from 'react';

export function Copy(){

    let [text,setText] = useState("");

    return(
        <>
        <input type="text" onChange={(e)=>setText(e.target.value)}/>
        <p>{text}</p>
        </>
    )
}