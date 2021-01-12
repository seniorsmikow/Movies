import { gql } from 'apollo-boost';

export const getDirectorName = gql`
    query directorsQuery {
        directors {
            id
            name
        }
    }
`;