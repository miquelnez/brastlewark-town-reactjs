import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const GnomeList = () => {
    const classes = useStyles();
    const search = useSelector((state) => state.brastlewark_reducer);

    return(
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                <ListSubheader component="div">Brastlewark Town</ListSubheader>
            </GridListTile>
            {search.gnomes.map((gnome) => (
                <GridListTile key={gnome.thumbnail}>
                    <img src={gnome.thumbnail} alt={gnome.name} />
                    <GridListTileBar
                        title={gnome.name}
                        subtitle={<span>Age: {gnome.age}</span>}
                        actionIcon={
                            <IconButton aria-label={`info about ${gnome.name}`} className={classes.icon}>
                                <InfoIcon />
                            </IconButton>
                        }
                    />
                </GridListTile>
            ))}
            </GridList>
            { search.isLoading && <div>Searching..</div> }
            { search.gnomes && search.gnomes.length > 0 && <div>{search.gnomes[0].name}</div> }
            { search.error !== '' && <div>{search.error}</div>}
        </div>
    );
};

export default GnomeList;

/**
 * <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
 */

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