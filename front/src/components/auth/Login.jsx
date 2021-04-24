import React, { useEffect } from "react";
import "./auth.css";
import { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
    const api_key = "http://localhost:4000/user/login";

    const [usernameLog, setUsernameLog] = useState("");
    const [passwordLog, setPasswordLog] = useState("");

    let  history = useHistory();

    Axios.defaults.withCredentials = true;

    const loginUser = () => {
        Axios.post(api_key, {
            username: usernameLog,
            password: passwordLog
        }).then((response) => {
            console.log(response.data.message);
            history.push("/todo");
        });
    }

    useEffect(() => {
        Axios.get("http://localhost:4000/user/login").then((response) => {
            if (response.data.loggedIn === true){
                history.push("/todo");
            }
        });
    }, []);

    return (
        <div className="container auth">
            <h1 className="heading">Login</h1>
            <div className="sub-details-con">
                <label>Username</label>
                <input type="text" onChange={e => setUsernameLog(e.target.value)} />
            </div>
            <div className="sub-details-con">
                <label>Password</label>
                <input type="text" onChange={e => setPasswordLog(e.target.value)} />
            </div>
            <div className="btn-con">
                <button onClick={loginUser} className="auth-btn mg-bt" >Login</button>
            </div>
        </div>
    );
};

export default Login;