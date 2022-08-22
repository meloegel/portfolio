import React from 'react'
import logo from '../logo.svg';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

const Footer = () => {
    return (
        <div>
            <header className="flex items-center justify-center text-white">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Powered By React</p>
            </header>
            <div className="text-center flex justify-center">
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
            </div>
        </div>
    )
}

export default Footer;