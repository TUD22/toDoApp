import React from "react";
import { useState } from "react";
import './Form.css'

const Form = ({ name, description }) => {

    const sendNazwa = (event) => {
        name(event.target.value)

    }
    const sendOpis = (event) => {
        description(event.target.value)
    }

    return (
        <div className="AddToDo">
            <h2>Nazwij nowe zadanie</h2>
            <label>Nazwa: </label><input type="text" onChange={sendNazwa} id="1" /><br />
            <label>Opis: </label><input type="text" onChange={sendOpis} id="2" /><br />
        </div>

    );
}

export default Form