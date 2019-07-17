import React from 'react';
import '../App.scss';

const Footer = () => (
    <div className="footer" id="Contact">
        <h1>Contact Us</h1>
        <hr/>
        <div className="container">
            <div className="row">
                <div className="col-4"><h3>Adress</h3></div>
                <div className="col-4"><h3>City</h3></div>
                <div className="col-4"><h3>Phone</h3></div>
            </div>
            <div className="row">
                <div className="col-4"><p>2 rue Denis Papin</p></div>
                <div className="col-4"><p>Reims</p></div>
                <div className="col-4"><p>0326958471</p></div>
            </div>
        </div>
    </div>
);

export default Footer;
