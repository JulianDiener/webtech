import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import ReactSite from './reactSite';
import HtmlSite from './htmlSite';

/*
* Used  Routes to navigate between React-Side Component and HTML-Side Component
*
* The PictureItem is build of a button in which an image and to p's are placed
*/
const Webpages = () => {
    return(
        <Router>
            <Routes>
            <Route exact path="/" element = {<ReactSite />} />
            <Route path = "/htmlSite" element = {<HtmlSite />} />
            </Routes>
        </Router>
    );
};
export default Webpages;

//added comment