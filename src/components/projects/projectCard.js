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

export default function ProjectCard({ cardHeaderTitle, cardHeaderSubHeader, image, imageTitle, cardContentBody, expand, handleExpand, site, siteDisplay, gitHub, gitHubDisplay }) {
    const classes = useStyles();

    return (
        <div className='flex p-6'>
            <Card
                className='w-80 bg-gray-500'
                style={{ backgroundColor: '#a6acba' }}
                raised
            >
                <CardHeader
                    style={{ color: 'white' }}
                    title={cardHeaderTitle}
                    subheader={cardHeaderSubHeader}
                />
                <a href={site} >
                    <CardMedia
                        className={classes.media}
                        image={image}
                        title={imageTitle}
                    />
                </a>
                <CardContent>
                    <Typography variant="body1" style={{ color: 'white' }}>
                        {cardContentBody}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Tooltip
                        placement='left'
                        title='Links'
                    >
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expand,
                            })}
                            onClick={handleExpand}
                            aria-expanded={expand}
                            aria-label="links"
                        ><ExpandMoreIcon /></IconButton>
                    </Tooltip>
                </CardActions>
                <Collapse in={expand} timeout="auto" unmountOnExit>
                    <CardContent>
                        {siteDisplay && <Typography variant="body1" style={{ color: 'white' }}>Link: <a className='cardLink' href={site}>{siteDisplay}</a></Typography>}
                        {gitHub && <Typography variant="body1" style={{ color: 'white' }}>GitHub: <a className='cardLink' href={gitHub}>{gitHubDisplay}</a></Typography>}
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    )
}