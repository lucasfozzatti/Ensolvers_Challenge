import React from 'react'
import Axios  from "axios";
import { useHistory } from "react-router-dom";
import './css/folder.css'
import {useUsuario} from './context/usuario-context';




const Folder = (props) => {
    let history = useHistory();
    const {folderscount,setfolderscount,setfolderid, id} = useUsuario();
    
    const deleteFolder = (folder_id) => {
        
        Axios.delete('delete_folder/'+ folder_id,
        )
        setfolderscount(folderscount+1)
        window.location.href = "/folders/" + id;
    }
    const updatefolderid = () => {
        setfolderid(props.id)
        history.push("/task/"+props.id);
        localStorage.setItem("folder_id", JSON.stringify(props.id))
        
    }
   

    return (
        
        <div className='movement'>
            
            <h1 onClick={updatefolderid} className='name'>{props.name}</h1>
            <img onClick={()=>deleteFolder(props.id)} className="trash-img" src="../img/trash.png" alt="delete-img" />
        
        </div>          
        
        
    )
}

export default Folder;
