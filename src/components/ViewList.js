<<<<<<< HEAD
import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../firestoreReducer/data";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { deleteItem } from "../actions/actions";

const ViewList = ({ fetchData }) => {

    const [items, setItems] = useState([]);
    const dispatch = useDispatch();
    const { loading, error, data } = useSelector((state) => state.data);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchData);
        console.log("View items:", data);
        setItems(data);
    }, []);

    const handleEdit = (id) => {
        console.log("View ID:", id);
        const [item] = items.filter(item => item.id === id);
    
        console.log("Fetched item: ", item);
        navigate('/update', {state: {item: item}} );
    }

    const handleDelete = (itemId) => {
        dispatch(deleteItem(itemId));
        // deleteItem(itemId);
    }

    return (
        <div className="container">
            <h4> List of your items </h4>
            <table className="table-view">
                <thead>
                    <tr>
                        <th>Item name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.itemName}</td>
                            <td>{item.itemDescription}</td>
                            <td>{item.amount}</td>
                            <td>{item.itemQuantity}</td>
                            <td><Button variant="info" onClick={() => handleEdit(item.id)}>Edit</Button></td>
                            <td><Button variant="warning" onClick={() => handleDelete(item.id)}>Delete</Button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const mapStateToProps = (state) => ({
    data: state.data,
});

const mapDispatchToProps = {
    fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewList);
=======
>>>>>>> 70e3f3cad4a792de095288adb13cea4d850d90da
