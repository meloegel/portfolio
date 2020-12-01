import React from 'react'
import Button from '@material-ui/core/Button'


const Header = () => {
    return (
        <div className="header">
            {/* <header className="App-header"> */}
            {/* <img src={require('../Images/HeadShot.jpg')} alt='Mark Loegel' id='HeadShotImg' /> */}
            <header>
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