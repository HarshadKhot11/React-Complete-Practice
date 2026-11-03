import {useRef} from 'react';

export function SelectText(){

    const inRef = useRef(null);

    function Input(){
        inRef.current.select();
    }

    function ClearText(){
        inRef.current.value = "";
        inRef.current.focus();
    }

    return<>
     <input type="text" ref={inRef}/>
    
     <button onClick={Input}>Focus</button><br />
      <button onClick={ClearText}>Clear</button> <br />
    </>
}