import React, { useRef, useEffect } from 'react';

const Layer = props => {

    const elLayer = useRef(null);

    useEffect(() => {
        const bbox = elLayer.current.getBoundingClientRect();
        elLayer.current.style.top = `${bbox.top * props.scrollPos/(props.layerIndex * 1000)}px`;

    }, [props.scrollPos, props.layerIndex])

    return (
        <div
            ref={elLayer}
            className={props.className}
            style={{
                ...props.style,
                zIndex: props.layerIndex,
            }}
        >
            {props.children}
        </div>
    )
}

export default Layer