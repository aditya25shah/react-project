import {useState, React} from 'react'
import { useNavigate } from 'react-router-dom'

function Signup(){

    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");

    const navigate = useNavigate();
    
    function handlesignup(){

        if(username && password)
        {
            alert("Signed up Successfully");
            navigate("/dashboard",{state : {username}});
        }
        else
        {
            alert("Wrong Credentials");
        }

        setUsername("");
        setPassword("");

    }

    return(
        <div id="aditya">
            <h1>SIGN UP</h1>
            <input 
            placeholder='Enter your name'
            type="text"
            required
            />
            <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Enter your username'
            type="text"
            required
            />
            <input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your password'
            type="password"
            required
            />
            <button onClick={handlesignup} >Sign up !</button>

        </div>
    );



}

export default Signup