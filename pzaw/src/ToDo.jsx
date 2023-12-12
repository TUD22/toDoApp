import React from "react";
import { useState } from "react";
import Form from "./Form.jsx";
import './ToDo.css'

let data= new Date()
const ustawDate=(data)=>{
    return `${(data.getHours())}:${data.getMinutes()} ${data.getDate()}-${data.getMonth()+1}-${data.getFullYear()}`

}
const tasks=[
    {id: 1, text:'Zadanie1', completed: true, data: ustawDate(data)},
    {id: 2, text:'Zadanie2', completed: true, data: ustawDate(data)},
    {id: 3, text:'Zadanie3', completed: true, data: ustawDate(data)}
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

    const [nazwa, setNazwa]= useState('')
    const [opis, setOpis]= useState('')
    const [licznik, setLicznik] = useState(4)

    const newTaskHandler =()=>{

        let data= new Date()
        const newTask ={
            id: licznik,
            text: nazwa,  
            completed:false,
            data: ustawDate(data)
        }
        setLicznik(licznik+1)
        console.log(licznik)
        setToDos([...todos, newTask])
    }


    return(
        <div>
            <Form name={setNazwa} description={setOpis}/>
            <h1>
            <button className="Add" onClick={()=>newTaskHandler()}>dodaj nowe zadanie</button>
                <ul className="Lista">
                    {
                        todos.map( task => (
                            <li style={{color:"023047", fontSize:'19px', marginBottom:'10px', border: '1px black solid', width: '20vw'}}>
                                <h2>zadanie {task.id}</h2>
                                <h5> {task.opis}</h5>
                                {task.text}<br/>data:{task.data}
                            <br/>
                            <button onClick={()=>removeTaskHandler(task.id)}>usuń zadanie {task.id}</button>
                            </li>
                        ))
                        
                    }
                    
                </ul>
            </h1>
        </div>
    );
}

export default ToDo