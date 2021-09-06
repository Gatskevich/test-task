import React from 'react';
import { Link } from 'react-router-dom';
import './app-header.scss';

const AppHeader = () => {

    return (
        <header className="header">
            <Link to ={'/infopage'} className = "header__link">Infopage</Link>
            <Link to ={'/changeform'} className = "header__link">ChangeForm</Link>
            <Link to ={'/'} className = "header__link">Login</Link>
            <Link to = "/registration" className = "header__link">Registration</Link>
        </header>
    )
};


export default AppHeader;