import React from "react";
import PictureItem from "../components/pictureItem";

/*
* Function to create the PictureSlider Component
*
* The Slider ist build out of a div where multiple PictureItems are placed
*/

function PictureSlider(props){
    return <div style={{ overflow: "scroll", whiteSpace: "nowrap" }}>
        {/*Map method is used to iterate through a list. It creates a PictureItem for every
        Item in the List*/}
        {props.list.map(picture => <PictureItem src={picture.src} name={picture.name}
                                                price={picture.price} key={picture.id}/>)}
    </div>;
}

export default PictureSlider;