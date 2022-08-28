import React from 'react'
import logo from "../../Images/logo.svg"
import NavigationBar from './navigationBar';

const Footer = () => {
    return (
        <div>
            <header className="flex items-center justify-center text-white">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Powered By React</p>
            </header>
            <div className="text-center flex justify-center">
               <NavigationBar />
            </div>
        </div>
    )
}

export default Footer;