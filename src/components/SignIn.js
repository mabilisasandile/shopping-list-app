import React from "react";
import '../App.css';
import { useState } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useDispatch } from "react-redux";
import { signIn } from "../authReducer/auth";

const selectAuth = state => state.auth;

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    return (
        <div className="container-signup">
            <h1>Sign In Here</h1>
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

            <button className="btn-3" onClick={() => dispatch(signIn(email, password))}>Sign In</button>
        </div>

    )

}

export default SignIn; 