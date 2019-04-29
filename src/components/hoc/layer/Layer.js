import React, {useRef, useState, useEffect} from 'react';

const Layer = props => {

    const elLayer = useRef(null);
    
    return (
        <div
            ref={elLayer}
            className={props.className}
            style={{ ...props.style, zIndex: props.layerIndex }}
        >
            {props.children}
        </div>
    )
}

export default Layer