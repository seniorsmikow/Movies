import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './styles';

import { addMovieMutation } from './mutation';
import { moviesQuery } from '../Container/Movies/MoviesQuery';
import { getDirectorName } from '../../Queries/GetDirectorName';

const withGraphqlAdd = graphql(addMovieMutation, {
    props: ({mutate}) => ({
        addMovie: movie => mutate({
            variables: movie,
            refetchQueries: [{ query: moviesQuery }]
        })
    }),
    
});

export default compose(withStyles(styles), withGraphqlAdd, graphql(getDirectorName));