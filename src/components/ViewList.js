import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../firestoreReducer/data";

const ViewList = ({ fetchData }) => {

    const dispatch = useDispatch();
    const { loading, error, data } = useSelector((state) => state.data);

    useEffect(() => {
        dispatch(fetchData);
    }, []);

    const handleEdit = () => {

    }

    const handleDelete = () => {

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
                            <td>{item.itemName}</td>
                            <td>{item.itemDescription}</td>
                            <td>{item.amount}</td>
                            <td>{item.itemQuantity}</td>
                            <td><button className="btn-edit" onClick={() => handleEdit(item.id)}>Edit</button></td>
                            <td><button className="btn-delete" onClick={() => handleDelete(item.id, item.value)}>Delete</button></td>
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
// export default ViewList;