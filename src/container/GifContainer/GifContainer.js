import React from 'react';
import Axios from 'axios';

import SearchBar from '../../components/SearchBar/SearchBar';
import GifGrid from '../../components/GifGrid/GifGrid';
import Aux from '../../hoc/Auxiliary';

class GifContainer extends React.Component {
    state = {
        searchQuery: '',
        loadedGifs: null,
    }

    searchHandler = (updatedSearchQuery) => {
        this.setState({
            searchQuery: updatedSearchQuery
        });
    }

    componentDidUpdate(prevProp, prevState) {
        if (prevState.searchQuery !== this.state.searchQuery && this.state.searchQuery) {
            Axios.get('https://api.tenor.com/v1/search?key=DWOMV8H8CC5W&media_filter=minimal&q=' + this.state.searchQuery)
                .then(res => {
                    const resGif = res.data.results;
                    const updatedGif = resGif.map((el) => {
                        return {
                            id: el.id,
                            gifUrl: el.media[0].gif.url,
                            gifPreviewUrl: el.media[0].gif.preview,
                        }
                    })
                    this.setState({
                        loadedGifs: updatedGif
                    })
                })
                .catch(err => console.log(err));

            this.setState({
                loadedGifs: null
            })
        }
    }

    componentDidMount() {
        Axios.get('https://api.tenor.com/v1/trending?key=DWOMV8H8CC5W&media_filter=minimal')
            .then(res => {
                const resGif = res.data.results;
                const updatedGif = resGif.map((el) => {
                    return {
                        id: el.id,
                        gifUrl: el.media[0].gif.url,
                        gifPreviewUrl: el.media[0].gif.preview,
                    }
                })
                this.setState({
                    loadedGifs: updatedGif
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Aux>
                <SearchBar search={this.state.searchQuery} callback={this.searchHandler} />
                <GifGrid gifs={this.state.loadedGifs} />
            </Aux>
        );
    }
}

export default GifContainer;