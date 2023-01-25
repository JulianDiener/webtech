import React from 'react';
import { render } from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link
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