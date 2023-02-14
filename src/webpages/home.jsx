import React from 'react';
import {picturesItalia,picturesEngland,picturesSpain} from '../pictures';
import {
    Link
} from "react-router-dom";

import PictureSlider from "../components/pictureSlide";



const Home = () => {
    return (
        <div>
            <h2>Italien</h2>
            <PictureSlider list={picturesItalia} />
            <h2>England</h2>
            <PictureSlider list={picturesEngland} />
            <h2>Spain</h2>
            <PictureSlider list={picturesSpain} />
            <li><Link to="/aboutus">About us</Link></li>
        </div>
    );
};
export default Home;