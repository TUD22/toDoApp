import React from "react";
import { useState } from "react";
import './Form.css'

const Form =({name, description})=> {

    const [nazwa, setNazwa]= useState('')
    const [opis, setOpis]= useState('')

    const sendNazwa=(event)=>{
        setNazwa(event.target.value)
       name(event.target.value)

    }
    const sendOpis=(event)=>{
        setOpis(event.target.value)
        description(event.target.value)
    }

    

    return(
        <div>
            dodaj nowe zadanie
            <div className="AddToDo">
                <label>nazwa</label><input type="text" onChange={sendNazwa}  id="1"/><br/>
                <label>opis</label><input type="text" onChange={sendOpis}  id="2"/><br/>              
                
                
                
            </div>
        </div>
    );
}

export default Form