import React from 'react';
import './home.css';
import Socialhandles from './Socialhandles';
import Button from '@material-ui/core/Button';

function Home() {
  return (
    <div className="home" id="Home__id">

<div className="Social__links">
<h3>Follow me</h3>
</div>
      <div>
        <Socialhandles />
      </div>


      <div className="hero__wrapper">

      <div className="subtitile">
        Freelance web developer
        </div>

      <div className="hero-title">
        <h1>jai Negi</h1>
      </div>
      <p className="hero__para">
        Hey there! My name is Jai Negi and I'm a India based web developer with over 4 years of experience.
        I create websites and webapps.I am really glad that my skills can really put some values in other's life.
      </p>
      </div>
    </div>

  )
}

export default Home;
