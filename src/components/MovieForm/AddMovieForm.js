import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import withHoc from './MovieFormHoc';

class AddMovieForm extends React.Component {

    handleSave = () => {
        const { selectedValue, addMovie, clearForm } = this.props;
        const { name, genre, year, imgUrl } = selectedValue;
        addMovie({name, genre, year, imgUrl});
        clearForm();
    }


    render() {

        const { data = {}, classes, handleChange,  selectedValue = {} } = this.props;
        const { name, genre, year, imgUrl } = selectedValue;
        //const { directorName = [] } = data;

        const { directors = [] } = data;

        return (
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="outlined-name"
                    label="Name"
                    className={classes.textField}
                    value={name}
                    //onChange={handleChange('name')}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-rate"
                    label="Genre"
                    className={classes.textField}
                    value={genre}
                    //onChange={handleChange('genre')}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-rate"
                    label="Year"
                    className={classes.textField}
                    value={year}
                    //onChange={handleChange('year')}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-rate"
                    label="Photo"
                    className={classes.textField}
                    value={imgUrl}
                    //onChange={handleChange('imgUrl')}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                  id="outlined-select-currency-native"
                  select
                  //label="Имя режиссёра"
                  //value={currency}
                  //onChange={handleChange}
                  SelectProps={{
                    native: true,
                  }}
                  helperText="Выберите имя режиссёра из списка"
                  variant="outlined"
                >
                  {directors.map(el => (
                    <option key={el.id} value={el.name}>
                      {el.name}
                    </option>
                  ))}
                </TextField>
                <Button variant="contained" color="primary" onClick={this.handleSave}>
                    Сохранить
                </Button>
            </form>
        );
  }
}

export default withHoc(AddMovieForm);