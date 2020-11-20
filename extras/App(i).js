import React,{Component} from 'react';
import './App.css';
import {Layout,Navigation,Header,Content} from 'react-mdl';
import Main from './components/Main';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div>
    <Layout>
    <Header className='header'>
    <Navigation>
    <Link to="/Home">Home</Link>
    <Link to="/Resume">Resume</Link>
    <Link to="/Projects">Projects</Link>
    <Link to="/Getintouch">GetinTouch</Link>
    </Navigation>
    </Header>

    <Content>
    <Main/>
    
    </Content>
    </Layout>
  
    </div>
  );
}

export default App;
