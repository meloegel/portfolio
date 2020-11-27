import React from 'react'



const Header = () => {
    return (
        <div className="header">
            {/* <header className="App-header"> */}
            {/* <img src={require('../Images/HeadShot.jpg')} alt='Mark Loegel' id='HeadShotImg' /> */}
            <header>
                <h1>Mark Loegel</h1>
                <h3>Web Developer</h3>
                <a href='need tp upload resume and navigate to it' download>
                    <button>Download Resume</button>
                </a>
            </header>
            {/* <img src={require('../Images/HeaderPhoto.jpg')} alt='Coding' id='HeaderImg' />
            </header> */}
        </div>
    )
}

export default Header;