import React from 'react';
import {picturesItalia,picturesEngland,picturesSpain} from '../pictures';

import PictureSlider from "../components/pictureSlide";
import Footer from "../components/footer"



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