import React from 'react';


function PictureItem(props) {
    return <div style={{ display: "inline-block"}}>
        <button>
        <img src={props.src} alt="Test"/>
        <p>{props.name}</p>
        <p>{props.type}</p>
        </button></div>;
}

export default PictureItem;