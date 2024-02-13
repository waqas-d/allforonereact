import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/RestaurantPickerStyle.css';
import { restaurantPicker } from '../services/DataServices';
import { useState } from 'react';


export default function RestaurantPickerComponent() {


    // This is the tenth hook use state for restaurant picker
    const [userInput, setUserInput] = useState('');
    const [resultTenth, setResultTenth] = useState('');

    const getRestaurantPicker = async () => {
        const responseTenth = await restaurantPicker(userInput);
        setResultTenth(responseTenth);
    }
    return (
        <div className="pagesBackground">
            <Container className="fontColor">
                <br />
                <br />
                <br />
                <h1 className="text-center">You have Chosen MC 10 <br /> (Restaurant Picker) </h1>
                <Row>

                    <Col>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <h3 className="text-white">Please choose a category of “fast food”, “pizza”, or “casual dining” to pick a restaurant: </h3>
                    </Col>
                    <Col>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <input onChange={(e) => setUserInput(e.target.value)} className="restaurantPickerInput"></input>
                        <Button onClick={() => getRestaurantPicker()} className="pg11SubmitBtn" >Submit</Button>
                    </Col>
                </Row>
                <Row>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p className="text-center restaurantPickerResult">{resultTenth}</p>
                </Row>
            </Container>


        </div>
    )
}
