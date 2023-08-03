import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../firestoreReducer/data";

const ViewList =()=>{

    const dispatch = useDispatch();
    const {loading, error, data} = useSelector((state)=> state.data);

    useEffect(()=>{
        dispatch(fetchData);
    }, []);

    const handleEdit =()=>{

    }

    const handleDelete =()=>{

    }

    return (
        <div className="container">
            <h4> List of your items </h4>
            <table className="table-view-rooms">
                <thead>
                    <tr>
                        <th>Item name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>
                                {item.itemName}
                                {item.itemDescription}
                                {item.amount}
                                {item.itemQuantity}
                                <button className="btn-edit" onClick={() => handleEdit(item.id)}>Edit</button> <br></br> <br></br>
                                <button className="btn-delete" onClick={() => handleDelete(item.id, item.value)}>Delete</button> <br />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewList;