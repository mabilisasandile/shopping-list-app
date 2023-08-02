
import { useState } from 'react';
import { async } from '@firebase/util';
import { addTransaction } from "../firestoreReducer/firestore";
import { useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AddTransaction(props) {

    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [amount, setAmount] = useState('');
    imageUrl [imageUrl, setImageUrl] = useState('');

    const dispatch = useDispatch();

    const add = async () => {
        dispatch(addTransaction({
            itemName: itemName,
            itemDescription: itemDescription,
            amount: amount,
            imageUrl: imageUrl
        }))
    }

    return (
        <div>
            <h1>Add a new transaction</h1>
            <Card style={{ width: '18rem' }}>
            <input type="text" placeholder="Enter item name" onChange={(event) => setItemName(event.target.value)} /> <br></br>
            <input type="text" placeholder="Enter item 2" onChange={(event) => setItemDescription(event.target.value)} /> <br></br>
            <input type="number" placeholder="Enter amount 1" onChange={(event) => setAmount(Number(event.target.value))} /> <br></br>
            <input type="text" placeholder="Enter amount 2" onChange={(event) => setImageUrl(event.target.value)} /> <br></br>
            <br></br>
            <Button variant="Success" onClick={add}>Add item</Button>
            </Card>
            
        </div>
    )
}

export default AddTransaction