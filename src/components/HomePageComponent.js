import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/HomeStyle.css';


export default function HomePageComponent() {
  return (

    <div className = "bgHomeImg">
         <Container className= "homePageStyle">
         <br/>
         <br/>
         <br/>
      <h1 className = "text-center homeTitle">Pick A Mini Challenge</h1>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Row className="homeFirstRow">
        <Col>
          <Link to={'pageTwo'} > <Button variant="dark" className= "homePageBtns">1</Button></Link>
          <h3 className="homePageText">Say Hello</h3>
        </Col>
        <Col>
          <Link to={'pageThree'} > <Button variant="dark" className= "homePageBtns">2</Button></Link>
          <h3 className="homePageText">Adding</h3>
        </Col>
        <Col>
          <Link to={'pageFour'} > <Button variant="dark" className= "homePageBtns">3</Button></Link>
          <h3 className="homePageText">Asking Questions</h3>
        </Col>
        <Col>
          <Link to={'pageFive'} > <Button variant="dark" className= "homePageBtns">4</Button></Link>
          <h3 className="homePageText">Greater Or Less</h3>
        </Col>
        <Col>
          <Link to={'pageSix'} > <Button variant="dark" className= "homePageBtns">5</Button></Link>
          <h3 className="homePageText">MadLib</h3>
        </Col>
      </Row>
      <br/>
      <br/>
      <br/>
      <Row className="homeSecondRow">
        <Col>
          <Link to={'pageSeven'} > <Button variant="dark" className= "homePageBtns">6</Button></Link>
          <h3 className="homePageText">Odd Or Even</h3>
        </Col>
        <Col>
          <Link to={'pageEight'} > <Button variant="dark" className= "homePageBtns">7</Button></Link>
          <h3 className="homePageText">ReverseIt Alpha Numeric</h3>
        </Col>
        <Col>
          <Link to={'pageNine'} > <Button variant="dark" className= "homePageBtns">8</Button></Link>
          <h3 className="homePageText">ReverseIt Numbers Only</h3>
        </Col>
        <Col>
          <Link to={'pageTen'} > <Button variant="dark" className= "homePageBtns">9</Button></Link>
          <h3 className="homePageText">Magic 8 Ball</h3>
        </Col>
        <Col>
          <Link to={'pageEleven'} > <Button variant="dark" className= "homePageBtns">10</Button></Link>
          <h3 className="homePageText">Restaurant Picker</h3>
        </Col>
      </Row>
    </Container>
    </div>

   




  )
}
