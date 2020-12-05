import React from 'react';

import Logo from '../Logo/Logo';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <header className={classes.navbar}>
            <div className={classes.container}>
                <Logo/>
            </div>
        </header>
    );
}

export default Navbar;