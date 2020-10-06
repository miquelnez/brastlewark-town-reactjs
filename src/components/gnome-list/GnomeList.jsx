import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import ImageComponent from 'material-ui-image';
import { Typography } from '@material-ui/core';
import PaginationSection from '../pagination-section/PaginationSection';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: '18vw',
      },
    },
    paragraph: {
        position: 'absolute',
        transform: 'translate(8%,-120%)',
        color: 'white',
        fontSize: '1.25vw',
        textShadow: '0px 0px 12px black'
    }
}));

const GnomeList = () => {
    const classes = useStyles();
    const pagination = useSelector((state) => state.pagination_reducer);
    const brastlewark = useSelector((state) => state.brastlewark_reducer);

    return(
        <div className={classes.root}>
            { pagination.itemsToShow.map((gnome) => (
                <Paper elevation={3} key={gnome.thumbnail+'_'+gnome.name}>
                    <ImageComponent 
                        src={gnome.thumbnail ? gnome.thumbnail : ''}
                        aspectRatio={(16/9)}
                        imageStyle={{borderRadius:'4px'}}/>
                    <Typography className={classes.paragraph}>{gnome.name}</Typography>
                </Paper>
            ))}
            { brastlewark.isLoading && <div>Loading..</div> }
            { brastlewark.error !== '' && <div>{brastlewark.error}</div>}
            { brastlewark.gnomes.length > 0 &&
                <PaginationSection />
            }
        </div>
    );
};


export default GnomeList;
/**
{
  "id": 0,
  "name": "Tobus Quickwhistle",
  "thumbnail": "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
  "age": 306,
  "weight": 39.065952,
  "height": 107.75835,
  "hair_color": "Pink",
  "professions": [
    "Metalworker",
    "Woodcarver",
    "Stonecarver",
    " Tinker",
    "Tailor",
    "Potter"
  ],
  "friends": [
    "Cogwitz Chillwidget",
    "Tinadette Chillbuster"
  ]
}
*/