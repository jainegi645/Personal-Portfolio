import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';



function Icons() {
    return (
        <div className="icons__style">
        <FacebookIcon style={{ fontSize: 40}}></FacebookIcon>
        <InstagramIcon style={{ fontSize: 40}} ></InstagramIcon>
        <TwitterIcon style={{ fontSize: 40}}></TwitterIcon>
       
        </div>
    )
}

export default Icons;
