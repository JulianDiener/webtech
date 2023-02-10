import React from 'react';
import data from './pictures.json';
import {
    Link
} from "react-router-dom";

function PictureItem(props_1) {
    return <div style={{ display: "inline-block"}}>
        <img src={data.pictures[props_1.value].src} alt="Test"/>
        <p>{data.pictures[props_1.value].name}</p>
        <p>{data.pictures[props_1.value].type}</p></div>;
}

function PictureList(props_2) {
    const numbers = props_2.numbers;
    const pictureItems = numbers.map((number) =>
        <PictureItem value={number} />
    );
    return (
        <div style={{ overflow: "scroll", whiteSpace: "nowrap" }}>
            {pictureItems}
        </div>
    );
}
const numbers = [0, 1, 0, 1, 0, 1, 0, 1];


const Home = () => {
    return (
        <div>
            <PictureList numbers={numbers} />
            <li><Link to="/aboutus">About us</Link></li>
        </div>
    );
};
export default Home;