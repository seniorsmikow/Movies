import React from 'react';
import DirectorsHoc from './DirectorsHoc';
import DirectorCard from './DirectorCard';
import DirectorPoster from './DirectorPoster';
import DirectorForm from '../DirectorForm/DirectorForm';


class Directors extends React.Component {

    state = {
        name: '',
        age: 0,
        imgUrl: '',
    }

    handleChange = name => ({ target }) => { this.setState({ [name]: target.value }); };
    
    render() {

        const { name, age, id, imgUrl } = this.state;

        const { classes, data = {} } = this.props;
        const { directors = [] } = data;

        return (
            <div>
                {directors.map(el => <div key={el.id}>
                    <div className={classes.root}>
                        <DirectorPoster img={el.imgUrl}/>
                        <DirectorCard name={el.name} age={el.age} movies={el.movies}/>
                    </div>
                </div>)
                }
                <DirectorForm handleChange={this.handleChange} selectedValue={{ name, age, id, imgUrl }} />
            </div>   
        )
    }
};

export default DirectorsHoc(Directors);