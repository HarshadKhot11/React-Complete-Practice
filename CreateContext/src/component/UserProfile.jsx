import {useState,useEffect,createContext,useContext} from 'react';

let nameContext = createContext();
let emailContext = createContext();
let roleContext = createContext();

export function UserProfile(){

    let [name,setName] = useState("Harshad");
    let [email,setEmail] = useState("harshadkhot11@gmail.com");
    let [role,setRole] = useState("Developer");

    return <>
    
     <nameContext.Provider value={{ name, setName }}>
            <emailContext.Provider value={{ email, setEmail }}>
                <roleContext.Provider value={{ role, setRole }}>

                    <NaveBar />
                    <Profile />

                </roleContext.Provider>
            </emailContext.Provider>
        </nameContext.Provider>
    
    </>
};

function NaveBar(){
   
    let {name,setName} = useContext(nameContext);
    let {email,setEmail} = useContext(emailContext);
    let {role,setRole} = useContext(roleContext);

    return<>
    <p>NavBar</p>
    <p>Name of Employee : {name}</p>
    <p>Email : {email}</p>
    <p>Role : {role}</p>
    </>

};

function Profile(){

    
    let {name,setName} = useContext(nameContext);
    let {email,setEmail} = useContext(emailContext);
    let {role,setRole} = useContext(roleContext);

    return<>
    <p>Profile</p>
    <p>Name of Employee : {name}</p>
    <p>Email : {email}</p>
    <p>Role : {role}</p>


    <button onClick={()=>{
        {setRole (role === "Developer"? "Admin":"Developer")}
    }}>
        Change Role
    </button>
    </>
    

}