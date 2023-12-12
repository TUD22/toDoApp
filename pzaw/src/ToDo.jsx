import React from "react";
import { useState } from "react";
import Form from "./Form.jsx";


const tasks=[
    {id: 1, text:'Zadanie1', completed: false},
    {id: 2, text:'Zadanie2', completed: true},
    {id: 3, text:'Zadanie3', completed: false}
]


const ToDo =()=> {

    const [todos, setToDos] = useState(tasks)

    const removeTaskHandler = (tasksId) =>{
        setToDos(
            todos.filter(task => {
                return task.id!==tasksId;
            })
        )
    }

    const newTaskHandler =()=>{
        const newTask ={
            id:Math.random().toString(36).substring(7),
            text: 'nowe zadanie',  
            completed:false      
        }

        setToDos([...todos, newTask])
    }

    return(
        <div>
            <h1>
                Jestem ToDo
                <ul>
                    {
                        todos.map( task => (
                            <li style={{color:"023047", fontSize:'19px', marginBottom:'10px'}} key={task.id}>{task.text}
                            
                            <button onClick={()=>removeTaskHandler(task.id)}>usuń zadanie{task.id}</button>
                            </li>
                        ))
                        
                    }
                    <button onClick={()=>newTaskHandler()}>dodaj zadanie</button>
                </ul>
                <Form></Form>
            </h1>
        </div>
    );
}

export default ToDo