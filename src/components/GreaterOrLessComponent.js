import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/GreaterOrLessStyle.css';
import { greaterOrLess } from '../services/DataServices.js';
import { useState } from 'react';


export default function GreaterOrLessComponent() {

    // This is the fourth hook useState for greater or less
    const [firstNumStatement, setFirstStatement] = useState('');
    const [secondNumStatement, setSecondStatement] = useState('');
    const [resultFour, setResultFour] = useState('');

    const getGreaterOrLessResult = async () => {
        const responseFour = await greaterOrLess(firstNumStatement, secondNumStatement);
        setResultFour(responseFour);
    }
    return (
        <div className="pagesBackground">
            <Container className="fontColor">
                <br />
                <br />
                <br />
                <h1 className="text-center">You have Chosen MC 4 <br /> (Greater or Less) </h1>
                <Row>

                    <Col>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <h3 className="text-white">Please Enter A Number:  </h3>
                    </Col>
                    <Col>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <input onChange={(e) => setFirstStatement(e.target.value)} className="greaterOrLessInput"></input>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br />
                        <br />
                        <br />
                        <br />
                        <h3 className="text-white">Please Enter Another Number: </h3>
                    </Col>
                    <Col>
                        <input onChange={(e) => setSecondStatement(e.target.value)} className="secondInput"></input>
                        <Button onClick={() => getGreaterOrLessResult()} className="pg5SubmitBtn" >Submit</Button>
                    </Col>
                </Row>
                <Row>
                    <br />
                    <p className="text-center greaterOrLessResult">{resultFour}</p>
                </Row>
            </Container>
        </div>
    )
}
