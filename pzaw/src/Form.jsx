import React from "react";
import './Form.css'

const Form =()=> {

    const newTaskHandler =()=>{
             const newTask={
            
             }
        }

        let data= new Date()
    

    return(
        <div>
            dodaj nowe zadanie
            <div className="AddToDo">
                <label>nazwa</label><input type="text"/><br/>
                <label>opis</label><input type="text"/><br/>              
                <button onClick={()=>newTaskHandler()}>dodaj zadanie</button>
                
                
                
            </div>
        </div>
    );
}

export default Form