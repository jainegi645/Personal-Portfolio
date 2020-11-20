import React from 'react';
import './home.css';
import Socialhandles from './Socialhandles';
import Button from '@material-ui/core/Button';


function Home() {
    return (
        <div className="home">


          <div className='sidebar'>
        <Socialhandles/>
        </div>

        

        
          <div className='text'>

       

          <pre>Hello,I am <span style={{color:"yellow"}}>Jai negi</span> <br/>
          I <span style={{color:"yellow"}}> am a</span><br/>Front End  <span style={{color:"yellow"}}>Web Developer.</span></pre> 
          <Button style={{background:'#243B55',color:'white',fontSize:'20px', fontFamily: "'Prata', serif"}} variant="contained" >check out my work</Button>
          </div>
      
         

        </div>
        
    )
}

export default Home;
