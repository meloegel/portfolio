import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

const Header = () => {
    return (
        <div className="header">
            {/* <header className="App-header"> */}
            {/* <img src={require('../Images/HeadShot.jpg')} alt='Mark Loegel' id='HeadShotImg' /> */}
            <header>
                <Breadcrumbs aria-label="breadcrumb" color="white">
                    <a href="aboutDiv" ><Typography color="white">About</Typography></a>
                    <a href="skillsDiv" ><Typography color="white">Skills</Typography></a>
                    <a href="edu" ><Typography color="white">Education</Typography></a>
                    <a href="centerProjects" ><Typography color="white">Projects</Typography></a>
                    <a href="#contactDiv" ><Typography color="white">Contact</Typography></a>
                </Breadcrumbs>
                <h1>Mark Loegel</h1>
                <h3>Web Developer</h3>
                <a style={{ textDecoration: 'none' }} href={require('../styles/Images/Mark Resume (12-1-20).pdf')} download>
                    <Button variant='contained'>Download Resume</Button>
                </a>
            </header>
            {/* <img src={require('../Images/HeaderPhoto.jpg')} alt='Coding' id='HeaderImg' />
            </header> */}
        </div>
    )
}

export default Header;