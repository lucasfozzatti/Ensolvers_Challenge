import React from 'react';
import {useState, useEffect} from "react";
import {useUsuario} from './context/usuario-context';
import Menu from './Menu';
import Axios from "axios";
import Task from "./tasks";



function TaskPanel(props){
    const {folderid,setfolderid} = useUsuario();
    const [datatask, setdatatask] = useState([])
    const [newtask, setnewtask] = useState('')
    
  

    useEffect( () => {

        const task = () => {
          
            setfolderid(localStorage.getItem('folder_id'))
            Axios.get('tasks/'+ folderid,{
            }).then((response) => {
                setdatatask(response.data.result)  
            
            
          });
        }
        
        task()
      },[folderid]);  

    const addnewtask = () => {
    
        Axios.post('/save_tasks',{
          description : newtask,
          folder_id : folderid
        })
        setdatatask([
          ...datatask,
          {description:newtask, folder_id: folderid}
    
        ]); 
      }
    
      return(
        <div>    
            <div>
              <Menu/>
            </div>
            <div className="box-movement">
  
                  <p className="text-newfolder">Create a new task</p>
                  <div className="addfolder-container">
                    <input className="newfolder"type="text" value={newtask} placeholder="NEW TASK"
                    onChange={(e)=>{
                      setnewtask(e.target.value);
                    }}
                    >
                    </input>
                    
                    <button className="button-folder" 
                    onClick={()=> {addnewtask();setnewtask(""); }}
                    >Add</button>
                  </div>
                  <div className="list-movement">
                  
                    {datatask.map((task)=>{
                       
                        return (
                            <Task  key={task.task_id} id={task.task_id} done={task.done} description={task.description}/>
                        )
                    })}
                  </div>
            </div>
        </div>              
      );
  }
  
  
  export default  TaskPanel;