import React from 'react';
import '../App.scss';

const NavBar = () => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#Home">Wild Circus</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="container" id="navbarNavAltMarkup">
                <div className="row">
                    <div className="offset-lg-2 col-lg-2"><a className="nav-item nav-link active" href="#Home">Home <span className="sr-only">(current)</span></a></div>
                    <div className="col-lg-2"><a className="nav-item nav-link" href="#Artist">Artist</a></div>
                    <div className="col-lg-2"><a className="nav-item nav-link" href="#Show">Show</a></div>
                    <div className="col-lg-2"><a className="nav-item nav-link" href="#Store">Store</a></div>
                    <div className="col-lg-2"><a className="nav-item nav-link" href="#Contact">Contact Us</a></div>
                </div>
            </div>
        </nav>
    </div>
);

export default NavBar;
