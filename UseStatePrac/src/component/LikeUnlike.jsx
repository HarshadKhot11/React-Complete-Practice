import {useState} from 'react';

 export function LikeUnlike(){

    let [like, setLike] = useState(false);

    return(<>
    
    <button onClick={()=> setLike(!like)}>
        {like ? "Like":"Unlike"}
    </button><br /><br />

        
    {like && <i className="bi bi-heart-fill fs-1"></i>}
    {!like && <i className="bi bi-heartbreak-fill fs-1"></i>}

    </>)
 }