import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from './home';
import Aboutus from './aboutus';
const Webpages = () => {
    return(
        <Router>
            <Routes>
            <Route exact path="/" element = {<Home />} />
            <Route path = "/aboutus" element = {<Aboutus />} />
            </Routes>
        </Router>
    );
};
export default Webpages;

//added comment