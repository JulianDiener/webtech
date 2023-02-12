import React from "react";
import PictureItem from "../components/pictureItem";

function PictureSlider(props){
    return <div style={{ overflow: "scroll", whiteSpace: "nowrap" }}>
        {props.list.map(picture => <PictureItem src={picture.src} name={picture.name} price={picture.price} key={picture.id}/>)}
    </div>;
}

export default PictureSlider;