import React from 'react';
import "./Login.css";
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux"
import { auth, provider, signInWithPopup } from "../firebase/firebase";
import { login } from "../redux/userSlice";

function Login() {

    const dispatch = useDispatch()
    const signIn = ()=>{
        signInWithPopup(auth, provider)
            .then((result)=>{
                dispatch(login({
                    displayName: result.user.displayName,
                    email: result.user.email,
                    photoUrl: result.user.photoURL
                }))
            })
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"  alt="login "/>
                <Button 
                    variant="contained"
                    onClick = {signIn}
                    color="primary"
                >
                    Log In
                </Button>
            </div>
        </div>
    )
}

export default Login