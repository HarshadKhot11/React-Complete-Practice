import {useState,createContext,useContext} from 'react';

let cartContext = createContext();

export function ShoppingCart(){

    let [count,setCount] = useState(0);

    return<>
    
    <cartContext.Provider value={{count,setCount}}>
        <AddToCart />
    </cartContext.Provider>
    
    </>
};

function AddToCart(){

    let {count,setCount} = useContext(cartContext);

    return<>
    <label htmlFor="Mobile">Mobile</label>
    <button onClick={()=>{setCount(count+=1)}}>
        Add To Cart
    </button>

    <label htmlFor="Mobile">Charger</label>
    <button onClick={()=>{setCount(count+=1)}}>
        Add To Cart
    </button>

    <label htmlFor="Mobile">Laptop</label>
    <button onClick={()=>{setCount(count+=1)}}>
        Add To Cart
    </button>

    <h2>Count of Products : {count}</h2>
    </>
}