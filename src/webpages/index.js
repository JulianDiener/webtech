import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import ReactSite from './reactSite';
import HtmlSite from './htmlSite';
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