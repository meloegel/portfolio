import React from 'react'
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

const useStyles = makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: '56.25%',
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
    },
}));

const Projects = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    return (
        <div className='hvr-grow' id='centerProjects'>
            <div className='projectsDiv'>
                <h3>Projects</h3>
                <div className='projectsContainer'>
                    <div>
                        <Card
                            style={{ maxWidth: '345px', minWidth: '300px' }}
                        >
                            <CardHeader
                                title='Game of Life'
                                subheader='July 2020'
                            />
                            <CardMedia
                                className={classes.media}
                                image={require('../styles/Images/GameOfLifePortfolio.PNG')}
                                title='Game of Life'
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Description talking about creating Game of Life.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="links"
                                ><ExpandMoreIcon /></IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography>link: <a className='cardLink' href='https://game-of-life-bice.vercel.app/' >game-of-life-bice.vercel.app</a></Typography>
                                    <Typography>GitHub: <a className='cardLink' href='https://github.com/meloegel/Game_of_life' >github.com/meloegel/game_of_life</a></Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </div>
                    <div>
                        <Card
                            style={{ maxWidth: '345px', minWidth: '300px' }}
                        >
                            <CardHeader
                                title='How-To BE'
                                subheader='June 2020'
                            />
                            <CardMedia
                                image={require('../styles/Images/HowToImage.PNG')}
                                style={{ height: '0', paddingTop: '56.25%' }}
                                title='How-To BE'
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Description talking about creating How-To BE.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="links"
                                ><ExpandMoreIcon /></IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography>GitHub: <a className='cardLink' href=' https://github.com/BW-how-2/Back-End'>github.com/BW-how-2/Back-End</a></Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </div>
                    <div>
                        <Card
                            style={{ maxWidth: '345px', minWidth: '300px' }}
                        >
                            <CardHeader
                                title='Cube Timer'
                                subheader='Oct 2020'
                            />
                            <CardMedia
                                image={require('../styles/Images/CubeTimer.PNG')}
                                style={{ height: '0', paddingTop: '56.25%' }}
                                title='Cube Timer'
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Description talking about creating Cube Timer.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="links"
                                ><ExpandMoreIcon /></IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography>link: <a className='cardLink' href='https://cube-timer.vercel.app/'>cube-timer.vercel.app/</a></Typography>
                                    <Typography>GitHub: <a className='cardLink' href='https://github.com/meloegel/Cube-Timer'>github.com/meloegel/Cube-Timer</a></Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </div>
                    <div>
                        <Card
                            style={{ maxWidth: '345px', minWidth: '300px' }}
                        >
                            <CardHeader
                                title='NASA Photo of the Day'
                                subheader='Oct 2020'
                            />
                            <CardMedia
                                image={require('../styles/Images/NasaPOTD.PNG')}
                                style={{ height: '0', paddingTop: '56.25%' }}
                                title='Cube Timer'
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Description talking about creating NASA POTD.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="links"
                                ><ExpandMoreIcon /></IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography>Link: <a className='cardLink' href='https://nasa-photo-of-the-day-mloegel.vercel.app/'>nasa-photo-of-the-day-mloegel.vercel.app/</a></Typography>
                                    <Typography>GitHub: <a className='cardLink' href='https://github.com/meloegel/nasa-photo-of-the-day'>github.com/meloegel/nasa-photo-of-the-day</a></Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </div>
                    <div className='projects'>
                        <p>Run Tracker FE</p>
                        <img src={require('../styles/Images/runTrackerFE.PNG')} alt='Project 5' className='projectPic' />
                        <p>link: <a href='https://run-tracker.vercel.app/'>run-tracker.vercel.app/</a></p>
                        <p>GitHub: <a href='https://github.com/meloegel/run-tracker-fe'>github.com/meloegel/run-tracker-fe</a></p>
                    </div>
                    <div className='projects'>
                        <p>Run Tracker BE</p>
                        <img src={require('../styles/Images/runTrackerBE.PNG')} alt='Project 6' className='projectPic' />
                        <p>Link: <a href='https://github.com/meloegel/run-tracker-be'>github.com/meloegel/run-tracker-be</a></p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Projects;