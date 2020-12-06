import React from 'react';

import classes from './SearchBar.module.css';

const SearchBar = (props) => {
    return (
        <div className={classes.searchBar}>
            <input type="text" placeholder="Search a GIF"></input>
            <button>Search</button>
        </div>
    );
}

export default SearchBar;