import React from 'react';
import data from './pictures.json';
import {
    Link
} from "react-router-dom";

function Im(props) {
       return (<div>
               <img src={data.pictures[props.number].src} alt="Test"/>
               <p>{data.pictures[props.number].name}</p>
               <p>{data.pictures[props.number].type}</p>
       </div>
                );
}

const Home = () => {
    return (
        <div>
            <Im number={0} />
            <Im number={1} />
            <li><Link to="/aboutus">About us</Link></li>
        </div>
    );
};
export default Home;