import React from 'react';
import wilders from './wilder'
import { Container, Row, Col } from 'reactstrap';


const Artist = () => (
    <Container>
        <Row>
        <h1>Artist</h1>
        </Row>
        <Row>
        {wilders.map(wilder => (<div>
            <Col lg="4" xs="12"><img src={wilder.profilePic} alt={wilder.firstName} style={{width: "100px", height: "100px"}} /></Col>
            <Col lg="4" xs="12"><p>{wilder.firstName}</p></Col>
            <Col lg="4" xs="12"><p>{wilder.description}</p></Col>
        </div>))}
        </Row>
    </Container>
);

export default Artist;
