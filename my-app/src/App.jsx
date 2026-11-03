// let name = "Harshad";
// let age = 24;
// let isAdmin = true;
// let salary = 85000;
// let citys = ["Kolhapur", "Pune","Mumbai", "Goa"];
// let officeDetails = {
//   id : 1,
//   desig : "developer",
//   name : "zensar",
//   position : "Sr",
//   joinDate : '2026-09-27'
// }

// export function Emp(){
//   return <>
//   <p>Employee name is {name}</p>
//   <p>And the running age is {age}</p>
//   <p>salary of employee is {salary}</p>

//   <p>employee leving in citys like</p>
//   <ol>
//     {citys.map((c)=>(
//       <li>{c}</li>
//     ))}
//   </ol>


//   <p> and the office details of {name} is</p>
//   {Object.entries(officeDetails).map(([k, v])=>(
//     <p>{k}:{v}</p>
//   ))}


//   {isAdmin ?
//    <p style={{ backgroundColor: "green"}}>Wellcome Admin</p>
//    :
//    <p style={{ backgroundColor: "red"}}> You Are Not An admin</p>
//   }
//   </>
//  }

//function practice
// 
//   return (
//     <>
//       <CheckAdmin isAdmin={true} />
//    </>
//   )
// }

// function CheckDate({Day}){

//   switch(Day)
//   {
//     case 1: 
//             return <h1>Monday</h1>;

//     case 2: 
//             return <h1>Tuesday</h1>;

//     case 3: 
//            return <h1>Wednesday</h1>;

//     default:
//             return <p>Invalid Day</p>;
//   }
// }

// 

// let fruits = ["apple","banana","orange","mango"];

// export function Check(){
//   return <>
//   <ol>
//     {
//      fruits.map((v,i)=>
//     (
//       <li key={i}>{v}</li>
//     ))


//     }
//   </ol>
//   </>
// }

import {Sum} from './component/Sum.jsx'
import { AllProps } from './component/AllProps.jsx'

export function Check(){

let name="Harshad";
let age = 23;
let isAdmin = true;
let hobies = ["Swemming","Cricket","codding","running","Gym"];
let OnClick = ()=>{console.log("Function running")};

  return<>
    <Sum a={5} b={4}/>
    <AllProps name={name} age={age} isAdmin={isAdmin} hobies={hobies} OnClick={OnClick}/>
  </>
}








