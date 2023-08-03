
import React from "react";
import '../App.css';
import { useSelector, useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import removefromCart from '../app/cartSlice';

function Checkout() {
    const cart_items = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Checkout</h2>
            <h4>Cart items</h4>
            {
                cart_items.map(item => {
                    return (
                        <div>
                            <img src={item.image} className="c-image" alt="image" />
                            <div>
                                <h4>{item.title}</h4>
                                <Button variant="warning" onClick={() => dispatch(removefromCart({id: item.id}))}>Remove</Button>
                            </div>
                        </div>   
                    )
                })
            }
        </div>
        
    );
}

export default Checkout;