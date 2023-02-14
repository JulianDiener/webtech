import React from 'react';
import {Link} from "react-router-dom";
import {picturesEngland, picturesItalia, picturesSpain} from "../pictures";

const HtmlSite = () => {
    return (
        <div>
            <h2>Italien</h2>
            <div style={{ overflow: "scroll", whiteSpace: "nowrap" }}>
                <div style={{ display: "inline-block"}}>
                    <button className='ButtonClass'>
                        <img src={picturesItalia[0].src} style={{objectFit: 'cover', width: '230px', height: '230px' }} alt="Test"/>
                        <p style={{fontWeight: 'bold'}}>{picturesItalia[0].name}</p>
                        <p>{picturesItalia[0].price}</p>
                    </button></div>
                <div style={{ display: "inline-block"}}>
                    <button className='ButtonClass'>
                        <img src={picturesItalia[1].src} style={{objectFit: 'cover', width: '230px', height: '230px' }} alt="Test"/>
                        <p style={{fontWeight: 'bold'}}>{picturesItalia[1].name}</p>
                        <p>{picturesItalia[1].price}</p>
                    </button></div>
                <div style={{ display: "inline-block"}}>
                    <button className='ButtonClass'>
                        <img src={picturesItalia[2].src} style={{objectFit: 'cover', width: '230px', height: '230px' }} alt="Test"/>
                        <p style={{fontWeight: 'bold'}}>{picturesItalia[2].name}</p>
                        <p>{picturesItalia[2].price}</p>
                    </button></div>
                <div style={{ display: "inline-block"}}>
                    <button className='ButtonClass'>
                        <img src={picturesItalia[3].src} style={{objectFit: 'cover', width: '230px', height: '230px' }} alt="Test"/>
                        <p style={{fontWeight: 'bold'}}>{picturesItalia[3].name}</p>
                        <p>{picturesItalia[3].price}</p>
                    </button></div>
                <div style={{ display: "inline-block"}}>
                    <button className='ButtonClass'>
                        <img src={picturesItalia[4].src} style={{objectFit: 'cover', width: '230px', height: '230px' }} alt="Test"/>
                        <p style={{fontWeight: 'bold'}}>{picturesItalia[4].name}</p>
                        <p>{picturesItalia[4].price}</p>
                    </button></div>
                <div style={{ display: "inline-block"}}>
                    <button className='ButtonClass'>
                        <img src={picturesItalia[5].src} style={{objectFit: 'cover', width: '230px', height: '230px' }} alt="Test"/>
                        <p style={{fontWeight: 'bold'}}>{picturesItalia[5].name}</p>
                        <p>{picturesItalia[5].price}</p>
                    </button></div>
                <div style={{ display: "inline-block"}}>
                    <button className='ButtonClass'>
                        <img src={picturesItalia[6].src} style={{objectFit: 'cover', width: '230px', height: '230px' }} alt="Test"/>
                        <p style={{fontWeight: 'bold'}}>{picturesItalia[6].name}</p>
                        <p>{picturesItalia[6].price}</p>
                    </button></div>
                <div style={{ display: "inline-block"}}>
                    <button className='ButtonClass'>
                        <img src={picturesItalia[7].src} style={{objectFit: 'cover', width: '230px', height: '230px' }} alt="Test"/>
                        <p style={{fontWeight: 'bold'}}>{picturesItalia[7].name}</p>
                        <p>{picturesItalia[7].price}</p>
                    </button></div>
                <div style={{ display: "inline-block"}}>
                    <button className='ButtonClass'>
                        <img src={picturesItalia[8].src} style={{objectFit: 'cover', width: '230px', height: '230px' }} alt="Test"/>
                        <p style={{fontWeight: 'bold'}}>{picturesItalia[9].name}</p>
                        <p>{picturesItalia[9].price}</p>
                    </button></div>
                <div style={{ display: "inline-block"}}>
                    <button className='ButtonClass'>
                        <img src={picturesItalia[9].src} style={{objectFit: 'cover', width: '230px', height: '230px' }} alt="Test"/>
                        <p style={{fontWeight: 'bold'}}>{picturesItalia[9].name}</p>
                        <p>{picturesItalia[9].price}</p>
                    </button></div>
            </div>
            <h2>England</h2>
            <div style={{ overflow: "scroll", whiteSpace: "nowrap" }}>
                <div style={{ display: "inline-block"}}>
                    <button className='ButtonClass'>
                        <img src={picturesEngland[0].src} style={{objectFit: 'cover', width: '230px', height: '230px' }} alt="Test"/>
                        <p style={{fontWeight: 'bold'}}>{picturesEngland[0].name}</p>
                        <p>{picturesEngland[0].price}</p>
                    </button></div>
                <div style={{ display: "inline-block"}}>
                    <button className='ButtonClass'>
                        <img src={picturesEngland[1].src} style={{objectFit: 'cover', width: '230px', height: '230px' }} alt="Test"/>
                        <p style={{fontWeight: 'bold'}}>{picturesEngland[1].name}</p>
                        <p>{picturesEngland[1].price}</p>
                    </button></div>
                <div style={{ display: "inline-block"}}>
                    <button className='ButtonClass'>
                        <img src={picturesEngland[2].src} style={{objectFit: 'cover', width: '230px', height: '230px' }} alt="Test"/>
                        <p style={{fontWeight: 'bold'}}>{picturesEngland[2].name}</p>
                        <p>{picturesEngland[2].price}</p>
                    </button></div>
                <div style={{ display: "inline-block"}}>
                    <button className='ButtonClass'>
                        <img src={picturesEngland[3].src} style={{objectFit: 'cover', width: '230px', height: '230px' }} alt="Test"/>
                        <p style={{fontWeight: 'bold'}}>{picturesEngland[3].name}</p>
                        <p>{picturesEngland[3].price}</p>
                    </button></div>
                <div style={{ display: "inline-block"}}>
                    <button className='ButtonClass'>
                        <img src={picturesEngland[4].src} style={{objectFit: 'cover', width: '230px', height: '230px' }} alt="Test"/>
                        <p style={{fontWeight: 'bold'}}>{picturesEngland[4].name}</p>
                        <p>{picturesEngland[4].price}</p>
                    </button></div>
                <div style={{ display: "inline-block"}}>
                    <button className='ButtonClass'>
                        <img src={picturesEngland[5].src} style={{objectFit: 'cover', width: '230px', height: '230px' }} alt="Test"/>
                        <p style={{fontWeight: 'bold'}}>{picturesEngland[5].name}</p>
                        <p>{picturesEngland[5].price}</p>
                    </button></div>
                <div style={{ display: "inline-block"}}>
                    <button className='ButtonClass'>
                        <img src={picturesEngland[6].src} style={{objectFit: 'cover', width: '230px', height: '230px' }} alt="Test"/>
                        <p style={{fontWeight: 'bold'}}>{picturesEngland[6].name}</p>
                        <p>{picturesEngland[6].price}</p>
                    </button></div>
                <div style={{ display: "inline-block"}}>
                    <button className='ButtonClass'>
                        <img src={picturesEngland[7].src} style={{objectFit: 'cover', width: '230px', height: '230px' }} alt="Test"/>
                        <p style={{fontWeight: 'bold'}}>{picturesEngland[7].name}</p>
                        <p>{picturesEngland[7].price}</p>
                    </button></div>
                <div style={{ display: "inline-block"}}>
                    <button className='ButtonClass'>
                        <img src={picturesEngland[8].src} style={{objectFit: 'cover', width: '230px', height: '230px' }} alt="Test"/>
                        <p style={{fontWeight: 'bold'}}>{picturesEngland[9].name}</p>
                        <p>{picturesEngland[9].price}</p>
                    </button></div>
                <div style={{ display: "inline-block"}}>
                    <button className='ButtonClass'>
                        <img src={picturesEngland[9].src} style={{objectFit: 'cover', width: '230px', height: '230px' }} alt="Test"/>
                        <p style={{fontWeight: 'bold'}}>{picturesEngland[9].name}</p>
                        <p>{picturesEngland[9].price}</p>
                    </button></div>
            </div>
            <h2>Spain</h2>
            <div style={{ overflow: "scroll", whiteSpace: "nowrap" }}>
                <div style={{ display: "inline-block"}}>
                    <button className='ButtonClass'>
                        <img src={picturesSpain[0].src} style={{objectFit: 'cover', width: '230px', height: '230px' }} alt="Test"/>
                        <p style={{fontWeight: 'bold'}}>{picturesSpain[0].name}</p>
                        <p>{picturesSpain[0].price}</p>
                    </button></div>
                <div style={{ display: "inline-block"}}>
                    <button className='ButtonClass'>
                        <img src={picturesSpain[1].src} style={{objectFit: 'cover', width: '230px', height: '230px' }} alt="Test"/>
                        <p style={{fontWeight: 'bold'}}>{picturesSpain[1].name}</p>
                        <p>{picturesSpain[1].price}</p>
                    </button></div>
                <div style={{ display: "inline-block"}}>
                    <button className='ButtonClass'>
                        <img src={picturesSpain[2].src} style={{objectFit: 'cover', width: '230px', height: '230px' }} alt="Test"/>
                        <p style={{fontWeight: 'bold'}}>{picturesSpain[2].name}</p>
                        <p>{picturesSpain[2].price}</p>
                    </button></div>
                <div style={{ display: "inline-block"}}>
                    <button className='ButtonClass'>
                        <img src={picturesSpain[3].src} style={{objectFit: 'cover', width: '230px', height: '230px' }} alt="Test"/>
                        <p style={{fontWeight: 'bold'}}>{picturesSpain[3].name}</p>
                        <p>{picturesSpain[3].price}</p>
                    </button></div>
                <div style={{ display: "inline-block"}}>
                    <button className='ButtonClass'>
                        <img src={picturesSpain[4].src} style={{objectFit: 'cover', width: '230px', height: '230px' }} alt="Test"/>
                        <p style={{fontWeight: 'bold'}}>{picturesSpain[4].name}</p>
                        <p>{picturesSpain[4].price}</p>
                    </button></div>
                <div style={{ display: "inline-block"}}>
                    <button className='ButtonClass'>
                        <img src={picturesSpain[5].src} style={{objectFit: 'cover', width: '230px', height: '230px' }} alt="Test"/>
                        <p style={{fontWeight: 'bold'}}>{picturesSpain[5].name}</p>
                        <p>{picturesSpain[5].price}</p>
                    </button></div>
                <div style={{ display: "inline-block"}}>
                    <button className='ButtonClass'>
                        <img src={picturesSpain[6].src} style={{objectFit: 'cover', width: '230px', height: '230px' }} alt="Test"/>
                        <p style={{fontWeight: 'bold'}}>{picturesSpain[6].name}</p>
                        <p>{picturesSpain[6].price}</p>
                    </button></div>
                <div style={{ display: "inline-block"}}>
                    <button className='ButtonClass'>
                        <img src={picturesSpain[7].src} style={{objectFit: 'cover', width: '230px', height: '230px' }} alt="Test"/>
                        <p style={{fontWeight: 'bold'}}>{picturesSpain[7].name}</p>
                        <p>{picturesSpain[7].price}</p>
                    </button></div>
                <div style={{ display: "inline-block"}}>
                    <button className='ButtonClass'>
                        <img src={picturesSpain[8].src} style={{objectFit: 'cover', width: '230px', height: '230px' }} alt="Test"/>
                        <p style={{fontWeight: 'bold'}}>{picturesSpain[9].name}</p>
                        <p>{picturesSpain[9].price}</p>
                    </button></div>
                <div style={{ display: "inline-block"}}>
                    <button className='ButtonClass'>
                        <img src={picturesSpain[9].src} style={{objectFit: 'cover', width: '230px', height: '230px' }} alt="Test"/>
                        <p style={{fontWeight: 'bold'}}>{picturesSpain[9].name}</p>
                        <p>{picturesSpain[9].price}</p>
                    </button></div>
            </div>
            <div style={{marginTop:"20px"}}>
                <footer>
                    <div className='footerDiv'>
                        <Link  className="linkClass" to="/">React-Site</Link>
                        <p>Copyright &copy; 2023</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};
export default HtmlSite;