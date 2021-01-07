import { gql } from 'apollo-boost';

export const addDirectorMutation = gql`
    mutation addDirector($name: String!, $age: Int!, $imgUrl: String!) {
        addDirector(name: $name, age: $age, imgUrl: $imgUrl) {
            name 
        }
    }
`;

// name в мутации- поле, которое возвращает мутация