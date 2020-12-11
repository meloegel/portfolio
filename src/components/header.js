import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

const Header = () => {
    return (
        <div className="header">
            <header>
                <Breadcrumbs aria-label="breadcrumb" style={{ color: "white" }}>
                    <a href="#aboutDiv" style={{ textDecoration: 'none' }}><Typography color="white"> About <i class="fas fa-scroll"></i></Typography></a>
                    <a href="#proExpo" style={{ textDecoration: 'none' }} ><Typography color="white"> Professional Experience <i class="fas fa-user-tie"></i></Typography></a>
                    <a href="#centerProjects" style={{ textDecoration: 'none' }} ><Typography color="white"> Projects <i class="fas fa-folder-open"></i></Typography></a>
                    <a href="#skillsDiv" style={{ textDecoration: 'none' }} ><Typography color="white"> Skills <i class="fas fa-medal"></i></Typography></a>
                    <a href="#edu" style={{ textDecoration: 'none' }}><Typography color="white"> Education <i class="fas fa-laptop-code"></i></Typography></a>
                    <a href="#contactDiv" style={{ textDecoration: 'none' }} ><Typography color="white"> Contact <i class="fas fa-id-card"></i></Typography></a>
                </Breadcrumbs>
                <h1>Mark Loegel</h1>
                <h2>Web Developer</h2>
                <a style={{ textDecoration: 'none' }} href={require('../styles/Images/Mark Resume (12-10-20).pdf')} download>
                    <Button variant='contained'>Download Resume</Button>
                </a>
            </header>
        </div >
    )
}

export default Header;

