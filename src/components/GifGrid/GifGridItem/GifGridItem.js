import React from 'react';

import classes from './GifGridItem.module.css';

const GifGridItem = (props) => {
    return (
        <div className={classes.gifGridItem}>
            <img src={props.url} alt={props.id}/>
        </div>
    );
}

export default GifGridItem;