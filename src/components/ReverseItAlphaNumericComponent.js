import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/ReverseItAlphaNumericStyle.css';
import { reverseItAlphaNumeric } from '../services/DataServices';
import { useState } from 'react';


export default function ReverseItAlphaNumericComponent() {

    // This is the seventh hook use State for reverseit alphanumberic
    const [userRevNumsLetts, setUserRevNumsLetts] = useState('');
    const [resultSeven, setResultSeven] = useState('');

    const getReverseItAlphaNumeric = async () => {
        const responseSeven = await reverseItAlphaNumeric(userRevNumsLetts);
        setResultSeven(responseSeven);
    }

    return (
        <div className="pagesBackground">
            <Container className="fontColor">
                <br />
                <br />
                <br />
                <h1 className="text-center">You have Chosen MC 7 <br /> (ReverseIt Alphanumeric) </h1>
                <Row>

                    <Col>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <h3 className="text-white">Please enter a sequence of numbers and letters: </h3>
                    </Col>
                    <Col>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <input onChange={(e) => setUserRevNumsLetts(e.target.value)} className="revAlphaNumInput"></input>
                        <Button onClick={() => getReverseItAlphaNumeric()} className="pg8SubmitBtn" >Submit</Button>
                    </Col>
                </Row>
                <Row>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p className="text-center revAlphaNumResult">{resultSeven}</p>
                </Row>
            </Container>


        </div>
    )
}
