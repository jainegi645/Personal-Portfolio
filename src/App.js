import React, { Component } from 'react';
//import { Layout, Header, Content, Drawer, Navigation, Title } from 'react-mdl';
import { Link, Switch, Route } from 'react-router-dom';
//import {Link,animateScroll as scroll} from "react-scroll";
import './App.css';
import Home from "./components/Home";
import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects"
import Getintouch from './components/Getintouch';
import Navbar from "./components/Navbar";



function App() {

  return (
    <div className='App'>
    <Navbar/>

      {/*<div>
  
  <Navbar className="bg"  expand="lg" >
  <Navbar.Brand href="#home"> </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="m-auto"> {/* m-auto aligned nav in center*/}

      {/* 

    use this for smooth scroll effect while rendering all components in single app 
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
>GetInTouch</Link> // put a comment ending here[ smooth scroll effect ]


<div>
<nav className="Navbar">
<ul>
<li>Home</li>
<li>AboutMe</li>
<li>MyWork</li>
<li>GetInTouch</li>
<Icons/>
</ul>

</nav>
</div>

*/}

      {/*   <Nav.Link as={Link} to="/">Home</Nav.Link>
    <Nav.Link as={Link} to="/Aboutme">Aboutme</Nav.Link>
    <Nav.Link as={Link} to="/MyWork">My Work</Nav.Link>
  <Nav.Link as={Link} to="/Getintouch">Get in touch</Nav.Link>
     
    </Nav>
   
  </Navbar.Collapse>
   <Icons/>
  </Navbar> 

  </div>
 */}

    </div>

  );
}

export default App;




