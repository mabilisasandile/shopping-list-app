import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../reducers/data";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { deleteItem } from "../actions/actions";
import { deleteItem } from "../reducers/firestore";
import Update from "./Update";

const ViewList = ({ fetchData }) => {

    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const dispatch = useDispatch();
    const { loading, error, data } = useSelector((state) => state.data);
    const navigate = useNavigate();
    let item = [];

    useEffect(() => {
        dispatch(fetchData);
        console.log("View items:", data);
        setItems(data);
    }, [items]);

    const handleEdit = async (id) => {
        console.log("View ID:", id);
        item = data.filter(item => item.id === id);
    
        console.log("Fetched item: ", item);
        setSelectedItem(item);
        navigate('/update', {state: {item: item}} );
    }

    const handleDelete = (id) => {
        dispatch(
          deleteItem({
            id: id
          })
        );
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
            {<Update selectedItem={selectedItem}/>}
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
