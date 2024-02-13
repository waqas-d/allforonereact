import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/ReverseItNumbersOnlyStyle.css';
import { reverseItNumbersOnly } from '../services/DataServices.js';
import { useState } from 'react';



export default function ReverseItNumbersOnlyComponent() {

     // This is eighth hook use State for reverseit numbers only
  const [userRevNums, setUserRevNums] = useState('');
  const [resultEight, setResultEight] = useState('');

  const getReverseItNumbersOnly = async () => {
    const responseEight = await reverseItNumbersOnly(userRevNums);
    setResultEight(responseEight);
  }

    return (
        <div className="pagesBackground">
        <Container className="fontColor">
            <br />
            <br />
            <br />
            <h1 className="text-center">You have Chosen MC 8 <br /> (ReverseIt Numbers Only) </h1>
            <Row>

                <Col>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h3 className="text-white">Please enter a sequence of numbers only: </h3>
                </Col>
                <Col>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <input onChange={(e) => setUserRevNums(e.target.value)} className="revNumOnlyInput"></input>
                    <Button onClick={() => getReverseItNumbersOnly()} className="pg9SubmitBtn" >Submit</Button>
                </Col>
            </Row>
            <Row>
                <br />
                <br />
                <br />
                <br />
                <br />
                <p className="text-center revNumsOnlyResult">{resultEight}</p>
            </Row>
        </Container>


    </div>
    )
}
