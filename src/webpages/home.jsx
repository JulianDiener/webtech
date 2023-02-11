import React from 'react';
import pics from '../pictures';
import {
    Link
} from "react-router-dom";
import PictureItem from "../components/pictureItem";





const Home = () => {
    return (
        <div>
            <div style={{ overflow: "scroll", whiteSpace: "nowrap" }}>
                {pics.map(picture => <PictureItem src={picture.src} name={picture.name} type={picture.type} key={picture.id}/>)}
            </div>
            <li><Link to="/aboutus">About us</Link></li>
        </div>
    );
};
export default Home;