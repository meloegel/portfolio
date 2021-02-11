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

const ProExp = () => {
    const classes = useStyles();
    const [sixExpand, setSixExpand] = useState(false);
    const [sevenExpand, setSevenExpand] = useState(false);
    const [eightExpand, setEightExpand] = useState(false);

    const handleSixExpand = () => {
        setSixExpand(!sixExpand)
    }

    const handleSevenExpand = () => {
        setSevenExpand(!sevenExpand)
    }

    const handleEightExpand = () => {
        setEightExpand(!eightExpand)
    }



    return (
        <div className='proExpDiv' id='proExpo'>
            <h3><i class="fas fa-user-tie"></i> Professional Experience <i class="fas fa-user-tie"></i></h3>
            <div>
                <div className='projectCardSection'>
                    <Card
                        style={{ backgroundColor: '#a6acba', width: '85%', margin: '0 auto' }}
                        className='proExpCard'
                        raised
                    >
                        <CardHeader
                            style={{ color: 'white' }}
                            title='Hygieia | Jan 2021 | Full Stack Developer'
                            subheader='NODE | EXPRESS | KNEX | REACT'
                        />
                        <div className='proExpContentDivSwitch'>
                            <div className='proExpContent'>
                                <CardMedia
                                    className={classes.media}
                                    image={require('../styles/Images/Hygieia.PNG')}
                                    title='Hygieia'
                                />
                            </div>
                            <div className='proExpContent'>
                                <CardContent>
                                    <Typography variant="body1" style={{ color: 'white', fontSize: '1rem' }}>
                                        Contracted to consult with Hygieia to develop and deploy a web form for a patient to assign their benefits to Hygieia. Integrate the new AOB form with existing intake user flow currently deployed. Modify a NODE web service to persist the data gathered by physicians in a PDF as well as a MSSQL database deployed on Hygieia's AWS container. Manage and deploy source code from a GitHub account owned by Hygieia, Inc. and deploy website to Hygieia’s web servers.
                                    </Typography>
                                </CardContent>
                            </div>
                        </div>
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
                                <Typography variant="body1" style={{ color: 'white' }}>Company Site: <a className='cardLink' href='https://hygieia.com/'>hygieia.com/</a></Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </div>
                <div className='projectCardSection'>
                    <Card
                        style={{ backgroundColor: '#a6acba', width: '85%', margin: '0 auto' }}
                        className='proExpCard'
                        raised
                    >
                        <CardHeader
                            style={{ color: 'white' }}
                            title='Bridges To Prosperity | Oct 2020 | Full Stack Developer'
                            subheader='NODE | EXPRESS | JEST | REACT | ANT DESIGN | MATERIAL UI | MAPBOX | PLOTLY'
                        />
                        <div className='proExpContentDivSwitch'>
                            <div className='proExpContent'>
                                <a href='https://github.com/meloegel/bridges-to-prosperity-fe-a'>
                                    <CardMedia
                                        className={classes.media}
                                        image={require('../styles/Images/BTP.PNG')}
                                        title='Bridges To Prosperity'
                                    />
                                </a>
                            </div>
                            <div className='proExpContent'>
                                <CardContent>
                                    <Typography variant="body1" style={{ color: 'white', fontSize: '1rem' }}>
                                        Worked on a cross-functional team of 4 data scientists and 4 web developers over 4 weeks to display data generated by the Data Science team on a map for the stakeholder to better be able to evaluate new and existing bridge site locations. Added topography and different icons to the map functionality. Integrated new output from our data scientist’s model into our backend API service. Updated the styling of the app to match the current web site. With my personal updates of adding topography and adding graphs with PlotlyJs our version of the project was chosen to continue to build on by the stakeholder.
                                    </Typography>
                                </CardContent>
                            </div>
                        </div>
                        <CardActions>
                            <Tooltip
                                placement='left'
                                title='Links'
                            >
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: sixExpand,
                                    })}
                                    onClick={handleSevenExpand}
                                    aria-expanded={sevenExpand}
                                    aria-label="links"
                                ><ExpandMoreIcon /></IconButton>
                            </Tooltip>
                        </CardActions>
                        <Collapse in={sevenExpand} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography variant="body1" style={{ color: 'white' }}>GitHub FE: <a className='cardLink' href='https://github.com/meloegel/bridges-to-prosperity-fe-a'>github.com/meloegel/bridges-to-prosperity-fe-a</a></Typography>
                                <Typography variant="body1" style={{ color: 'white' }}>GitHub BE: <a className='cardLink' href='https://github.com/meloegel/bridges-to-prosperity-be-a/tree/readme-loegel'>github.com/meloegel/bridges-to-prosperity-be-a/tree/readme-loegel</a></Typography>
                                <Typography variant="body1" style={{ color: 'white' }}>Company Site: <a className='cardLink' href='https://www.bridgestoprosperity.org/'>bridgestoprosperity.org/</a></Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </div>
                <div className='projectCardSection'>
                    <Card
                        style={{ backgroundColor: '#a6acba', width: '85%', margin: '0 auto' }}
                        className='proExpCard'
                        raised
                    >
                        <CardHeader
                            style={{ color: 'white' }}
                            title='Ultramikro | Nov 2020 | Front End Developer'
                            subheader='REACT | MATERIAL UI'
                        />
                        <div className='proExpContentDiv'>
                            <div className='proExpContent'>
                                <a href='https://ultramikro.vercel.app/'>
                                    <CardMedia
                                        className={classes.media}
                                        image={require('../styles/Images/Ultramikro.PNG')}
                                        title='Ultramikro'
                                    />
                                </a>
                            </div>
                            <div className='proExpContent'>
                                <CardContent  >
                                    <Typography variant="body1" style={{ color: 'white', fontSize: '1.1rem' }}>
                                        Contracted to recover what was possible from previous site and create and deploy new site
                                        Originally created the project in HTML in approximately 3 days. Deployed May 2020
                                        Re-created the site in React in Oct in approximately 3 days. Deployed Oct 2020
                                        Stakeholder happy with new site, remain in contact for future updates of the site
                                    </Typography>
                                </CardContent>
                            </div>
                        </div>
                        <CardActions>
                            <Tooltip
                                placement='left'
                                title='Links'
                            >
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: eightExpand,
                                    })}
                                    onClick={handleEightExpand}
                                    aria-expanded={eightExpand}
                                    aria-label="links"
                                ><ExpandMoreIcon /></IconButton>
                            </Tooltip>
                        </CardActions>
                        <Collapse in={eightExpand} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography variant="body1" style={{ color: 'white' }}>Deployed Link: <a className='cardLink' href='https://ultramikro.vercel.app/'>ultramikro.vercel.app/</a></Typography>
                                <Typography variant="body1" style={{ color: 'white' }}>GitHub: <a className='cardLink' href='https://github.com/meloegel/ultraMikro'>github.com/meloegel/ultraMikro</a></Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default ProExp;

