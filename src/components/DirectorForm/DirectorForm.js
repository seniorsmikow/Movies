import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import withHoc from './DirectorFormHoc';


class DirectorForm extends React.Component {

    handleSave = () => {
        const { selectedValue, addDirector, clearForm } = this.props;
        const { id, name, age, imgUrl } = selectedValue;
        addDirector({name, age: Number(age), imgUrl});
        clearForm();
    }


    render() {

        const { classes, handleChange,  selectedValue = {} } = this.props;
        const { name, age, imgUrl } = selectedValue;

        return (
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="outlined-name"
                    label="Name"
                    className={classes.textField}
                    value={name}
                    onChange={handleChange('name')}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-rate"
                    label="Age"
                    className={classes.textField}
                    value={age}
                    onChange={handleChange('age')}
                    type="number"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-rate"
                    label="Photo"
                    className={classes.textField}
                    value={imgUrl}
                    onChange={handleChange('imgUrl')}
                    margin="normal"
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