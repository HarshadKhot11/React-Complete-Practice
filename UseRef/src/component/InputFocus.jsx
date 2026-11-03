import {useRef} from 'react';

export function InputFocus(){

    const inRef = useRef(null);

    function Input(){
        inRef.current.focus();
    }

    return<>
     <input type="text" ref={inRef}/>
     
     <button onClick={Input}>Focus</button><br /><br />

    </>
}