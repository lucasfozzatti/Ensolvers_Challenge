import React from 'react';
import './css/List.css';
import {useState, useEffect} from "react";
import Axios  from "axios";
import { useHistory } from "react-router-dom";
import Folder from './folders';
import './css/List_Movement.css';
import Menu from './Menu';
import {useUsuario} from './context/usuario-context';

// const userAuthenticated = () =>{
  
  
//   Axios.get('isUserAuth',{
//     headers: {
//       "Authorization" : localStorage.getItem('token')
//     }

//   }).then((response)=>{
     
//    console.log("hola",response.data);
//  })
// }

  
function FolderPanel(props){
  console.log("budget")
  const {id,folderscount,setid} = useUsuario();
  const [datafolder, setdatafolder] = useState([])
  const [newfolder, setnewfolder] = useState('')
  
  let history = useHistory();
 
    
  

  useEffect( () => {

    const folder = () => {
      
      setid(localStorage.getItem('user'))
      Axios.get('folders/'+ id,{
      }).then((response) => {
        console.log(response.data.result) 
        setdatafolder(response.data.result)
        
      });
    }
    
    folder()
  },[id, folderscount]);  


  const addnewFolder = () => {
    
    Axios.post('save_folder',{
      name : newfolder,
      user_id : id
    })
    setdatafolder([
      ...datafolder,
      {name:newfolder, user_id: id}

    ]); 
  }

    return(
      <div>    
          <div>
            <Menu/>
          </div>
          <div className="box-movement">

                <p className="text-newfolder">Create a new folder</p>
                <div className="addfolder-container">
                  <input className="newfolder"type="text" value={newfolder} placeholder="NEW FOLDER"
                  onChange={(e)=>{
                    setnewfolder(e.target.value);
                  }}
                  >
                  </input>
                  
                  <button className="button-folder" 
                  onClick={()=> {setnewfolder("");addnewFolder() }}
                  >Add</button>
                </div>
                <div className="list-movement">
                
                  {datafolder.map((movement)=>{
                    
                    return (
                      
                      <Folder  key={movement.folder_id} id={movement.folder_id} name={movement.name}/>
                    )
                  })}
                </div>
          </div>
      </div>              
    );
}


export default  FolderPanel;