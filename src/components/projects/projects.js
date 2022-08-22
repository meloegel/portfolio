import React, { useState } from 'react'
import ProjectCard from './projectCard';


const Projects = () => {
    const [oneExpand, setOneExpand] = useState(false);
    const [twoExpand, setTwoExpand] = useState(false);
    const [threeExpand, setThreeExpand] = useState(false);
    const [fourExpand, setFourExpand] = useState(false);
    const [fiveExpand, setFiveExpand] = useState(false);
    const [sixExpand, setSixExpand] = useState(false);

    const handleExpand = (expand, setExpand) => {
        setExpand(!expand)
    }

    return (
        <div className='hvr-grow w-full text-center'>
            <div className='m-auto text-center relative mt-6 bg-gray-500 rounded-3xl p-1.5 w-11/12'>
                <h3>
                    <i class="fas fa-folder-open"></i> Projects <i class="fas fa-folder-open" />
                </h3>
                <div className="flex flex-wrap items-center justify-center w-11/12 m-auto text-white p-4 min-h-max gap-4">
                    <ProjectCard
                        cardHeaderTitle={'Game of Life | Aug 2020 Front End Developer'}
                        cardHeaderSubHeader={'REACT| SASS | JEST'}
                        image={require('../../Images/GameOfLifePortfolio.PNG')}
                        imageTitle={'Game of Life'}
                        cardContentBody={" Created this project for the final sprint of unit 6 at Lambda school. Built over about a week period, with some improvements made after completing Lambda. Had built a version of Game of Life in Python before starting at Lambda, this time building the project in React was a great way to hone my JS skills."}
                        expand={oneExpand}
                        handleExpand={() => handleExpand(oneExpand, setOneExpand)}
                        site={'https://game-of-life-bice.vercel.app/'}
                        siteDisplay={"game-of-life-bice.vercel.app"}
                        gitHub={'https://github.com/meloegel/Game_of_life'}
                        gitHubDisplay={'github.com/meloegel/Game_of_life'}
                    />
                    <ProjectCard
                        cardHeaderTitle={'How-To BE | June 2020 Back End Developer'}
                        cardHeaderSubHeader={'NODE | EXPRESS | POSTGRESSQL | SQLITE3 | JEST'}
                        image={require('../../Images/HowToImage.PNG')}
                        imageTitle={'How-To BE'}
                        cardContentBody={"Worked on this project with many different cohorts in a group of 6. I was responsible for and created the entire back-end of the project. This project was my favorite project I worked on while at Lambda. I loved learning how to write an elaborate and well documented Readme."}
                        expand={twoExpand}
                        handleExpand={() => handleExpand(twoExpand, setTwoExpand)}
                        site={'https://github.com/BW-how-2/Back-End'}
                        gitHub={'https://github.com/BW-how-2/Back-End'}
                        gitHubDisplay={"github.com/BW-how-2/Back-End"}
                    />
                    <ProjectCard
                        cardHeaderTitle={'Cube Timer | Oct 2020 | Front End Developer'}
                        cardHeaderSubHeader={'REACT | SASS | MATERIAL UI'}
                        image={require('../../Images/CubeTimer.PNG')}
                        imageTitle={'Cube Timer'}
                        cardContentBody={"Cube Timer is an aid for timing the solving of Rubik's cubes. I created CubeTimer not only because I love solving Rubix cubes but also because I love programming. This was one of the first projects I created after graduating Lambda, the project was made over a couple days in Oct 2020"}
                        expand={threeExpand}
                        handleExpand={() => handleExpand(threeExpand, setThreeExpand)}
                        site={'https://cube-timer.vercel.app/'}
                        siteDisplay={'cube-timer.vercel.app'}
                        gitHub={'https://github.com/meloegel/Cube-Timer'}
                        gitHubDisplay={'github.com/meloegel/Cube-Timer'}
                    />
                    <ProjectCard
                        cardHeaderTitle={'NASA Photo of the Day | Oct 2020 | Front End Developer'}
                        cardHeaderSubHeader={'REACT | SASS | STYLED COMPONENTS'}
                        image={require('../../Images/NasaPOTD.PNG')}
                        imageTitle={"NASA Photo of The Day"}
                        cardContentBody={"NASA Photo of the Day was created using the NASA public daily photo API. Each day NASA will have a different photo or video to display. This project was the first react project I created from scratch in Unit 3 at Lambda school, after graduating Lambda I updated before deploying this project."}
                        expand={fourExpand}
                        handleExpand={() => handleExpand(fourExpand, setFourExpand)}
                        site={'https://nasa-photo-of-the-day-mloegel.vercel.app/'}
                        siteDisplay={'nasa-photo-of-the-day-mloegel.vercel.app'}
                        gitHub={'https://github.com/meloegel/nasa-photo-of-the-day'}
                        gitHubDisplay={"github.com/meloegel/nasa-photo-of-the-day"}
                    />
                    <ProjectCard
                        cardHeaderTitle={'Run Tracker FE | Nov 2020 FULL STACK DEVELOPER'}
                        cardHeaderSubHeader={'REACT | SASS | MATERIAL UI | YUP | CYPRESS'}
                        image={require('../../Images/runTrackerFE.PNG')}
                        imageTitle={'Run Tracker FE'}
                        cardContentBody={"I created Run Tracker because I have a passion for running as well as programming. Run Tracker keeps track of your run times and are able to post good runs to a main feed. Creating an account allows the user to view their runs, edit and delete runs and edit their profile."}
                        expand={fiveExpand}
                        handleExpand={() => handleExpand(fiveExpand, setFiveExpand)}
                        site={'https://run-tracker.vercel.app/'}
                        siteDisplay={'run-tracker.vercel.app'}
                        gitHub={"https://github.com/meloegel/run-tracker-fe"}
                        gitHubDisplay={"github.com/meloegel/run-tracker-fe"}
                    />
                    <ProjectCard
                        cardHeaderTitle={'Run Tracker BE | Nov 2020 | FULL STACK DEVELOPER'}
                        cardHeaderSubHeader={'NODE | EXPRESS | KNEX | JEST | POSTGRESSQL | SQLITE3'}
                        image={require('../../Images/runTrackerBE.PNG')}
                        imageTitle={'Run Tracker BE'}
                        cardContentBody={"I created Run Tracker because I have a passion for running as well as programming. Run Tracker keeps track of your run times and are able to post good runs to a main feed. Creating an account allows the user to view their runs, edit and delete runs and edit their profile."}
                        expand={sixExpand}
                        handleExpand={() => handleExpand(sixExpand, setSixExpand)}
                        site={'https://github.com/meloegel/run-tracker-be'}
                        gitHub={'https://github.com/meloegel/run-tracker-be'}
                        gitHubDisplay={'github.com/meloegel/run-tracker-be'}
                    />
                </div>
            </div>
        </div >
    )
}

export default Projects;
