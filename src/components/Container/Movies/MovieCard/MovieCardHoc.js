//import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';
 
import { moviesQuery } from '../MoviesQuery';
import { deleteMovieMutation } from '../../../../Queries/DeleteMovie';
import { updateMovieMutation } from '../../../../Queries/UpdateMovie';

const withGraphQl = compose(
    graphql(deleteMovieMutation, {
        props: ({mutate}) => ({
            deleteMovie: id => mutate({
                variables: id,
                refetchQueries: [{ query: moviesQuery }]
            })
        }),
    }
    ),
    graphql(updateMovieMutation, {
        props: ({mutate}) => ({
            updateMovie: movie => mutate({
                variables: movie,
                refetchQueries: [{ query: moviesQuery }]
            })
        }),
    }
    )
);

export default compose(withGraphQl);