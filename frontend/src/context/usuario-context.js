import React,{ useState, useEffect, useMemo, useHistory} from "react";
import Axios from "axios";

const UsuarioContext = React.createContext();

export function UsuarioProvider(props){
    // let history = useHistory();
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [id, setid] = useState(0);
    const [datafolder, setdatafolder] = useState([])
    const [folderscount, setfolderscount] = useState(0)
    const [folderid, setfolderid] = useState(0)
    
    const value = {username, password, id, datafolder,folderscount, folderid,
       setUsername,setPassword,setid, setdatafolder, setfolderscount, setfolderid}
    

    return <UsuarioContext.Provider value={value} {...props} />

}

export function useUsuario() {
  const context = React.useContext(UsuarioContext);
  if (!context) {
     throw new Error('useUsuario na q ve')
  }
  return context;
}