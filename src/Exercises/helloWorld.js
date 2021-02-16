import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function helloWorld(){


    return (
        <Container fluid="md" className="helloWorld">
            <Row>
                <Col>Hello World!</Col>
            </Row>
        </Container>

    )


}