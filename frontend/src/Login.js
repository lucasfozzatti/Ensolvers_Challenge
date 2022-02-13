import React from "react"
import { useState} from "react";
import Axios  from "axios";
import Budget from "./FolderPanel"
import './css/User_log.css'
import swal from 'sweetalert';
import { useHistory } from "react-router-dom";
import axios from "axios";
import {useUsuario} from './context/usuario-context';


const notexist =()=>{
  swal({
    title: 'Incorrect username or password',
    icon: 'warning',
    button: 'OK',
  })}
const empty =()=>{
  swal({
    title: 'Enter username and password',
    icon: 'warning',
    button: 'OK',
  })}

export default function Login() {
    const {username,password, id, setUsername, setPassword, setid} = useUsuario();  
    let history = useHistory();
    console.log("Login")
      

      // const [id, setid] = useState(0);
      
    const login = async(e) => {
        e.preventDefault()
        
        if(!username || !password ){
          empty()
        }else{
        console.log("Login")
        await Axios.post('login',{
            username: username,
            password: password,

        }).then((response) => {
          if (!response.data.auth) {
            
            notexist()
          } else {
            localStorage.setItem("token", response.data.token)
            setid(response.data.result)
            localStorage.setItem("user", JSON.stringify(response.data.result))
            history.push("/folders/"+ response.data.result)
          }
        });
    }};
  
   
    return (
      <React.Fragment>
          
          <label htmlFor="email">Username</label>
          <input type="text" className="log-input" placeholder="  Ej: Lucas23423"
          onChange={(e)=>{
            setUsername(e.target.value);
            console.log(e.target.value)
        }}
          />
          <label htmlFor="password">password</label>
          <input type="password" className="log-input" placeholder= "  123456" 
          onChange={(e)=>{
            setPassword(e.target.value);
        }}
          />
          
          <button className="button-log"  onClick={login}>Login</button>
          
        
      </React.Fragment>
  );
    
    
       
}