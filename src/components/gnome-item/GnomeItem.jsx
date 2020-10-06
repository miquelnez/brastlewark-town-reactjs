import React from 'react';
import Paper from '@material-ui/core/Paper';
import ImageComponent from 'material-ui-image';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    paragraph: {
        position: 'absolute',
        transform: 'translate(8%,-120%)',
        color: 'white',
        fontSize: '1.25vw',
        textShadow: '0px 0px 12px black'
    }
});

const GnomeItem = ({gnome}) => {
    const classes = useStyles();
    return (
        <Paper elevation={3}>
            <ImageComponent 
                src={gnome.thumbnail ? gnome.thumbnail : ''}
                aspectRatio={16/9}
                imageStyle={{borderRadius:'4px'}}/>
            <Typography className={classes.paragraph}>
                {gnome.name}
            </Typography>
        </Paper>
    )
};

export default GnomeItem;