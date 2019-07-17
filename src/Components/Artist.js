import React from 'react';
import wilders from './wilder'


const Artist = () => (
    <div id="Artist" className="artist">
        <h1>Artists</h1>
        <div className="container">
        {wilders.map(wilder => (<div>
            <div className="row" >
                <div className="col-xs-12 col-lg-2"><img className="picture" src={wilder.profilePic} alt={wilder.firstName} style={{width: "100px", height: "100px"}} /></div>
                <div className=" description-artist col-xs-12 offset-lg-2 col-lg-8">
                    <h2>{wilder.firstName}</h2>
                    <p>{wilder.description}</p>
                </div>
            </div>
        </div>))}
        </div>
        
    </div>
);

export default Artist;
