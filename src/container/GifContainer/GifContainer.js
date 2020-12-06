import React from 'react';

import SearchBar from '../../components/SearchBar/SearchBar';
import GifGrid from '../../components/GifGrid/GifGrid';
import Aux from '../../hoc/Auxiliary';

class GifContainer extends React.Component {
    state = {
        searchQuery: ''
    }

    searchHandler = (updatedSearchQuery) => {
        this.setState({
            searchQuery: updatedSearchQuery
        });
    }

    render() {
        return (
            <Aux>
                <SearchBar search={this.state.searchQuery} callback={this.searchHandler} />
                <GifGrid />
            </Aux>
        );
    }
}

export default GifContainer;