import React from 'react';
import './Header.css';

const Header = ({ onClick }) => {
    return (
        <div className='header' onClick={onClick}>
            <p>LOGO</p>
        </div>
    );
};

export default Header;