import {useState} from 'react';

export function Color(){
    let [color,setColor] = useState("white");

    return(
        
        <div
        style={{backgroundColor:color, minHeight:70, padding:120 }}>

            <div className='d-flex gap-2'>

            <button onClick={()=>setColor("red")}>
                Red
            </button>

            <button onClick={()=>setColor("green")}>
                Green
            </button>

            <button onClick={()=>setColor("orange")}>
                Orange
            </button>

            <button onClick={()=>setColor("skyblue")}>
                SkyBlue
            </button>

            </div>

        </div>

    )
} 