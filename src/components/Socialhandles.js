import React from 'react';
import './Socialhandles.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import WebIcon from '@material-ui/icons/Web';



function Socialhandles() {
    return (
        <div className="socialicons">
        <GitHubIcon style={{ fontSize: 35}}>GitHub</GitHubIcon>
        <LinkedInIcon style={{ fontSize: 35}} >LinkedIn</LinkedInIcon>
        <EmailIcon style={{ fontSize: 35}}>E-mail</EmailIcon>
        <WebIcon style={{ fontSize: 35}}>Website</WebIcon>  
        </div>
    )
}

export default Socialhandles;
