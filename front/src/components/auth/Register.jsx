import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./auth.css";
import Axios from "axios";
import { useState } from "react";

const Register = () => {
    const api_key = "http://localhost:4000/user/register";

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    let history = useHistory();

    Axios.defaults.withCredentials = true;

    const registerUser = () => {
        if (usernameReg && passwordReg) {
            Axios.post(api_key, {
                username: usernameReg,
                password: passwordReg
            }).then((response) => {
                if (response.status === 200) {
                    history.push('/todo');
                }
            });
        }else{
            alert('please enter valid credentials')
        }
    }

    // if user already logined, push to dashboard page
    useEffect(() => {
        Axios.get("http://localhost:4000/user/login").then((response) => {
            if (response.data.loggedIn === true) {
                history.push("/todo");
            }
        });
    }, [history]);

    // for setting document title
    useEffect(() => {
        document.title = "Register";
    }, []);

    return (
        <div className="container auth">
            <h1 className="heading">Register</h1>
            <div className="sub-details-con">
                <label>Username</label>
                <input type="text" onChange={e => setUsernameReg(e.target.value)} />
            </div>
            <div className="sub-details-con">
                <label>Password</label>
                <input type="text" onChange={e => setPasswordReg(e.target.value)} />
            </div>
            <div className="btn-con">
                <button onClick={registerUser} className="auth-btn">Register</button>
                <strong><p>or<Link to="/login"><span>Login</span></Link></p></strong>
            </div>
        </div>
    );
};

export default Register;