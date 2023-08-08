import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateItem } from '../actions/dataActions';
import { addtoCart } from "../app/cartSlice";
import image_edt from '../images/edit_image.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLocation } from "react-router-dom";

const Update = ({selectedItem}) => {
    // const location = useLocation();
    // const itemData = location.item;
    // const itemId = itemData.id;
    console.log("Selected item: ", selectedItem);
    const [itemName, setItemName] = useState(selectedItem.itemName);
    const [itemDescription, setItemDescription] = useState(selectedItem.itemDescription);
    const [amount, setAmount] = useState(selectedItem.amount);
    const [quantity, setQuantity] = useState(selectedItem.quantity);

    // const [itemName, setItemName] = useState('');
    // const [itemDescription, setItemDescription] = useState('');
    // const [amount, setAmount] = useState('');
    // const [quantity, setQuantity] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedItem = {
            // id: id,
            itemName,
            itemDescription,
            amount,
            quantity
        }
        dispatch(updateItem(updatedItem));
    }

    return (

        <div>
            <Card style={{ width: '18rem' }} id="1">
                <Card.Img variant="top" src={image_edt} alt="" className="w-100" />
                <Card.Body>
                    <Card.Title>Edit item</Card.Title>
                    <Card.Text>
                        Make changes in the form below:
                    </Card.Text>
                    <input type="text" placeholder="Item name" value={itemName} onChange={(event) => setItemName(event.target.value)} /> <br></br>
                    <input type="text" placeholder="Item description" value={itemDescription} onChange={(event) => setItemDescription(event.target.value)} /> <br></br>
                    <input type="number" placeholder="Price amount" value={amount} onChange={(event) => setAmount(Number(event.target.value))} /> <br></br>
                    <input type="number" placeholder="Item quantity" value={quantity} onChange={(event) => setQuantity(Number(event.target.value))} /> <br></br>
                    <br></br>
                    {/* <Button variant="warning" onClick={() => dispatch(addtoCart({ title, image }))}>Add to cart</Button> */}
                    <Button variant="success" onClick={handleSubmit} >Save changes</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Update;
