import {useState,useEffect} from 'react';

function DigitalClock(){

    let [time,setTime] = useState("");

    useEffect(()=>{
        let ShowTime = setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1000);

        return ()=>clearInterval(ShowTime);
    },[time])
   
    return(<>
    
        <h1>The Current Time Is</h1>
        
        <p>{time}</p>

    </>)
}
export default DigitalClock