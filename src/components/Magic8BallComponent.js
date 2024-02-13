import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Magic8BallStyle.css';
import { magic8Ball } from '../services/DataServices.js';
import { useState } from 'react';



export default function Magic8BallComponent() {

    // This is the ninth hook use state for magic 8 ball
    const [magic8BallInput, setMagic8BallInput] = useState('');
    const [resultNine, setResultNine] = useState('');

    const getMagic8Ball = async () => {
        const responseNine = await magic8Ball(magic8BallInput);
        setResultNine(responseNine);
    }

    return (
        <div className="pagesBackground">
            <Container className="fontColor">
                <br />
                <br />
                <br />
                <h1 className="text-center">You have Chosen MC 9 <br /> (Magic 8 Ball) </h1>
                <Row>

                    <Col>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <h3 className="text-white">Pick a number between 1-8: </h3>
                    </Col>
                    <Col>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <input onChange={(e) => setMagic8BallInput(e.target.value)} className="magic8BallInput"></input>
                        <Button onClick={() => getMagic8Ball()} className="pg10SubmitBtn" >Submit</Button>
                    </Col>
                </Row>
                <Row>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p className="text-center magic8BallResult">{resultNine}</p>
                </Row>
            </Container>


        </div>
    )
}
