import React,{useState} from 'react';
import "./navbar.css";
import { Link, Switch, Route } from 'react-router-dom';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import Icons from "./icons";
import Home from "./Home";
import Aboutme from "./Aboutme";
import Projects from "./Projects"
import Getintouch from './Getintouch';

function Navbar() {
    const [open,setOpen] =useState(false);
    
    return(
        <div>
        <nav>
        
        <ul className="nav-links" style={{transform:open ? "translateX(0px)" : ""}}>
       
          <li><Link to="/">Home</Link></li>
          <li><Link to="/AboutMe">AboutMe</Link></li>
          <li><Link to="/MyWork">MyWork</Link></li>
          <li><Link to="/GetInTouch">GetInTouch</Link></li>
        </ul>
        <div className="icons__style"><Icons/></div>
        <MenuOutlinedIcon  onClick={() => setOpen(!open)} className="burger"></MenuOutlinedIcon>
      </nav>

      <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/AboutMe' component={Aboutme} />
        <Route exact path='/MyWork' component={Projects} />
        <Route exact path='/GetInTouch' component={Getintouch} />
        <Route render={function () {
          return <p>Not found</p>
        }} />
      </Switch>
    </div>
</div>
    );
}
export default Navbar;