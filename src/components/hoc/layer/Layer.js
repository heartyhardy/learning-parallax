import React, { useRef, useEffect, useState } from 'react';

const Layer = props => {

    const elLayer = useRef(null);

    const [initialTop, setInitialTop] =useState(0);

    useEffect(()=>{
        const bbox = elLayer.current.getBoundingClientRect();
        setInitialTop(prev => prev+ bbox.top);
    },[])

    useEffect(() => {
        const bbox = elLayer.current.getBoundingClientRect();
        elLayer.current.style.top = `${ initialTop + (bbox.top * props.scrollPos/(props.layerIndex * 1000))}px`;
    }, [props.scrollPos, props.layerIndex, initialTop])

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