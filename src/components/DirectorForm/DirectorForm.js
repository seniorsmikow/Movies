import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import withHoc from './DirectorFormHoc';


class DirectorForm extends React.Component {

    handleSave() {
        const { selectedValue, addDirector } = this.props;
        const { id, name, age, imgUrl } = selectedValue;
    }

    render() {

        const { classes, selectedValue = {} } = this.props;
        const { name, age, imgUrl } = selectedValue;

        return (
            <form className={classes.root} noValidate autoComplete="off">
                <TextField 
                    id="standard-basic" 
                    label="Имя режиссёра" 
                    value={name}
                    variant="outlined"
                />
                <TextField 
                    id="standard-basic" 
                    label="Возраст" 
                    value={age}
                    variant="outlined"
                />
                <TextField 
                    id="standard-basic" 
                    label="Ссылка на изображение" 
                    value={imgUrl}
                    variant="outlined"
                />
                <Button variant="contained" color="primary" onClick={this.handleSave}>
                Сохранить
                </Button>
            </form>
        );
  }
}

export default withHoc(DirectorForm);