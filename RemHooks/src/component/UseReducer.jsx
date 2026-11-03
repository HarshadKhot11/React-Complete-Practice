import {useReducer} from 'react';

function Counter(count,action){

    switch(action.type){

        case 'increament':
            return {count: count.count +1};

        case 'decreamnet':
            return {count: count.count - 1};

            case 'set':
            return {count: count.count + action.payload};

          case 'reset':
            return {count: count=0};  
    }
}

export function UseReducer(){

    let [State,actFunc] = useReducer(Counter , {count:0})

    return(<>
        <p>{State.count}</p>
        <button onClick={()=>actFunc({type:"increament"})}>+</button>
        <button onClick={()=>actFunc({type:"decreamnet"})}>-</button>
         <button onClick={()=>actFunc({type:"set", payload:10})}>+ 10</button>
          <button onClick={()=>actFunc({type:"reset"})}>Reset</button>
        
    </>)
}