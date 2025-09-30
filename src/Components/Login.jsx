import {React,useState} from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../Styles/login.css'

function Login() {

    const navigate = useNavigate();

    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");

    function handlelogin(){
        if(username === "aditya234" && password === "123456"){
            alert('Login Successfull');
            navigate("/dashboard", {state : {username}});
        }else{
            alert('Incorrect Credentials');
            setPassword("");
            setUsername("");
        }
    }

    return(
        <div id="container">
            <h1>Login Page</h1>
            <input 
            value={username}
            onChange={(e) => setUsername(e.target.value) } 
            placeholder='Enter your username' 
            type="text" 
            required/>

            <input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your password' 
            type="password" 
            required/>
            <button onClick={handlelogin}>Login</button>
            <Link to="/signup">New User? Sign Up</Link>
        </div>
    );

}

export default Login;