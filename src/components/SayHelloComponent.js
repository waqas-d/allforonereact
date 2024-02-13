import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/SayHelloStyle.css';
import { sayHello } from '../services/DataServices';
import { useState } from 'react';

export default function SayHelloComponent() {

    // This is the first hook useState for saying hello
    const [userName, setUserName] = useState('');
    const [resultOne, setResultOne] = useState('');
  
    const getSayHello = async () => {
      const responseOne = await sayHello(userName);
      setResultOne(responseOne);
      console.log(resultOne);
    }

  return (

    <div className="pagesBackground">
      <Container className = "fontColor">
        <br />
        <br />
        <br />
        <h1 className="text-center sayHelloTitle">You have Chosen MC 1 <br /> (Say Hello) </h1>
        <Row>

          <Col>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h3 className="text-white">Please Enter Your Name: </h3>
          </Col>
          <Col>
            <br />
            <br />
            <br />
            <br />
            <br />
            <input onChange={(e) => setUserName(e.target.value)} className= "sayHelloInput"></input>
            <Button onClick={() => getSayHello()} className="pg2SubmitBtn" >Submit</Button>
          </Col>
        </Row>
        <Row>
          <br />
          <br />
          <br />
          <br />
          <br />
          <p className="text-center sayHelloResult">{resultOne}</p>
        </Row>
      </Container>


    </div>
  )
}
