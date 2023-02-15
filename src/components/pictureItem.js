import React, {useState} from 'react';

/*
* Function to create the PictureItem Component
*
* The PictureItem is build of a button in which an image and to p's are placed
*
* Used React Hook useState to control state of isMouseOver while operational time
*/


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
            style={{backgroundColor: isMouseOver? "lightgray" : "white"}}>
        <img src={props.src} style={{objectFit: 'cover', width: '230px', height: '230px' }} alt="Test"/>
        <p style={{fontWeight: 'bold'}}>{props.name}</p>
        <p>{props.price}</p>
        </button></div>;
}

export default PictureItem;