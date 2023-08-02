import { createSlice } from "@reduxjs/toolkit";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from "../config/firebase";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const authSlice = createSlice({

    name: "auth",
    initialState: {
        user: {
            email: "",
            password: ""
        }
    },

    reducers: {
        signUp: (state, action) => {

            createUserWithEmailAndPassword(auth, action.payload, action.payload)
                .then(() => {
                    
                    const navigate = useNavigate();

                    Swal.fire({
                        icon: 'success',
                        title: 'Signed Up!',
                        text: 'Successfully Signed Up.',
                        showConfirmButton: false,
                        timer: 3000,
                    });

                    navigate('/home');

                }).catch((error) => {

                    console.log(error);

                    Swal.fire({
                        icon: 'error',
                        title: 'Error!',
                        text: 'An unknown error occurred while trying to sign you up.',
                        showConfirmButton: true,
                        timer: 3000,
                    });
                })
        },
        signIn: (state, action) => {
            signInWithEmailAndPassword(auth, action.payload, action.payload)
                .then(() => {

                    const navigate = useNavigate();

                    Swal.fire({
                        icon: 'success',
                        title: 'Signed In!',
                        text: 'Successfully Signed In.',
                        showConfirmButton: false,
                        timer: 3000,
                    });
                    
                    navigate('/home');
    
                }).catch((error) => {
    
                    console.log(error);
    
                    Swal.fire({
                        icon: 'error',
                        title: 'Error!',
                        text: 'Incorrect password or username.',
                        showConfirmButton: true,
                        timer: 3000,
                    });
                })
        },
        signingOut: () => {
            signOut(auth)
                .then(() => {
                    return true;
                })
                .catch((error) => { });
    
        }
    }
    
    

})

export const { signUp, signIn, signingOut } = authSlice.actions;
export default authSlice.reducer