import {useState,useEffect,createContext,useContext} from 'react';

 let lightContext = createContext();

export function Light(){
    let [light,setLight] = useState("light");

    useEffect(()=>{
    document.body.style.backgroundColor = (light === "light"? "white":"black");
},[light]);

    return<>    

    <lightContext.Provider value={{light,setLight}}>
        <Home />
    </lightContext.Provider>

    </>
};

function Home(){
    return<>
    <h1 style={{color:"orange"}}>This is Home function component</h1>
    <Profile />
    </>
};

function Profile(){

    const {light,setLight} = useContext(lightContext);

    return(
        <div>
            <h2 style={{color:"orange"}}>Current theme : {light}</h2>
            <button onClick={()=>{
                setLight(light === "light"? "dark":"light");
            }}>
                Change Theme
            </button>
        </div>
    );
}

