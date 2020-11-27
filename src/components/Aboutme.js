import React from 'react';
import './aboutme.css';
import avatar from './avatar.png';

function Aboutme() {
    return (
        <div className="about__bg" id="Aboutme__id">

        <div className="heading">
        <h1>About Me</h1>   
        </div>

        <div className="">
        <img className="avatar" src={require('./avatar.png')} alt="avatar-img"/>
        </div>

        </div>
    )
}

export default Aboutme;
