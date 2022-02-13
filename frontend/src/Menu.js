import React from 'react';
import './css/Menu.css';
import { useHistory } from "react-router-dom";

export default function Menu(){
    let history = useHistory();
    const Logout = () =>{
        localStorage.removeItem('token')
        history.push("/register")
      }
    return(
        <div className="container">
            <div className="subcontainer">
                <div className= "back-tittle">
                    <h1 className = "tittle">

                    TASKS

                    </h1>
                    
                </div>
                </div>
                    
                <div className='Add'>
                    <button onClick={Logout} className ="logout">Logout</button>
                    
                </div>
        </div>
    );
}


