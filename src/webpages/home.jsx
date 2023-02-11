import React from 'react';
import pics from '../pictures';
import {
    Link
} from "react-router-dom";
import PictureItem from "../components/pictureItem";


function createPicture(picture){
    return <PictureItem src={picture.src} name={picture.name} type={picture.type} key={picture.id}/>;
}


const Home = () => {
    return (
        <div>
            <div style={{ overflow: "scroll", whiteSpace: "nowrap" }}>
                {pics.map(createPicture)}
            </div>
            <li><Link to="/aboutus">About us</Link></li>
        </div>
    );
};
export default Home;