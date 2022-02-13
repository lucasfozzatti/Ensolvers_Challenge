import React from "react"
import { useState} from "react";
import Axios  from "axios";
import './css/User_log.css'
import swal from 'sweetalert';

export default function Register() {
    
    const alerta=()=>{
        swal({
          title: 'naqeve'
        })}
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    

    const register = (e) => {
        e.preventDefault()
        if(!usernameReg || !passwordReg ){
          alerta()
          console.log("apasaca")
        }else{
        Axios.post('register',{
            username: usernameReg,
            password: passwordReg,

        }).then((response) => {
            console.log("hola",response);
        })
    };
}
    
     
    // Esta completamente al pedo el setLoginStatus ----------------------------------------
    return (
        <React.Fragment>

        <label htmlFor="email">Username</label>
        <input type="text" id="username" className="log-input" placeholder="  Ej:Lucas23423"
        onChange={(e)=>{
            setUsernameReg(e.target.value);
        }}
        />
        <label htmlFor="password">password</label>
        <input type="text" id="password" className="log-input" placeholder= "  123456"  
        onChange={(e)=>{
            setPasswordReg(e.target.value);
        }}
        />
        <button className="button-log" onClick={register}>Register</button>
        
      
        </React.Fragment>
    );

}
