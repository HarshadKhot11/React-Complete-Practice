import {useActionState} from 'react';

function LoginState(previousState,formData){

    let user = formData.get("username");
    let pass = formData.get("password");

    if(!user || !pass){
        return "Username And Password Is Requird"
    }
    else if(user === 'Harshad' && pass === 'Harshad@11'){
         return "Wellcome" +' '+ user;
    }
    else{
        return "Invalid username and passwod";
    }
   

}

export function UseActionState(){

    let [message,formAction,isPending] = useActionState(LoginState,"");

    return(<>
    
    <form action={formAction}>

        <input type="text"
        name='username'
        placeholder='Username' />

        <input type="password"
         name="password"
         placeholder='Password' />

         <button type="submit"
            disabled={isPending}>
                {isPending? "Cheeking..":"Login"}
            </button>

            <p>{message}</p>

    </form>
    
    </>)
}