import {useCallback,useState,memo} from 'react';


const Child = memo(function Xyz({hello}){
    console.log("child function running");

    return<>
    <button onClick={hello}>run child</button>
    </>
});

export function UseCallback(){

    let [count, setCount] = useState(0);


    const Hello = useCallback(()=>{
        console.log("Hello called");
    },[]);


    return<>
    <p>count: {count}</p>
        <button onClick={()=>{setCount(count+1)}} >
            +
        </button><br /><br />
    <Child hello = {Hello} />
        
    </>
}