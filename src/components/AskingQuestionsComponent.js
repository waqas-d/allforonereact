import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/AskingQuestionsStyle.css';
import { askingQuestions } from '../services/DataServices.js';
import { useState } from 'react';


export default function AskingQuestionsComponent() {

     // This is the third hook useState for asking questions
  const [firstInput, setFirstInput] = useState('');
  const [secondInput, setSecondInput] = useState('');
  const [resultThree, setResultThree] = useState('');

  const getAskingQuestionsResult = async () => {
    const responseThree = await askingQuestions(firstInput, secondInput);
    setResultThree(responseThree);
  }

    return (
        <div className="pagesBackground">
      <Container className = "fontColor">
        <br />
        <br />
        <br />
        <h1 className="text-center">You have Chosen MC 3 <br /> (Asking Questions) </h1>
        <Row>

          <Col>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h3 className="text-white">What is your name? </h3>
          </Col>
          <Col>
            <br />
            <br />
            <br />
            <br />
            <br />
            <input onChange={(e) => setFirstInput(e.target.value)} className= "askingQuestionsInput"></input>
            
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
            <br />
            <br />
            <br />
            <h3 className="text-white">What time did you wake up?</h3>
          </Col>
          <Col>
            <input onChange={(e) => setSecondInput(e.target.value)} className= "secondInput"></input>
            <Button onClick={() => getAskingQuestionsResult()} className="pg4SubmitBtn" >Submit</Button>
          </Col>
        </Row>
        <Row>
          <br />
          <p className="text-center askingQuestionsResult">{resultThree}</p>
        </Row>
      </Container>
  </div>
    )
}
