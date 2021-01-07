import React from 'react';
import classes from './Header.module.scss';


const Header = () => {
    return (
        <div className={classes.header__wrapper}>
            <ul>
                <li>Фильмы</li>
                <li>Режиссёры</li>
                <li>Новости</li>
            </ul>
        </div>
    )
};

export default Header;
