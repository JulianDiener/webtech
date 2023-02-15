import React from "react";
import {
    Link
} from "react-router-dom";

/*
* Function to create the Footer Component
*/

function Footer(props){
    return <div style={{marginTop: "20px"}}>
        <footer>
            <div className='footerDiv'>
                <Link className="linkClass" to={props.link}>{props.name}</Link>
                <p>Copyright &copy; 2023</p>
            </div>
        </footer>
    </div>;
}

export default Footer;
