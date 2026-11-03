import {useState} from 'react';

export function NamePrac(){
    let [name,setName] = useState(" ");

    return(
        <>
        
        <input type="text"
                placeholder='Enter Your Name'
                value = {name}
                onChange={(e)=>setName(e.target.value.trim())}
        />
        
        {name.length >= 1 && <h1>Hello {name}</h1>}

        </>
    )
}