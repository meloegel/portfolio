import React from 'react'



const Projects = () => {
    return (
        <div className='hvr-grow' id='centerProjects'>
            <div className='projectsDiv'>
                <h3>Projects</h3>
                <div className='projectsContainer'>
                    <div className='projects'>
                        <p>Game of Life</p>
                        <img src={require('../Images/GameOfLifePortfolio.PNG')} alt='Project 1' id='gameOfLifeImg' />
                        <p>link: <a href='https://game-of-life-bice.vercel.app/' >game-of-life-bice.vercel.app</a></p>
                    </div>
                    <div className='projects'>
                        <p>How-To (Backend)</p>
                        <img src={require('../Images/HowToImage.PNG')} alt='Project 2' id='HowToImg' />
                        <p>link: <a href='https://github.com/BW-how-2/Back-End' >github.com/BW-how-2/Back-End</a></p>
                    </div>
                    <div className='projects'>
                        <p>My Library</p>
                        <img src='' alt='Project 3' />
                        <p>link:</p>
                    </div>
                    <div className='projects'>
                        <p>Project 4</p>
                        <img src='' alt='Project 4' />
                        <p>link:</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;