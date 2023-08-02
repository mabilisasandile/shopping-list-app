
import React from "react";
import '../App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Home = () => {

    return (
        <div className="container">
            <h2>Home</h2>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Item:</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Add to cart</Button>
                </Card.Body> 
            </Card>
        </div>
    );
}

export default Home;