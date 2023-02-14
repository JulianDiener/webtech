import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from './home';
import Aboutus from './aboutus';
import Jquery from "./jquery";
const Webpages = () => {
    return(
        <Router>
            <Routes>
            <Route exact path="/" element = {<Home />} />
            <Route path = "/aboutus" element = {<Aboutus />} />
                <Route path = "/jquery" element = {<Jquery />} />
            </Routes>
        </Router>
    );
};
export default Webpages;

//added comment