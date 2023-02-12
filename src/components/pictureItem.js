import React, {useState} from 'react';



function PictureItem(props) {
    const [isMouseOver, setMouseOver] = useState(false);
    function handleMouseOver(){
        setMouseOver(true);
    }
    function handleMouseOut(){
        setMouseOver(false);
    }
    return <div style={{ display: "inline-block"}}>
        <button
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={{backgroundColor: isMouseOver? "grey" : "white"}}>
        <img src={props.src} alt="Test"/>
        <p>{props.name}</p>
        <p>{props.price}</p>
        </button></div>;
}

export default PictureItem;