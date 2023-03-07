import React, { useState } from 'react';
import './loginform.css';


const LoginForm = ({setUserLogged}) =>{
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    

    const handleLogin = ()=>{
            if(username==="admin" && password === "1234"){
                    setUserLogged(true)
            }
            else{
                window.alert("Invalid Username & Password");
            }
    }
    return(
        <div className='cover'>
            <h1>Login Form</h1>
            <div className='input-style'>
                <input type="text" placeholder='username' onChange={(e)=>{setUsername(e.target.value)}} />
            </div>

            <div className='input-style'>
                <input type="password" placeholder='password' onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            
            <button className='input-style' onClick={()=> {handleLogin()}}>Login</button>    
        </div>
    );
}
export default LoginForm;