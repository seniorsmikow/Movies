import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import { moviesQuery } from './MoviesQuery';
 
import styles from './Movies.module.scss';

export default compose(withStyles(styles), graphql(moviesQuery));