import {useState} from 'react';

export function ShowHide(){

    let [isVisible, setIsVisible] = useState(false);
    
    return(
        <>

    <button onClick={()=>setIsVisible(!isVisible)}>
        {isVisible ? "Hide":"Show"}
    </button>
    {isVisible && <p>this is the testing text</p>}
    </>
    )
}
