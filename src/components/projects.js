import React from 'react'



const Projects = () => {
    return (
        <div className='projectsDiv'>
            <h3>Projects</h3>
            <div className='projectsContainer'>
                <div className='projects'>
                    <p>Game of Life</p>
                    <img src={require('../ProjectImages/GameOfLifePortfolio.PNG')} alt='Project 1' id='gameOfLifeImg' />
                    <p>link: <a href='https://game-of-life-bice.vercel.app/' >game-of-life-bice.vercel.app</a></p>
                </div>
                <div className='projects'>
                    <p>Porfolio</p>
                    <img src='' alt='Project 2' />
                    <p>link:</p>
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
    )
}

export default Projects;