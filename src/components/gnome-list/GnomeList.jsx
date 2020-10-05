import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import ImageComponent from 'material-ui-image';
import { Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

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
    const search = useSelector((state) => state.brastlewark_reducer);
    const [page, setPage] = React.useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    };

    return(
        <div className={classes.root}>
            { paginateSearch(search).map((gnome) => (
                <Paper elevation={3} key={gnome.thumbnail+'_'+gnome.name}>
                    <ImageComponent 
                        src={gnome.thumbnail ? gnome.thumbnail : ''}
                        aspectRatio={(16/9)}
                        imageStyle={{borderRadius:'4px'}}/>
                    <Typography className={classes.paragraph}>{gnome.name}</Typography>
                </Paper>
            ))}
            { search.isLoading && <div>Searching..</div> }
            { search.error !== '' && <div>{search.error}</div>}
            { search.gnomes.length > 0 &&
                <div>
                    <Typography>{page} of {getTotalPageCount(search)}</Typography>
                    <Pagination count={search.itemsPerPage} page={page} onChange={handleChange} />
                </div> 
            }
        </div>
    );
};

//TODO: This should be an action?
function paginateSearch(search) {
    return search.gnomes.slice(
        search.currentPage * search.itemsPerPage,
        search.itemsPerPage
    );
}

function getTotalPageCount(search) {
    return Math.round(search.gnomes.length / search.itemsPerPage);
}

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