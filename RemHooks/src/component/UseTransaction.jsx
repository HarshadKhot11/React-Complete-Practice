import {useTransition,useState} from 'react';

export function UseTransition(){

    let [state,setState] = useState(0);
    let [isPending, startTransition] = useTransition();
    let [isLoading,setLoading] = useState(false);

    
    function Count(){
        setLoading(true);

        setTimeout(()=>{

            startTransition(()=>{

                setState(state+1);
            })

            setLoading(false);

        },2000);

        
    }
    
    return(<>
        <button onClick={Count}>increase count</button>

       {isLoading || isPending?
        <p>please Wait</p>
        :<p>Count:{state}</p>}
</>)

}