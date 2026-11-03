export function UserCard({u}){

    return(
        <ol>
            {
                u.map((v,i)=>(
                    <p key={i}>User = {v.name} Id = {v.id}</p>
                ))
            }
        </ol>
    )
    
}