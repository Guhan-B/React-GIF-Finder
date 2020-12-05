import React from 'react';

import Aux from '../../hoc/Auxiliary';
import Navbar from '../Navbar/Navbar';

const Layout = (props) => {
    return (
        <Aux>
            <Navbar/>
            <main>
                {props.children}
            </main>
        </Aux>
    );
}

export default Layout;