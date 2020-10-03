import React from 'react'



const Header = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={require('../Images/HeadShot.jpg')} alt='Mark Loegel' id='HeadShotImg' />
                <h1>Mark Loegel</h1>
                <img src={require('../Images/HeaderPhoto.jpg')} alt='Coding' id='HeaderImg' />
            </header>
        </div>
    )
}

export default Header;