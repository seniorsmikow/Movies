import React from 'react';
import MoviesHoc from './MoviesHoc';


const Movies = props => {

    console.log(props.data);

    return (
        <div>
            Movies page
        </div>
    )
};

export default MoviesHoc(Movies);