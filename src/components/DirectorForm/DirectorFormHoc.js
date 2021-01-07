import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './styles';

import { addDirectorMutation } from './mutation';

const withGraphqlAdd = graphql(addDirectorMutation, {
    props: ({mutate}) => ({
        addDirector: director => mutate({
            variables: director
        })
    }),
});

export default compose(withStyles(styles), withGraphqlAdd);