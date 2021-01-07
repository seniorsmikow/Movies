import React from 'react';
import MoviesHoc from './MoviesHoc';
import MovieCard from './MovieCard/MovieCard';
import MoviePoster from './MoviePoster/MoviePoster';


const Movies = props => {

    const { classes, data = {} } = props;
    const { movies = [] } = data;

    return (
    <div>
        {movies.map(el => <div key={el.id}>
            <div className={classes.root}>
                <MoviePoster img={el.imgUrl}/>
                <MovieCard name={el.name} genre={el.genre} year={el.year}/>
            </div>
        </div>)
        }
    </div>   
    )
};

export default MoviesHoc(Movies);