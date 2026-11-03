import {useRef} from 'react';

export function UseRef(){

    let myRef = useRef(0);

    function First(){
            myRef.current = myRef.current+1;
            console.log(myRef.current);
        
    }

    return<>
        <p> value :{myRef.current}</p>
        
        <button onClick={First}>Click me</button><br /><br />
        
    </>
}