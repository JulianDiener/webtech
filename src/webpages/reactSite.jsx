import React from 'react';
import {picturesItalia,picturesEngland,picturesSpain} from '../pictures';

import PictureSlider from "../components/pictureSlide";
import Footer from "../components/footer"

/*
* Function to create the ReactSite Component
*
* It is build of h2 headers, PictureSliders and a Footer Component
*/


const ReactSite = () => {
    return (
        <div>
            <h2>Italien</h2>
            <PictureSlider list={picturesItalia} />
            <h2>England</h2>
            <PictureSlider list={picturesEngland} />
            <h2>Spain</h2>
            <PictureSlider list={picturesSpain} />
            <Footer name={"HTML-Site"} link={"/htmlSite"} />
        </div>
    );
};
export default ReactSite;