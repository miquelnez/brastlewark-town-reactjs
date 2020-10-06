import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import PaginationSection from '../pagination-section/PaginationSection';
import GnomeItem from '../gnome-item/GnomeItem';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: '18vw',
      },
    }
}));

const GnomeList = () => {
    const classes = useStyles();
    const pagination = useSelector((state) => state.pagination_reducer);
    const brastlewark = useSelector((state) => state.brastlewark_reducer);

    return(
        <>
            <div className={classes.root}>
                { pagination.itemsToShow.map(gnome => <GnomeItem gnome={gnome} key={gnome.id}/>)}
                { brastlewark.isLoading && <div>Loading..</div> }
                { brastlewark.error !== '' && <div>{brastlewark.error}</div>}
            </div>
            <div>
                { brastlewark.gnomes.length > 0 && <PaginationSection /> }
            </div>
        </>
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