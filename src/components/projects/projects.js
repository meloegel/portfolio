import React, { useState } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Tooltip from '@material-ui/core/Tooltip';
import ProjectCard from './projectCard';


const useStyles = makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: '56.25%',
        border: '1px solid black',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    }
}));

const Projects = () => {
    const classes = useStyles();
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
                <h3><i class="fas fa-folder-open"></i> Projects <i class="fas fa-folder-open"></i></h3>
                <div className="flex flex-wrap items-center justify-center w-11/12 m-auto text-white p-4">
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
                        siteDisplay={"github.com/BW-how-2/Back-End"}
                    />
                    <ProjectCard
                        cardHeaderTitle={'Cube Timer | Oct 2020 | Front End Developer'}
                        cardHeaderSubHeader={'REACT | SASS | MATERIAL UI'}
                        image={require('../../Images/CubeTimer.PNG')}
                        imageTitle={'Cube Timer'}
                        cardContentBody={"Cube Timer is an aid for timing the solving of Rubik's cubes. I created CubeTimer not only because I love solving Rubix cubes but also because I love programming. This was one of the first projects I created after graduating Lambda, the project was made over a couple days in Oct 2020."}
                        expand={threeExpand}
                        handleExpand={() => handleExpand(threeExpand, setThreeExpand)}
                        site={'https://cube-timer.vercel.app/'}
                        siteDisplay={'cube-timer.vercel.app'}
                        gitHub={'https://github.com/meloegel/Cube-Timer'}
                        gitHubDisplay={'github.com/meloegel/Cube-Timer'}
                    />
                    <div className='flex p-6'>
                        <Card
                            style={{ backgroundColor: '#a6acba' }}
                            className='w-80 bg-gray-500'
                            raised
                        >
                            <CardHeader
                                style={{ color: 'white' }}
                                title='NASA Photo of the Day | Oct 2020 | Front End Developer'
                                subheader='REACT | SASS | STYLED COMPONENTS'
                            />
                            <a href='https://nasa-photo-of-the-day-mloegel.vercel.app/'>
                                <CardMedia
                                    className={classes.media}
                                    image={require('../../Images/NasaPOTD.PNG')}
                                    title='Cube Timer'
                                />
                            </a>
                            <CardContent>
                                <Typography variant="body1" style={{ color: 'white' }}>
                                    NASA Photo of the Day was created using the NASA public daily photo API. Each day NASA will have a different photo or video to display. This project was the first react project I created from scratch in Unit 3 at Lambda school, after graduating Lambda I updated before deploying this project.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Tooltip
                                    placement='left'
                                    title='Links'
                                >
                                    <IconButton
                                        className={clsx(classes.expand, {
                                            [classes.expandOpen]: fourExpand,
                                        })}
                                        onClick={() => handleExpand(fourExpand, setFourExpand)}
                                        aria-expanded={fourExpand}
                                        aria-label="links"
                                    ><ExpandMoreIcon /></IconButton>
                                </Tooltip>
                            </CardActions>
                            <Collapse in={fourExpand} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography variant="body1" style={{ color: 'white' }}>Link: <a className='text-white' href='https://nasa-photo-of-the-day-mloegel.vercel.app/'>nasa-photo-of-the-day-mloegel.vercel.app/</a></Typography>
                                    <Typography variant="body1" style={{ color: 'white' }}>GitHub: <a className='text-white' href='https://github.com/meloegel/nasa-photo-of-the-day'>github.com/meloegel/nasa-photo-of-the-day</a></Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </div>
                    <div className='flex p-6'>
                        <Card
                            style={{ backgroundColor: '#a6acba' }}
                            className='w-80 bg-gray-500'
                            raised
                        >
                            <CardHeader
                                style={{ color: 'white' }}
                                title='Run Tracker FE | Nov 2020 FULL STACK DEVELOPER'
                                subheader='REACT | SASS | MATERIAL UI | YUP | CYPRESS'
                            />
                            <a href='https://run-tracker.vercel.app/'>
                                <CardMedia
                                    className={classes.media}
                                    image={require('../../Images/runTrackerFE.PNG')}
                                    title='Run Tracker FE'
                                />
                            </a>
                            <CardContent>
                                <Typography variant="body1" style={{ color: 'white' }}>
                                    I created Run Tracker because I have a passion for running as well as programming. Run Tracker keeps track of your run times and are able to post good runs to a main feed. Creating an account allows the user to view their runs, edit and delete runs and edit their profile.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Tooltip
                                    placement='left'
                                    title='Links'
                                >
                                    <IconButton
                                        className={clsx(classes.expand, {
                                            [classes.expandOpen]: fiveExpand,
                                        })}
                                        onClick={() => handleExpand(fiveExpand, setFiveExpand)}
                                        aria-expanded={fiveExpand}
                                        aria-label="links"
                                    ><ExpandMoreIcon /></IconButton>
                                </Tooltip>
                            </CardActions>
                            <Collapse in={fiveExpand} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography variant="body1" style={{ color: 'white' }}>Link: <a className='text-white' href='https://run-tracker.vercel.app/'>run-tracker.vercel.app/</a></Typography>
                                    <Typography variant="body1" style={{ color: 'white' }}>GitHub: <a className='text-white' href='https://github.com/meloegel/run-tracker-fe'>github.com/meloegel/run-tracker-fe</a></Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </div>
                    <div className='flex p-6'>
                        <Card
                            style={{ backgroundColor: '#a6acba' }}
                            className='w-80 bg-gray-500'
                            raised
                        >
                            <CardHeader
                                style={{ color: 'white' }}
                                title='Run Tracker BE | Nov 2020 | FULL STACK DEVELOPER'
                                subheader='NODE | EXPRESS | KNEX | JEST | POSTGRESSQL | SQLITE3'
                            />
                            <a href='https://github.com/meloegel/run-tracker-be'>
                                <CardMedia
                                    className={classes.media}
                                    image={require('../../Images/runTrackerBE.PNG')}
                                    title='Run Tracker BE'
                                />
                            </a>
                            <CardContent>
                                <Typography variant="body1" style={{ color: 'white' }}>
                                    I created Run Tracker because I have a passion for running as well as programming. Run Tracker keeps track of your run times and are able to post good runs to a main feed. Creating an account allows the user to view their runs, edit and delete runs and edit their profile.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Tooltip
                                    placement='left'
                                    title='Links'
                                >
                                    <IconButton
                                        className={clsx(classes.expand, {
                                            [classes.expandOpen]: sixExpand,
                                        })}
                                        onClick={() => handleExpand(sixExpand, setSixExpand)}
                                        aria-expanded={sixExpand}
                                        aria-label="links"
                                    ><ExpandMoreIcon /></IconButton>
                                </Tooltip>
                            </CardActions>
                            <Collapse in={sixExpand} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography variant="body1" style={{ color: 'white' }}>GitHub: <a className='text-white' href='https://github.com/meloegel/run-tracker-be'>github.com/meloegel/run-tracker-be</a></Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Projects;