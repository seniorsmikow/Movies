import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';
 
import { styles } from './styles';

import { moviesQuery } from './MoviesQuery';
//import { deleteMovieMutation } from '../../../Queries/DeleteMovie';

const withGraphQl = compose(
    graphql(moviesQuery, {name: "moviesQuery"}),
    // graphql(deleteMovieMutation, {
    //     props: ({mutate}) => ({
    //         deleteMovie: id => mutate({
    //             variables: id,
    //             refetchQueries: [{ query: moviesQuery }]
    //         })
    //     }),
    // })
);

export default compose(withStyles(styles), withGraphQl);