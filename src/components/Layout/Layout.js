import React from 'react';

import Aux from '../../hoc/Auxiliary';
import Navbar from '../Navbar/Navbar';
import classes from './Layout.module.css'

const Layout = (props) => {
    return (
        <Aux>
            <Navbar/>
            <main className={classes.container}>
                {props.children}
            </main>
        </Aux>
    );
}

export default Layout;