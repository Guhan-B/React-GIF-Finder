import React from 'react';

import classes from './SearchBar.module.css';

class SearchBar extends React.Component {
    
    state = {
        currentSearchQuery: this.props.search
    }

    searchChangeHandler = (event) => {
        this.setState({
            currentSearchQuery: event.target.value
        })
    }

    render() {
        return (
            <div className={classes.searchBar}>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    this.props.callback(this.state.currentSearchQuery);
                }}>
                    <input type="text" placeholder="Search a GIF" onChange={this.searchChangeHandler} value={this.state.currentSearchQuery} />
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default SearchBar;