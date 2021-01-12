import { gql } from 'apollo-boost';

export const updateMovieMutation = gql`
    mutation addMovie($id: ID, $name: String!, $year: String!, $genre: String!, $imgUrl: String!) {
        addMovie(id: $id, name: $name, year: $year, genre: $genre, imgUrl: $imgUrl) {
            name 
        }
    }
`;