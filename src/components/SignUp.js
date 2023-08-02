import React from "react";
import '../App.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useSelector, useDispatch } from "react-redux";
import { signUp } from "../authReducer/auth";

const selectAuth = state => state.auth;

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const authState = useSelector(selectAuth);
    const dispatch = useDispatch();

    return (
        <div className="container-signup">
            <h1>Register Here</h1>
            <br></br>
            <input
                className="input-signup"
                type="email" placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
            />

            <br />
            <br></br>

            <input
                className="input-signup"
                type="password"
                placeholder="Enter password"
                onChange={(event) => setPassword(event.target.value)} /> <br />

            <br></br>

            <button className="btn-3" onClick={() => dispatch(signUp(email, password))}>Sign Up</button>
        </div>

    )

}

export default SignUp; 