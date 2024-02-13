import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/OddOrEvenStyle.css';
import { oddOrEven } from '../services/DataServices.js';
import { useState } from 'react';


export default function OddOrEvenComponent() {

    // This is the sixth hook use state for odd or even
    const [oddEvenNum, setOddEvenNum] = useState('');
    const [resultSix, setResultSix] = useState('');

    const getOddOrEven = async () => {
        const responseSix = await oddOrEven(oddEvenNum);
        setResultSix(responseSix);
    }
    return (
        <div className="pagesBackground">
            <Container className="fontColor">
                <br />
                <br />
                <br />
                <h1 className="text-center">You have Chosen MC 6 <br /> (Odd or Even) </h1>
                <Row>

                    <Col>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <h3 className="text-white">Please Enter A Number: </h3>
                    </Col>
                    <Col>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <input onChange={(e) => setOddEvenNum(e.target.value)} className="oddEvenInput"></input>
                        <Button onClick={() => getOddOrEven()} className="pg7SubmitBtn" >Submit</Button>
                    </Col>
                </Row>
                <Row>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p className="text-center oddOrEvenResult">{resultSix}</p>
                </Row>
            </Container>


        </div>
    )
}
