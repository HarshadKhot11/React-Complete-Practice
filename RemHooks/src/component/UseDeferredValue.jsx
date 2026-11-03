 import { useDeferredValue,useState } from "react";

// export function UseDeferredValue(){

//     let [text,setText] = useState('');
//     let defferdValue = useDeferredValue(text);

//     return(<>
//         <input type="text"
//         placeholder="typing.." 
//         value={text}
//         onChange={(e)=>setText(e.target.value)}/>

//         <p>{text}</p>
//         <p>{defferdValue}</p>

//     </>)
// }


export function UseDeferredValue(){

    let [text,setText] = useState('');
    let defferdValue = useDeferredValue(text);

    let list = [];
  
    for(let i=1; i<=20;i++){
        list.push('item'+i);
    }
    

    let storage = list.filter(item => 
        item.toLocaleLowerCase().includes(defferdValue.toLocaleLowerCase())
    );

    if(text === " "){
        Values.hide();
    }
    return(<>
        <input type="text" 
        value={text}
        placeholder="typing.."
        onChange={(e)=>{setText(e.target.value)}}
        />

        <p>{text}</p>
        
        {text.trim()!=='' && storage.map((item)=>(          //short circuit
            <li key={item}>{item}</li>      
        ))}
        

    </>)
}