import React from 'react';
import './Socialhandles.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import WebIcon from '@material-ui/icons/Web';



function Socialhandles() {
    return (
        <div className="socialicons">
        <GitHubIcon>GitHub</GitHubIcon>
        <LinkedInIcon>LinkedIn</LinkedInIcon>
        <EmailIcon>E-mail</EmailIcon>
        <WebIcon>Website</WebIcon>  
        </div>
    )
}

export default Socialhandles;
