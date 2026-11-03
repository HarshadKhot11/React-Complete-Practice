import axios from "axios";
import { useEffect, useState } from "react";
import { Placeholder } from "react-bootstrap";
import { toast,Toaster } from "sonner";


  function GetUser(){

    let [userInfo,setUser] = useState('');
    let [data,setData] = useState([]);

    // async function FetchUser(){
    // const User = await axios.get("http://localhost:3000/products");
    // setUser(User.data);
    // };

    //async function PostData(){
        //Get and Post Data
        // const Data = {
        //     "id":"52",
        //     "title":"Redmi Note 8"
        // }

        // await axios.post("http://localhost:3000/products",Data);

        // const getData = await axios.get("http://localhost:3000/products");
        // setUser(getData.data);

   // }

       
        async function FormPost(){
            try{
             //Post with react form

            // await axios.post("http://localhost:3000/products",
            // {
            //     id:"53",
            //     title: userInfo
            // })
            // toast.success("Data saved successfully")
            // setUser('');


            // //Put with react form

        //     await axios.put("http://localhost:3000/products/17",
        //     {
        //         id:"17",
        //         title: userInfo
        //     })
        //     toast.success("Data saved successfully")
        //     setUser('');

        // }
        // catch(error){
        //     toast.error(error.message);
        // }

        const getData = await axios.get("http://localhost:3000/products",
            // {
            // headers:{
            //     Authorization:`bearer${723627}`
            // }
            //}
            {
                params:{
                    _page:1,
                    _per_page:10
                },
            }
        );
         console.log(getData.status);
         setData(getData.data.data);

    } catch(error){
            toast.error(error.message);
        }

        }
    
        async function DeleteItem(){
            try{
           const Del =  await axios.delete("http://localhost:3000/products/4");
            console.log(Del.status);
            toast.success("Deleted");
            }
            catch(error){
                 toast.error(error.message);
            }
        }


    
    return(<>
    <h1>Axios Practice</h1>

    <div>
    <input type="text" value={userInfo} onChange={(e)=>{setUser(e.target.value)}} placeholder="Enter name to update" />
    {/* <button onClick={FormPost}>Update Data</button> */}
    <button onClick={FormPost}>get Data</button>
    
    </div>
        
    <button onClick={DeleteItem}>Delete p1</button>
   
    {data.map((userr)=>(
        <p key={userr.id}>
            {userr.title}
        </p>
    ))}



    <Toaster position="top-center" richColors/>
    </>)
}
export default GetUser