import React from 'react'
import logo from '../logo.svg';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

const Footer = () => {
    return (
        <div>
            <header className="App-footer">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Powered By React</p>
            </header>
            <div id='bottomNav'>
                <Breadcrumbs aria-label="breadcrumb" style={{ color: "white" }}>
                    <a href="aboutDiv" ><Typography color="white">About</Typography></a>
                    <a href="skillsDiv" ><Typography color="white">Skills</Typography></a>
                    <a href="edu" ><Typography color="white">Education</Typography></a>
                    <a href="centerProjects" ><Typography color="white">Projects</Typography></a>
                    <a href="#contactDiv" ><Typography color="white">Contact</Typography></a>
                </Breadcrumbs>
            </div>
        </div>
    )
}

export default Footer;