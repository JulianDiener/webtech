import React from 'react';

import {
    Link
} from "react-router-dom";


const Jquery = () => {
    return (
        <div>

            <li><Link to="/aboutus">About us</Link></li>
            <li><Link to="/">Home</Link></li>
        </div>
    );
};
export default Jquery;