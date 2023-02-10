import React from 'react';
import data from './pictures.json';
import {
    Link
} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <img src={data.pictures[0].src} alt="Test"/>
            <p>{data.pictures[0].name}</p>
            <p>{data.pictures[0].type}</p>
            <li><Link to="/aboutus">About us</Link></li>
        </div>
    );
};
export default Home;