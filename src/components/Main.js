import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom';
import Home from "./Home";
import Resume from "./Resume";
import Projects from "./Projects";
import Getintouch from "./Getintouch";

const Main = () => (
 
       <Switch>
       <Route exact path='/' component={Home}/>
       <Route path='/Resume' component={Resume}/>
       <Route path='/Projects' component={Projects}/>
       <Route path='/Getintouch' component={Getintouch}/>
    <Redirect to='/'/> {/*Renders home if path doesnt matches */}
       </Switch>
)

export default Main;
