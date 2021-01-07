import { gql } from 'apollo-boost';

export const directorsQuery = gql`
    query directorsQuery {
        directors {
            id
            name
            age
            imgUrl
            movies {
                id
                name 
                year
            }
        }
    }
`;