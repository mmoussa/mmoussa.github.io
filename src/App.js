import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Layout>
        <Header className="header-color" title="Portfolio" scroll>
            <Navigation>
                <Link to="/" style={{fontFamily: "montserrat", fontSize: "1.5em"}}>Home</Link>
                <Link to="/resume" style={{fontFamily: "montserrat", fontSize: "1.5em"}}>Resume</Link>
                <Link to="/projects" style={{fontFamily: "montserrat", fontSize: "1.5em"}}>Projects</Link>
            </Navigation>
        </Header>
        <Drawer title="Portfolioo">
            <Navigation>
                <Link to="/" style={{fontFamily: "montserrat", fontSize: "1.5em"}}>Home</Link>
                <Link to="/resume" style={{fontFamily: "montserrat", fontSize: "1.5em"}}>Resume</Link>
                <Link to="/projects" style={{fontFamily: "montserrat", fontSize: "1.5em"}}>Projects</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
