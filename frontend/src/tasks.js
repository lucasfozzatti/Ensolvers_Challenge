import React from 'react'
import "./css/task.css"
import { useState } from 'react'
import Axios from 'axios';


const Task = (props) => {

    const [edit, setedit] = useState(false); 
    const [task, settask] = useState('')
    
    const deletetask = (task_id) => {
        Axios.delete('delete_tasks/'+ task_id,
        
        )
        window.location.href = "/task/" + task_id;
    }
    const updateTask = (id) => {
        setedit(false)
        window.location.href = "/task/" + id;
        Axios.put('update_task/',{
            description:task,
            task_id:id

        })
    }
    const updateCheckbox = (done,id) => {
        let check = 0
        if (done === 0){
            check = 1
        }
        Axios.put('update_checkbox',{
            task_id:id,
            done: check
        })
    }

   
    return (
        <div className="task-container">
            <div className='task-box'>
                <input className="check" defaultChecked={props.done} type="checkbox"
                onChange={(e)=>{updateCheckbox(props.done, props.id);console.log(e.target.value)}}></input>
                 {edit ? (
                    <div className="container-edit">
                        <input className="input-edit"
                        onChange={(e)=>{
                            settask(e.target.value);
                        }}></input>
                        <div className="buttons-edit-container">
                        <button onClick={()=>setedit(false)} className="button-cancel-edit">X</button>
                        <img onClick={()=>{updateTask(props.id)}} className="image-save-edit" alt="ok" src="../img/ok.png"/>
                        </div>
                    </div>
                    
                ) : (
                    <h1 className='description'>{props.description}</h1>
                )}   
               
            </div>
            <div className="buttons-box">
                <button onClick={()=>setedit(true)} className="button-edit">Edit</button>
            
                <button onClick={()=>deletetask(props.id)} className="button-delete">delete</button>
            </div>
           
        </div>
    )
}

export default Task;