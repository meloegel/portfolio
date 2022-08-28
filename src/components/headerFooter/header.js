import React from 'react'
import Button from '@material-ui/core/Button'
import NavigationBar from './navigationBar';

const Header = () => {
    return (
        <div className="w-11/12 flex flex-col items-center justify-center text-center bg-headerPhoto bg-center bg-no-repeat bg-cover h-auto md:h-h400px rounded-3xl text-white text-base m-auto header mb-2">
            <header>
                <NavigationBar />
                <div className="p-4">
                    <h1>Mark Loegel</h1>
                    <h2 className="p-4">Web Developer</h2>
                    <a href={require('../../Images/Mark Resume (2-10-21).pdf')} download>
                        <Button variant='contained'>Download Resume</Button>
                    </a>
                </div>
            </header>
        </div >
    )
}

export default Header;

