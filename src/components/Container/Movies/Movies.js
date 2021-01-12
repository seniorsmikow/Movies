import React from 'react';
import MoviesHoc from './MoviesHoc';
import MovieCard from './MovieCard/MovieCard';
import MoviePoster from './MoviePoster/MoviePoster';
//import AddMovieForm from '../../MovieForm/AddMovieForm';
import Modal from '../../Modal/Modal';


class Movies extends React.Component {

    state = {
        name: '',
        genre: '',
        year: '',
        imgUrl: '',
    }

    handleChange = name => ({ target }) => { this.setState({ [name]: target.value }); };

    clearForm = () => (this.setState({name: '', genre: '', year: '', imgUrl: ''}));

    render() {

        const { id, name, genre, year, imgUrl } = this.state;

        const { classes } = this.props;
        const { movies = [] } = this.props.moviesQuery;

        
        return (
            <div className={classes.movies__wrapper}>
                <Modal title="Добавить фильм"/>
                {movies.map(el => <div key={el.id}>
                    <div className={classes.root}>
                        <MoviePoster img={el.imgUrl}/>
                        <MovieCard name={el.name} genre={el.genre} year={el.year} id={el.id}/>
                    </div>
                </div>)
                }
                {/* <AddMovieForm handleChange={this.handleChange} selectedValue={{ id, name, genre, year, imgUrl }} clearForm={this.clearForm} /> */}
            </div>   
        )
    }
};

export default MoviesHoc(Movies);