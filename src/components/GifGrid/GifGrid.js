import React from 'react';

import GifGridItem from './GifGridItem/GifGridItem';
import classes from './GifGrid.module.css';
import Spinner from '../Spinner/Spinner';

const GifGrid = (props) => {

    let gifGridItems = <Spinner/>;
    let style = classes.loading;

    if (props.gifs) {
        style = classes.gifGrid;
        gifGridItems = props.gifs.map((el) => {
            return <GifGridItem key={el.id} id={el.id} url={el.gifUrl} />;
        })
    }

    return (
        <div className={style}>
            { gifGridItems}
        </div>
    );

}

export default GifGrid;