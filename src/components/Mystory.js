import React from 'react';
import './mystory.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Footer from "./Footer"

function Mystory() {
    return (
        <div>
        <section className="My_story">

        <div className="story__wrap">
        <div className="story__title">
        My Story
        </div>
        </div>
        <p className="about-para"> This approach is great because all assets are handled by the build system and will get filenames with hashes in the production build. You’ll also get an error if the file is moved or deleted.

        The downside is it can get cumbersome if you have hundreds of images because you can’t have arbitrary import paths.
        This approach is great because all assets are handled by the build system and will get filenames with hashes in the production build. You’ll also get an error if the file is moved or deleted.
        
        The downside is it can get cumbersome if you have hundreds of images because you can’t have arbitrary import paths.
        This approach is great because all assets are handled by the build system and will get filenames with hashes in the production build. You’ll also get an error if the file is moved or deleted.
        
        The downside is it can get cumbersome if you have hundreds of images because you can’t have arbitrary import paths.
        </p>
        </section>
        <section className="skill_section">
        <div className="skill_title">My Skills</div>
        <div className="My_skills">
        Html<ProgressBar now={80} />
        Css<ProgressBar now={70} />
        React js<ProgressBar now={60} />
        Node js<ProgressBar now={40} />
        Django<ProgressBar now={70} />
        </div>
        </section>

        <section className="my_experience">
        <div className="experince_title">Experience</div>
        
        <div className="past_experiences">

        <div> 
        <h1>Internship,Google</h1> 
        <p>year 2014-15</p>
        </div>

        <div> 
        <h1>Internship,Google</h1> 
        <p>year 2014-15</p>
        </div>

        <div> 
        <h1>Internship,Google</h1> 
        <p>year 2014-15</p>
        </div>
       
        </div>
        </section>
        <Footer/>
        
        </div>
    )
}

export default Mystory
