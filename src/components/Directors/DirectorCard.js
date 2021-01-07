import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: '300px',
    transition: '0.5s',
    '&:hover': {
      transform: 'scale(1.05)',
    }
  },
  title: {
    fontSize: 14,
    fontFamily: "'Xanh Mono', monospace",
    fontWeight: '700',
    color: 'black',
    textAlign: 'center'
  },
});

export default function DirectorCard(props) {

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.name}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.age}
        </Typography>
        
        {props.movies.map(el => <Typography className={classes.title} color="textSecondary" gutterBottom key={el.id}>
          {el.name} - {el.year}
        </Typography>)}
        
      </CardContent>
    </Card>
  );
}