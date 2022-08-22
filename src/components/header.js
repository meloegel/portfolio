import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

const Header = () => {
    return (
        <div className="w-11/12 flex flex-col items-center justify-center text-center bg-headerPhoto bg-center bg-no-repeat bg-cover h-auto md:h-h400px rounded-3xl text-white text-base m-auto header mb-2">
            <header>
                <Breadcrumbs aria-label="breadcrumb" style={{ color: "white" }}>
                    <a href="#aboutDiv" style={{ textDecoration: 'none' }}>
                        <Typography color="white"> About <i class="fas fa-scroll" /></Typography></a>
                    <a href="#proExpo" style={{ textDecoration: 'none' }} >
                        <Typography color="white"> Professional Experience <i class="fas fa-user-tie" /></Typography></a>
                    <a href="#centerProjects" style={{ textDecoration: 'none' }} >
                        <Typography color="white"> Projects <i class="fas fa-folder-open" /></Typography></a>
                    <a href="#skillsDiv" style={{ textDecoration: 'none' }} >
                        <Typography color="white"> Skills <i class="fas fa-medal" /></Typography></a>
                    <a href="#edu" style={{ textDecoration: 'none' }}>
                        <Typography color="white"> Education <i class="fas fa-laptop-code" /></Typography></a>
                    <a href="#contactDiv" style={{ textDecoration: 'none' }} >
                        <Typography color="white"> Contact <i class="fas fa-id-card" /></Typography></a>
                </Breadcrumbs>
                <div className="p-4">
                    <h1>Mark Loegel</h1>
                    <h2 className="p-4">Web Developer</h2>
                    <a style={{ textDecoration: 'none' }} href={require('../Images/Mark Resume (2-10-21).pdf')} download>
                        <Button variant='contained'>Download Resume</Button>
                    </a>
                </div>
            </header>
        </div >
    )
}

export default Header;

