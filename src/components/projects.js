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


    const handleTwoExpand = () => {
        setTwoExpand(!twoExpand)
    }
    const handleOneExpand = () => {
        setOneExpand(!oneExpand)
    }
    const handleThreeExpand = () => {
        setThreeExpand(!threeExpand)
    }
    const handleFourExpand = () => {
        setFourExpand(!fourExpand)
    }
    const handleFiveExpand = () => {
        setFiveExpand(!fiveExpand)
    }
    const handleSixExpand = () => {
        setSixExpand(!sixExpand)
    }

    return (
        <div className='hvr-grow' id='centerProjects'>
            <div className='projectsDiv'>
                <h3><i class="fas fa-folder-open"></i> Projects <i class="fas fa-folder-open"></i></h3>
                <div className='projectsContainer'>
                    <div className='projectCardSection'>
                        <Card
                            className='projectCard'
                            style={{ backgroundColor: '#a6acba' }}
                            raised
                        >
                            <CardHeader
                                style={{ color: 'white', textShadow: '.5px .5px black' }}
                                title='Game of Life'
                                subheader='Aug 2020'
                            />
                            <a href='https://game-of-life-bice.vercel.app/' >
                                <CardMedia
                                    className={classes.media}
                                    image={require('../styles/Images/GameOfLifePortfolio.PNG')}
                                    title='Game of Life'
                                />
                            </a>
                            <CardContent>
                                <Typography variant="body1" style={{ color: 'white', minHeight: '235px' }}>
                                    Created this project for the final sprint of unit 6 at Lambda school. Built over about a week period, with some improvements made after completeing Lambda. Had built a version of Game of Life in Python before starting at Lambda, this time building the project in React was a great way to hone my JS skills.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Tooltip
                                    placement='left'
                                    title='Links'
                                >
                                    <IconButton
                                        className={clsx(classes.expand, {
                                            [classes.expandOpen]: oneExpand,
                                        })}
                                        onClick={handleOneExpand}
                                        aria-expanded={oneExpand}
                                        aria-label="links"
                                    ><ExpandMoreIcon /></IconButton>
                                </Tooltip>
                            </CardActions>
                            <Collapse in={oneExpand} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography variant="body1" style={{ color: 'white' }}>Link: <a className='cardLink' href='https://game-of-life-bice.vercel.app/' >game-of-life-bice.vercel.app</a></Typography>
                                    <Typography variant="body1" style={{ color: 'white' }}>GitHub: <a className='cardLink' href='https://github.com/meloegel/Game_of_life' >github.com/meloegel/game_of_life</a></Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </div>
                    <div className='projectCardSection'>
                        <Card
                            style={{ backgroundColor: '#a6acba' }}
                            className='projectCard'
                            raised
                        >
                            <CardHeader
                                style={{ color: 'white', textShadow: '.5px .5px black' }}
                                title='How-To BE'
                                subheader='June 2020'
                            />
                            <a href=' https://github.com/BW-how-2/Back-End'>
                                <CardMedia
                                    className={classes.media}
                                    image={require('../styles/Images/HowToImage.PNG')}
                                    title='How-To BE'
                                />
                            </a>
                            <CardContent>
                                <Typography variant="body1" style={{ color: 'white', minHeight: '235px' }}>
                                    Worked on this project with many different cohorts in a group of 6. I was responsible for and created the entire back-end of the project. This project was my favorite project I worked on while at Lambda. I loved learning how to write an elaborate and well documented Readme.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <Tooltip
                                    placement='left'
                                    title='Links'
                                >
                                    <IconButton
                                        className={clsx(classes.expand, {
                                            [classes.expandOpen]: twoExpand,
                                        })}
                                        onClick={handleTwoExpand}
                                        aria-expanded={twoExpand}
                                        aria-label="links"
                                    ><ExpandMoreIcon /></IconButton>
                                </Tooltip>
                            </CardActions>
                            <Collapse in={twoExpand} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography variant="body1" style={{ color: 'white' }}>GitHub: <a className='cardLink' href=' https://github.com/BW-how-2/Back-End'>github.com/BW-how-2/Back-End</a></Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </div>
                    <div className='projectCardSection'>
                        <Card
                            style={{ backgroundColor: '#a6acba' }}
                            className='projectCard'
                            raised
                        >
                            <CardHeader
                                style={{ color: 'white', textShadow: '.5px .5px black' }}
                                title='Cube Timer'
                                subheader='Oct 2020'
                            />
                            <a href='https://cube-timer.vercel.app/'>
                                <CardMedia
                                    className={classes.media}
                                    image={require('../styles/Images/CubeTimer.PNG')}
                                    title='Cube Timer'
                                />
                            </a>
                            <CardContent>
                                <Typography variant="body1" style={{ color: 'white', minHeight: '235px' }}>
                                    Cube Timer is an aid for timing the solving of Rubik's cubes. I created CubeTimer not only because I love solving Rubix cubes but also because I love programming. This was one of the first projects I created after graduating Lambda, the project was made over a couple days in Oct 2020.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Tooltip
                                    placement='left'
                                    title='Links'
                                >
                                    <IconButton
                                        className={clsx(classes.expand, {
                                            [classes.expandOpen]: threeExpand,
                                        })}
                                        onClick={handleThreeExpand}
                                        aria-expanded={threeExpand}
                                        aria-label="links"
                                    ><ExpandMoreIcon /></IconButton>
                                </Tooltip>
                            </CardActions>
                            <Collapse in={threeExpand} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography variant="body1" style={{ color: 'white' }}>Link: <a className='cardLink' href='https://cube-timer.vercel.app/'>cube-timer.vercel.app/</a></Typography>
                                    <Typography variant="body1" style={{ color: 'white' }}>GitHub: <a className='cardLink' href='https://github.com/meloegel/Cube-Timer'>github.com/meloegel/Cube-Timer</a></Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </div>
                    <div className='projectCardSection'>
                        <Card
                            style={{ backgroundColor: '#a6acba' }}
                            className='projectCard'
                            raised
                        >
                            <CardHeader
                                style={{ color: 'white', textShadow: '.5px .5px black' }}
                                title='NASA Photo of the Day'
                                subheader='Oct 2020'
                            />
                            <a href='https://nasa-photo-of-the-day-mloegel.vercel.app/'>
                                <CardMedia
                                    className={classes.media}
                                    image={require('../styles/Images/NasaPOTD.PNG')}
                                    title='Cube Timer'
                                />
                            </a>
                            <CardContent>
                                <Typography variant="body1" style={{ color: 'white', minHeight: '235px' }}>
                                    NASA Photo of the Day was created using the NASA public daily photo API. Each day NASA will have a different photo or video to display. This project was the first react project I created from scratch in Unit 3 at Lambda school, it was a memorable project so after graduating Lambda I went back and updated this project.
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
                                        onClick={handleFourExpand}
                                        aria-expanded={fourExpand}
                                        aria-label="links"
                                    ><ExpandMoreIcon /></IconButton>
                                </Tooltip>
                            </CardActions>
                            <Collapse in={fourExpand} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography variant="body1" style={{ color: 'white' }}>Link: <a className='cardLink' href='https://nasa-photo-of-the-day-mloegel.vercel.app/'>nasa-photo-of-the-day-mloegel.vercel.app/</a></Typography>
                                    <Typography variant="body1" style={{ color: 'white' }}>GitHub: <a className='cardLink' href='https://github.com/meloegel/nasa-photo-of-the-day'>github.com/meloegel/nasa-photo-of-the-day</a></Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </div>
                    <div className='projectCardSection'>
                        <Card
                            style={{ backgroundColor: '#a6acba' }}
                            className='projectCard'
                            raised
                        >
                            <CardHeader
                                style={{ color: 'white', textShadow: '.5px .5px black' }}
                                title='Run Tracker FE'
                                subheader='Nov 2020'
                            />
                            <a href='https://run-tracker.vercel.app/'>
                                <CardMedia
                                    className={classes.media}
                                    image={require('../styles/Images/runTrackerFE.PNG')}
                                    title='Run Tracker FE'
                                />
                            </a>
                            <CardContent>
                                <Typography variant="body1" style={{ color: 'white', minHeight: '235px' }}>
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
                                        onClick={handleFiveExpand}
                                        aria-expanded={fiveExpand}
                                        aria-label="links"
                                    ><ExpandMoreIcon /></IconButton>
                                </Tooltip>
                            </CardActions>
                            <Collapse in={fiveExpand} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography variant="body1" style={{ color: 'white' }}>Link: <a className='cardLink' href='https://run-tracker.vercel.app/'>run-tracker.vercel.app/</a></Typography>
                                    <Typography variant="body1" style={{ color: 'white' }}>GitHub: <a className='cardLink' href='https://github.com/meloegel/run-tracker-fe'>github.com/meloegel/run-tracker-fe</a></Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </div>
                    <div className='projectCardSection'>
                        <Card
                            style={{ backgroundColor: '#a6acba' }}
                            className='projectCard'
                            raised
                        >
                            <CardHeader
                                style={{ color: 'white', textShadow: '.5px .5px black' }}
                                title='Run Tracker BE'
                                subheader='Nov 2020'
                            />
                            <a href='https://github.com/meloegel/run-tracker-be'>
                                <CardMedia
                                    className={classes.media}
                                    image={require('../styles/Images/runTrackerBE.PNG')}
                                    title='Run Tracker BE'
                                />
                            </a>
                            <CardContent>
                                <Typography variant="body1" style={{ color: 'white', minHeight: '235px' }}>
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
                                        onClick={handleSixExpand}
                                        aria-expanded={sixExpand}
                                        aria-label="links"
                                    ><ExpandMoreIcon /></IconButton>
                                </Tooltip>
                            </CardActions>
                            <Collapse in={sixExpand} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography variant="body1" style={{ color: 'white' }}>GitHub: <a className='cardLink' href='https://github.com/meloegel/run-tracker-be'>github.com/meloegel/run-tracker-be</a></Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </div>
                    {/* <div className='projectCardSection'>
                        <Card
                            style={{ backgroundColor: '#a6acba' }}
                            className='projectCard'
                            raised
                        >
                            <CardHeader
                                style={{ color: 'white', textShadow: '.5px .5px black' }}
                                title='Ultramikro'
                                subheader='Nov 2020'
                            />
                            <a href='https://github.com/meloegel/ultraMikro'>
                                <CardMedia
                                    className={classes.media}
                                    image={require('../styles/Images/Ultramikro.PNG')}
                                    title='Ultramikro'
                                />
                            </a>
                            <CardContent>
                                <Typography variant="body1" style={{ color: 'white', minHeight: '235px' }}>
                                    Ultramikro description
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
                                        onClick={handleSixExpand}
                                        aria-expanded={sixExpand}
                                        aria-label="links"
                                    ><ExpandMoreIcon /></IconButton>
                                </Tooltip>
                            </CardActions>
                            <Collapse in={sixExpand} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography variant="body1" style={{ color: 'white' }}>GitHub: <a className='cardLink' href='https://github.com/meloegel/ultraMikro'>github.com/meloegel/ultraMikro</a></Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </div> */}
                </div>
            </div>
        </div >
    )
}

export default Projects;
