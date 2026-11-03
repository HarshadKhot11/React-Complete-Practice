import {useState} from 'react';

export function ToDo(){
    let [task, setTask] = useState("");
    let [todo, setTodo] = useState([]);

    return(
        <>
        <input type="text"
        placeholder='Enter Task'
        value={task} 
        onChange={(e)=>{setTask(e.target.value.trim())}}
        />

        <button onClick={()=>{setTodo([...todo,task]);setTask(" ");}}>
            Add
        </button>

        <ol>
            {todo.map((v,i)=>{
                return <li key={i}>{v}</li>
            })}
        </ol>
        </>
    )
}