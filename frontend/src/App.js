import React from 'react';
import './css/App.css';
import Menu from './Menu';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Footer from './footer';
import Log from './User_log'
import Budget from './FolderPanel';
import {UsuarioProvider} from './context/usuario-context';
import FolderPanel from './FolderPanel';
import TaskPanel from './TaskPanel';


export default function App(){
  
  
    return (
      <UsuarioProvider>
      <div>
        
        <Router >
           <Switch>
             
            <Route path="/" exact component={Log}/>
            <Route path="/folders/:id" exact component={FolderPanel}/>
            <Route path="/task/:id" exact component={TaskPanel}/>

            </Switch>
            <Footer/>
        </Router>
        </div>
        </UsuarioProvider>
    )
  
}


