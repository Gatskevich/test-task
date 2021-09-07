import React from 'react';
import { Link } from 'react-router-dom';
import './app-header.scss';

const AppHeader = () => {
    
    const links = [
        {
            id : 1,
            to: '/infopage',
            name: 'Infopage'
        },
        {
            id : 2,
            to: '/changeform',
            name: 'ChangeForm'
        },
        {
            id : 3,
            to: '/',
            name: 'Login'
        },
        {
            id : 4,
            to: '/registration',
            name: 'Registration'
        },

    ]

    return (
        <header className="header">
            {links.map(link => (<Link key={link.id} className = "header__link"  to={link.to}>{link.name}</Link> ))}
        </header>
    )
};


export default AppHeader;