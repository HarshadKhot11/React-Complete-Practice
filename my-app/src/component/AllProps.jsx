export function AllProps({name,age,isAdmin,hobies,OnClick}){

    return<>
    <p>My name is {name}</p>
    <p>my age is {age}</p>
    <p>is i am admin {isAdmin}</p>

    <ol>
        {
            hobies.map((v,i)=>(
                <li key={i}>{v}</li>
            ))
        }
    </ol>


    <button onClick={OnClick}>Submit</button>
    </>

}