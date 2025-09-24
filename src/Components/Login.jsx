import {React,useState} from 'react';
import {Link} from 'react-router-dom';
function Login() {

    const[username,setUsername]=useState("aditya234");
    const[password,setPassword]=useState("123456");



    return(
        <div id="container">
            <h1>Login Page</h1>
            <input placeholder='Enter your username' type="text" required/>
            <input placeholder='Enter your password' type="password" required/>
            <button>Login</button>
            <Link to="/signup">New User? Sign Up</Link>
        </div>
    );

}

export default Login;