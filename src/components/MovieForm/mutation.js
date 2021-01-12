import { gql } from 'apollo-boost';

export const addMovieMutation = gql`
    mutation addMovie($name: String!, $year: String!, $genre: String!, $imgUrl: String!) {
        addMovie(name: $name, year: $year, genre: $genre, imgUrl: $imgUrl) {
            name 
        }
    }
`;

// name в мутации- поле, которое возвращает мутация