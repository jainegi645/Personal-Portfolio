import React,{Component} from 'react';
import {Layout,Header,Content,Drawer,Navigation,Title} from 'react-mdl';
//import {Link,Switch,Route} from 'react-router-dom';
import {Link,animateScroll as scroll} from "react-scroll";
import './App.css';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import Icons from './components/icons';
import Home from "./components/Home";
import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects"
import Getintouch from './components/Getintouch';



function App() {
  return (
  <div className='App'>
  <div>
  <Navbar className="bg"   expand="lg" >
  <Navbar.Brand href="#home"> </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="m-auto"> {/* m-auto aligned nav in center*/} 
    
    <Link
    activeClass="active"
    to="Home__id"
    spy={true}
    smooth={true}
    offset={0}
    duration={500}
>Home</Link>

<Link
activeClass="active"
to="Aboutme__id"
spy={true}
smooth={true}
offset={0}
duration={500}
>Aboutme</Link>

<Link
activeClass="active"
to="Projects__id"
spy={true}
smooth={true}
offset={0}
duration={500}
>MyWork</Link>

<Link
activeClass="active"
to="Getintouch__id"
spy={true}
smooth={true}
offset={0}
duration={500}
>GetInTouch</Link>
   
{/* use This for Routeing,but you cant get smooth scrooling effect using this also "as={Link} for Linking to url address" 
      <Nav.Link as={Link} to="/">Home</Nav.Link>
    <Nav.Link as={Link} to="/Aboutme">Aboutme</Nav.Link>
    <Nav.Link as={Link} to="/MyWork">My Work</Nav.Link>
  <Nav.Link as={Link} to="/Getintouch">Get in touch</Nav.Link>*/}
     
    </Nav>
    <Icons/>
  </Navbar.Collapse>
  </Navbar> 
  </div>

{/* 
  <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Aboutme' component={Aboutme}/>
            <Route exact path='/MyWork' component={Projects} />
            <Route exact path='/Getintouch' component={Getintouch} />
            <Route render={function () {
              return <p>Not found</p>
            }} />
          </Switch>
        </div>
        */}
        <Home/>
        <Aboutme/>
        <Projects/>
        <Getintouch/>
</div>

);
}

export default App;
  
  
  
 
