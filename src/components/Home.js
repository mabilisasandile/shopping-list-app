
import React from "react";
import '../App.css';
import { useState } from "react";
import image1 from '../images/clothing.jpg';
import image2 from '../images/grocery.jpg';
import image3 from '../images/appliance.jpg';
import image4 from '../images/drinks.jpg';
import image5 from '../images/phone.jpg'
import { addItem } from "../firestoreReducer/firestore";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";
import { addtoCart } from "../app/cartSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Home = ({ title, image }) => {
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [amount, setAmount] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const dispatch = useDispatch();

    const add = async () => {
        dispatch(addItem({
            itemName: itemName,
            itemDescription: itemDescription,
            amount: amount,
            quantity: quantity
        }))
    }

    const cartItems = useSelector(state => state.cart.cart);
    const navigate = useNavigate();

    const goToCheckout = () => {
        navigate('/checkout');
    }

    return (
        <div className="w-100 d-flex flex-column">

            <div className="d-flex justify-content-between px-4 bg-dark text-white align-items-right">
                <h2>Home</h2>
                <FontAwesomeIcon icon={faCartShopping} onClick={goToCheckout} className="icon-cart" />
                <h4><small> {cartItems.length}</small></h4>
            </div>
            <br></br>
            <br></br>
            <Link to={'/viewlist'}><b>View shopping list</b></Link>
            <br></br>
            <br></br>
            <h2>Add items to shopping list</h2>
            <div className="container border w-50">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <Card style={{ width: '18rem' }} id="1">
                                    <Card.Img variant="top" src={image1} alt="" className="w-100" />
                                    <Card.Body>
                                        <Card.Title>Clothing item(s)</Card.Title>
                                        <Card.Text>
                                            Fill in your item of choice in the form below:
                                        </Card.Text>
                                        <input type="text" placeholder="Item name" onChange={(event) => setItemName(event.target.value)} /> <br></br>
                                        <input type="text" placeholder="Item description" onChange={(event) => setItemDescription(event.target.value)} /> <br></br>
                                        <input type="number" placeholder="Price amount" onChange={(event) => setAmount(Number(event.target.value))} /> <br></br>
                                        <input type="number" placeholder="Item quantity" onChange={(event) => setQuantity(Number(event.target.value))} /> <br></br>
                                        <br></br>
                                        <Button variant="warning" onClick={() => dispatch(addtoCart({ title, image }))}>Add to cart</Button>
                                        <Button variant="success" onClick={add} >Save</Button>
                                    </Card.Body>
                                </Card>

                            </td>
                            <td>
                                <Card style={{ width: '18rem' }} id="2">
                                    <Card.Img variant="top" src={image2} alt="" className="w-100" />
                                    <Card.Body>
                                        <Card.Title>Grocery item(s)</Card.Title>
                                        <Card.Text>
                                            Fill in your item of choice in the form below:
                                        </Card.Text>
                                        <input type="text" placeholder="Item name" onChange={(event) => setItemName(event.target.value)} /> <br></br>
                                        <input type="text" placeholder="Item description" onChange={(event) => setItemDescription(event.target.value)} /> <br></br>
                                        <input type="number" placeholder="Price amount" onChange={(event) => setAmount(Number(event.target.value))} /> <br></br>
                                        <input type="number" placeholder="Item quantity" onChange={(event) => setQuantity(Number(event.target.value))} /> <br></br>
                                        <br></br>
                                        <Button variant="warning" onClick={() => dispatch(addtoCart({ title, image }))}>Add to cart</Button>
                                        <Button variant="success" onClick={add} >Save</Button>
                                    </Card.Body>
                                </Card>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Card style={{ width: '18rem' }} id="3">
                                    <Card.Img variant="top" src={image3} alt="" className="w-100" />
                                    <Card.Body>
                                        <Card.Title>Home appliance(s)</Card.Title>
                                        <Card.Text>
                                            Fill in your item of choice in the form below:
                                        </Card.Text>
                                        <input type="text" placeholder="Item name" onChange={(event) => setItemName(event.target.value)} /> <br></br>
                                        <input type="text" placeholder="Item description" onChange={(event) => setItemDescription(event.target.value)} /> <br></br>
                                        <input type="number" placeholder="Price amount" onChange={(event) => setAmount(Number(event.target.value))} /> <br></br>
                                        <input type="number" placeholder="Item quantity" onChange={(event) => setQuantity(Number(event.target.value))} /> <br></br>
                                        <br></br>
                                        <Button variant="warning" onClick={() => dispatch(addtoCart({ title, image }))}>Add to cart</Button>
                                        <Button variant="success" onClick={add} >Save</Button>
                                    </Card.Body>
                                </Card>
                            </td>
                            <td>
                                <Card style={{ width: '18rem' }} className="card-add" id="3">
                                    <Card.Img variant="top" src={image4} alt="" className="w-100" />
                                    <Card.Body>
                                        <Card.Title>Drink(s)</Card.Title>
                                        <Card.Text>
                                            Fill in your item of choice in the form below:
                                        </Card.Text>
                                        <input type="text" placeholder="Item name" onChange={(event) => setItemName(event.target.value)} /> <br></br>
                                        <input type="text" placeholder="Item description" onChange={(event) => setItemDescription(event.target.value)} /> <br></br>
                                        <input type="number" placeholder="Price amount" onChange={(event) => setAmount(Number(event.target.value))} /> <br></br>
                                        <input type="number" placeholder="Item quantity" onChange={(event) => setQuantity(Number(event.target.value))} /> <br></br>
                                        <br></br>
                                        <Button variant="warning" onClick={() => dispatch(addtoCart({ title, image }))}>Add to cart</Button>
                                        <Button variant="success" onClick={add} >Save</Button>
                                    </Card.Body>
                                </Card>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <Card style={{ width: '18rem' }} className="card-add" id="3">
                                    <Card.Img variant="top" src={image5} alt="" className="w-100" />
                                    <Card.Body>
                                        <Card.Title>Other(s)</Card.Title>
                                        <Card.Text>
                                            Fill in your item of choice in the form below:
                                        </Card.Text>
                                        <input type="text" placeholder="Item name" onChange={(event) => setItemName(event.target.value)} /> <br></br>
                                        <input type="text" placeholder="Item description" onChange={(event) => setItemDescription(event.target.value)} /> <br></br>
                                        <input type="number" placeholder="Price amount" onChange={(event) => setAmount(Number(event.target.value))} /> <br></br>
                                        <input type="number" placeholder="Item quantity" onChange={(event) => setQuantity(Number(event.target.value))} /> <br></br>
                                        <br></br>
                                        <Button variant="warning" onClick={() => dispatch(addtoCart({ title, image }))}>Add to cart</Button>
                                        <Button variant="success" onClick={add} >Save</Button>
                                    </Card.Body>
                                </Card>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <br></br>
            <div className="border w-50">

            </div>
            <br></br>
            <div className="border w-50">

            </div>
            <br></br>
            <div className="border w-50">

            </div>

        </div>
    );
}

export default Home;
