import React from 'react';
import Axios from 'axios';

import GifGridItem from './GifGridItem/GifGridItem';
import classes from './GifGrid.module.css';

class GifGrid extends React.Component {
    state = {
        loadedGifs: null,
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
        let gifGridItems = (<h3>Loading Gifs...</h3>);
        if(this.state.loadedGifs){
            gifGridItems = this.state.loadedGifs.map((el)=>{
                return <GifGridItem key={el.id} id={el.id} url={el.gifUrl}/>;
            })
        }
        return (
            <div className={classes.gifGrid}>
                { gifGridItems }
            </div>
        );
    }
}

export default GifGrid;