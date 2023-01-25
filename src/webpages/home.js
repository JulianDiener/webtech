import React from 'react';
import {
    Link
} from "react-router-dom";
const Home = () => {
    return (
        <div>
            <h1>Welcome to Xcelvations</h1>
            <p>This is home page</p>
            <li><Link to="/aboutus">About us</Link></li>
        </div>
    );
};
export default Home;