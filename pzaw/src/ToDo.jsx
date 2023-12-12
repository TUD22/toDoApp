import React from "react";
import { useState } from "react";
import Form from "./Form.jsx";
import './ToDo.css'

let data = new Date()
const ustawDate = (data) => {
    return <p>{(data.getHours())}:{data.getMinutes()}<br />{data.getDate()}-{data.getMonth() + 1}-{data.getFullYear()}</p>

}
const tasks = [
    { id: 1, text: 'Zadanie 1', completed: true, data: ustawDate(data), opis: 'To jest zadanie 1.' },
    { id: 2, text: 'Zadanie 2', completed: true, data: ustawDate(data), opis: 'To jest zadanie 2.' },
    { id: 3, text: 'Zadanie 3', completed: true, data: ustawDate(data), opis: 'To jest zadanie 3.' }
]


const ToDo = () => {

    const [todos, setToDos] = useState(tasks)

    const removeTaskHandler = (tasksId) => {
        setToDos(
            todos.filter(task => {
                return task.id !== tasksId;
            })
        )
    }

    const [nazwa, setNazwa] = useState('')
    const [opis, setOpis] = useState('')
    const [licznik, setLicznik] = useState(4)

    const newTaskHandler = () => {

        let data = new Date()
        const newTask = {
            id: licznik,
            text: nazwa,
            completed: false,
            opis: opis,
            data: ustawDate(data)
        }
        setLicznik(licznik + 1)
        console.log(licznik)
        setToDos([...todos, newTask])
    }


    return (
        <div>
            <div className="Header">
                <Form name={setNazwa} description={setOpis} />
                <button className="Add" onClick={() => newTaskHandler()}>dodaj nowe zadanie</button>
            </div>
            <ul className="Lista">
                {
                    todos.map(task => (
                        <li>
                            <h2>Zadanie {task.id}</h2>
                            <h3>{task.text}</h3>
                            <h5> {task.opis}</h5>
                            <p className="Data">{task.data}</p>
                            <br />
                            <button onClick={() => removeTaskHandler(task.id)}>usuń zadanie {task.id}</button>
                        </li>
                    ))

                }

            </ul>
        </div>
    );
}

export default ToDo