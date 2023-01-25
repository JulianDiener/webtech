import React from 'react';
import {Link} from "react-router-dom";
const Aboutus = () => {
    return (
        <div>
            <h1>About us</h1>
            <p>This is about us page</p>
            <li><Link to="/aboutus">About us</Link></li>
        </div>
    );
};
export default Aboutus;