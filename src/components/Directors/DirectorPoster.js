import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Img from '../../img/django.jpg';

const useStyles = makeStyles({
  root: {
    minWidth: 350,
    transition: '0.5s',
    '&:hover': {
      transform: 'scale(1.05)',
    }
  },
  media: {
    height: 300,
  },
});

export default function DirectorPoster(props) {

    const classes = useStyles();

    return (
    <Card className={classes.root}>
        <CardMedia
            className={classes.media}
            image={props.img || Img} 
            title="Contemplative Reptile"
        />
    </Card>
    );
}