import React from 'react'



const Projects = () => {
    return (
        <div className='hvr-grow' id='centerProjects'>
            <div className='projectsDiv'>
                <h3>Projects</h3>
                <div className='projectsContainer'>
                    <div className='projects'>
                        <p>Game of Life</p>
                        <img src={require('../styles/Images/GameOfLifePortfolio.PNG')} alt='Project 1' className='projectPic' />
                        <p>link: <a href='https://game-of-life-bice.vercel.app/' >game-of-life-bice.vercel.app</a></p>
                        <p>GitHub: <a href='https://github.com/meloegel/Game_of_life' >github.com/meloegel/game_of_life</a></p>
                    </div>
                    <div className='projects'>
                        <p>How-To (Backend)</p>
                        <img src={require('../styles/Images/HowToImage.PNG')} alt='Project 2' className='projectPic' />
                        <p>link: <a href='https://github.com/BW-how-2/Back-End' >github.com/BW-how-2/Back-End</a></p>
                    </div>
                    <div className='projects'>
                        <p>Cube Timer</p>
                        <img src={require('../styles/Images/CubeTimer.PNG')} alt='Project 3' className='projectPic' />
                        <p>link: <a href='https://cube-timer.vercel.app/' >cube-timer.vercel.app/</a></p>
                        <p>GitHub: <a href='https://github.com/meloegel/Cube-Timer' >github.com/meloegel/Cube-Timer</a></p>
                    </div>
                    <div className='projects'>
                        <p>NASA Photo of the Day</p>
                        <img src={require('../styles/Images/NasaPOTD.PNG')} alt='Project 4' className='projectPic' />
                        <p>link: <a href='https://nasa-photo-of-the-day-mloegel.vercel.app/' >nasa-photo-of-the-day-mloegel.vercel.app/</a></p>
                        <p>GitHub: <a href='https://github.com/meloegel/nasa-photo-of-the-day' >github.com/meloegel/nasa-photo-of-the-day</a></p>
                    </div>
                    <div className='projects'>
                        <p>Project 5</p>
                        <img src='' alt='Project 5' />
                        <p>link:</p>
                    </div>
                    <div className='projects'>
                        <p>Project 6</p>
                        <img src='' alt='Project 6' />
                        <p>link:</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;