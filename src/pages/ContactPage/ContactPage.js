import React, { useState } from 'react';
import ToDo from '../../components/ToDo/ToDo';
import ToDoForm from '../../components/ToDoForm/ToDoForm';
import "./ContactPage.css";
import Planet_A from '../../img/planet-1.png';
import Planet_B from '../../img/planet-2.png';
import Planet_C from '../../img/planet-3.png';
import Sun from '../../img/sun.png';


const Contact = () =>{

    const [todos, setTodos] = useState([]);

    const addTask = (userInput) => {
        if(userInput){
            const newItem = {
                id: Math.random().toString(30).substr(2,9),
                task:userInput
            };
            setTodos([...todos,newItem])
            console.log(newItem);
        }
    };

    const removeTask = (id)=>{
        setTodos([...todos.filter((todo) => todo.id !== id)]);
    }
    const handleToggle = (id) =>{
        setTodos([
            ...todos.map((todo)=>
            todo.id === id ? {...todo, complete: !todo.complete} : {...todo})
        ])
    }

    return (
    <div className='contact-bg'>
        <div className='contact-input'>
            <div>
                <h1 className='contact-h1'>Cank:{todos.length}</h1>
            </div>
                <ToDoForm addTask={addTask} />
                {todos.map((todo) =>{
             return(
                <ToDo 
                todo={todo}
                key={todo.id}
                removeTask={removeTask}
                togglrTask={handleToggle}/>
            )
            })}
            </div>
        <div className='anime'>
            <div className='sun'><img className='sun' src={Sun}/></div>
            <div className='planet-1'><img className='spin-img-1' src={Planet_A}/></div>   
            <div className='planet-2'><img className='spin-img-2' src={Planet_B}/></div>
            <div className='planet-3'><img className='spin-img-3' src={Planet_C}/></div>
        </div> 
    </div>
    )
}
export default Contact;