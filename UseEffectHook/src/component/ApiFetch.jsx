import {useState} from 'react';
import { useEffect } from 'react';

export function ApiFetch(){

    let [info, setInfo] = useState([]);

    useEffect(()=>{

        let data = async ()=>{
            let api = await fetch(`https://jsonplaceholder.typicode.com/users`);
            let jsondata = await api.json();
            setInfo(jsondata);
        };

        data();
    })
return(
    <div>
        <table className="table">
            <thead>
                 <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">email</th>
                    <th scope="col">Company</th>
                </tr>
            </thead>

            <tbody>
               
               
                    {info.map((v,i)=>(

                         <tr>

                         <td key = {i}>{v.id}</td>
                         <td key = {i}>{v.name}</td>
                         <td key = {i}>{v.email}</td>
                         <td key = {i}>{v.company.name}</td>

                         </tr>
                    )

                         
                    )}
                   
                

            </tbody>
        </table>
    </div>
)

}