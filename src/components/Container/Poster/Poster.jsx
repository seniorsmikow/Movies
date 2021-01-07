import React from 'react';
import classes from './Poster.module.scss';


const Poster = () => {
    return (
        <div className={classes.poster__wrapper}>
            <div className={classes.poster__img_one}>
                <div className={classes.poster__img_two}></div>
            </div>
        </div>
    )
};

export default Poster;