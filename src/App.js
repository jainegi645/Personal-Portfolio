import React,{Component} from 'react';
import {Layout,Header,Content,Drawer,Navigation,Title} from 'react-mdl';
import {Switch,Route,Link} from 'react-router-dom';
import './App.css';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import Icons from './components/icons';
import Home from "./components/Home";
import Resume from "./components/Resume";
import Projects from "./components/Projects"
import Getintouch from './components/Getintouch';



function App() {
  return (
  <div className='App'>
  <div>
  <Navbar className="bg" expand="lg" >
  <Navbar.Brand href="#home"> </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="m-auto"> {/* m-auto aligned nav in center*/} 
      <Nav.Link as={Link} to="/" >Home</Nav.Link>
      <Nav.Link as={Link} to="/Resume" >Resume</Nav.Link>
      <Nav.Link as={Link} to="/MyWork">My Work</Nav.Link>
      <Nav.Link as={Link} to="/Getintouch">Get in touch</Nav.Link>
     
    </Nav>
    <Icons />
  </Navbar.Collapse>
  </Navbar> 
  </div>


  <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Resume' component={Resume} />
            <Route exact path='/MyWork' component={Projects} />
            <Route exact path='/Getintouch' component={Getintouch} />
            <Route render={function () {
              return <p>Not found</p>
            }} />
          </Switch>
        </div>
</div>

);
}

export default App;
  
  
  
 
