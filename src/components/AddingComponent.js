import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/AddingStyle.css';
import { addingNumbers } from '../services/DataServices.js';
import { useState } from 'react';


export default function AddingComponent() {


  // This is the second hook useState for adding numbers
  const [firstNum, setFirstNum] = useState('');
  const [secondNum, setSecondNum] = useState('');
  const [resultTwo, setResultTwo] = useState('');

  const getAddingNumsResult = async () => {
    const responseTwo = await addingNumbers(firstNum, secondNum);
    setResultTwo(responseTwo);
  }

  return (
    <div className="pagesBackground">
      <Container className = "fontColor">
        <br />
        <br />
        <br />
        <h1 className="text-center">You have Chosen MC 2 <br /> (Adding) </h1>
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
            <input onChange={(e) => setFirstNum(e.target.value)} className= "addingInput"></input>
            
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
            <input onChange={(e) => setSecondNum(e.target.value)} className= "secondAddingInput"></input>
            <Button onClick={() => getAddingNumsResult()} className="pg3SubmitBtn" >Submit</Button>
          </Col>
        </Row>
        <Row>
          <br />
          <p className="text-center addingResult">{resultTwo}</p>
        </Row>
      </Container>
  </div>
  )
}
