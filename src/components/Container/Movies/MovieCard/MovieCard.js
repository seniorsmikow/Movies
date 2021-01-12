import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Modal from '../../../Modal/Modal';

import withHoc from './MovieCardHoc';


const useStyles = makeStyles({
  root: {
    width: 275,
    height: '300px',
    transition: '1s',
    transform: 'translateX(-230px)',
    backgroundColor: '#292929',
    color: 'white',
    zIndex: '1',
    '&:hover': {
      transform: 'translateX(0px)',
      backgroundColor: 'white',
    }
  },
  title: {
    marginTop: 30,
    fontSize: 14,
    fontFamily: "'Xanh Mono', monospace",
    fontWeight: '700',
    color: 'black',
    textAlign: 'center'
  },
});

const MovieCard = (props) => {

  const classes = useStyles();

  const { id, deleteMovie } = props;

  const handleDelete = () => {
    deleteMovie(id);
    alert(`delete ${id}`);
  };

  return (
    
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          название фильма - "{props.name}"
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          жанр - {props.genre}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          год выпуска - {props.year}
        </Typography>
        <Modal title="Редактировать"/>
        <Button variant="contained" color="secondary" onClick={handleDelete}>
          Удалить
        </Button>
      </CardContent>
    </Card>
  );
}

export default withHoc(MovieCard);