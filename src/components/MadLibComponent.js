import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/MadLibStyle.css';
import { madLib } from '../services/DataServices';
import { useState } from 'react';


export default function MadLibComponent() {

    // This is the fifth hook useState for madlib
    const [fullName, setFullName] = useState('');
    const [verbEndingWithS, setVerbEndingWithS] = useState('');
    const [favoriteSport, setFavoriteSport] = useState('');
    const [pronounHeOrShe, setPronounHeOrShe] = useState('');
    const [verb, setVerb] = useState('');
    const [adverb, setAdverb] = useState('');
    const [preposition, setPreposition] = useState('');
    const [timeWokeUp, setTimeWokeUp] = useState('');
    const [anotherPronoun, setAnotherPronoun] = useState('');
    const [verbPastTense, setVerbPastTense] = useState('');
    const [resultFive, setResultFive] = useState('');

    const getMadLibResult = async () => {
        const responseFive = await madLib(fullName, verbEndingWithS, favoriteSport, pronounHeOrShe, verb, adverb, preposition, timeWokeUp, anotherPronoun, verbPastTense);
        setResultFive(responseFive);
    }
    return (
        <div className="pagesBackground">
            <Container className="fontColor">
                <br />
                <br />
                <br />
                <h1 className="text-center">You have Chosen MC 5 <br /> (MadLib) </h1>
                <Row>

                    <Col className="madLibAlign">
                        <input onChange={(e) => setFullName(e.target.value)} className="madLibInputs" placeholder="Please enter your full name" ></input>
                    </Col>

                </Row>

                <Row>

                    <Col className="madLibAlign">
                        <input onChange={(e) => setVerbEndingWithS(e.target.value)} className="madLibInputs" placeholder="Enter a verb ending with an 'S'" ></input>
                    </Col>

                </Row>

                <Row>

                    <Col className="madLibAlign">
                        <input onChange={(e) => setFavoriteSport(e.target.value)} className="madLibInputs" placeholder="Enter your favorite sport" ></input>
                    </Col>

                </Row>


                <Row>

                    <Col className="madLibAlign">
                        <input onChange={(e) => setPronounHeOrShe(e.target.value)} className="madLibInputs" placeholder="Enter a pronoun like he/she" ></input>
                    </Col>

                </Row>

                <Row>

                    <Col className="madLibAlign">
                        <input onChange={(e) => setVerb(e.target.value)} className="madLibInputs" placeholder="Enter a verb" ></input>
                    </Col>

                </Row>

                <Row>

                    <Col className="madLibAlign">
                        <input onChange={(e) => setAdverb(e.target.value)} className="madLibInputs" placeholder="Enter an adverb" ></input>
                    </Col>

                </Row>

                <Row>

                    <Col className="madLibAlign">
                        <input onChange={(e) => setPreposition(e.target.value)} className="madLibInputs" placeholder="Enter an preposition" ></input>
                    </Col>

                </Row>

                <Row>

                    <Col className="madLibAlign">
                        <input onChange={(e) => setTimeWokeUp(e.target.value)} className="madLibInputs" placeholder="Enter the time you woke up" ></input>
                    </Col>

                </Row>

                <Row>

                    <Col className="madLibAlign">
                        <input onChange={(e) => setAnotherPronoun(e.target.value)} className="madLibInputs" placeholder="Enter another pronoun" ></input>
                    </Col>

                </Row>

                <Row>

                    <Col className="madLibAlign">
                        <input onChange={(e) => setVerbPastTense(e.target.value)} className="madLibInputs" placeholder="Enter a verb past tense" ></input>
                    </Col>

                </Row>

                <Col>
                    <Button onClick={() => getMadLibResult()} className="pg6SubmitBtn" >Submit</Button>
                </Col>

                <Row>
                    <p className="text-center madLibResult">{resultFive}</p>
                </Row>
            </Container>
        </div>
    )
}
