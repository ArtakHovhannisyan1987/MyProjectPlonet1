import React, { useState } from "react";
import "./ToDoForm.css"

export default function ToDoForm({addTask}){
    const [userInput, setUserInput] = useState('')

    const handleChange = (e)=>{
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }
    const handleKeyPress = (e)=>{
        if(e.key === "Enter"){
            handleSubmit(e)
        }
    }

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <div className="form-div">
                    <input className="to-input"
                    placeholder="write meaning"
                    type="text"
                    value={userInput}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress} />
                    <button className="to-but">Save</button>
                </div>
            </form>
        </div>
    )
}