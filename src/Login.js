import './Login.css';
import {useState} from "react"
import React from 'react';
import { useNavigate } from "react-router-dom";

function Login() {

    const [inputField , setInputField] = useState({
        fname: '',
        lname: '',
        cls: ''
    })

    const navigate = useNavigate();

    const [res, setRes] = useState({}) 
    const [label, setLabel] = useState(false) 

    const inputsHandler = (e) =>{
        console.log(e.target.name, e.target.value)
        setInputField({...inputField, [e.target.name]: e.target.value})
    } 
    
    const handleSubmit = () =>{
        console.log(inputField)   
             
        fetch('http://127.0.0.1:5000/login', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(inputField)
            }).then(({ response }) => {
                setRes(response)    
                navigate("/consent");           
            });
              
    }

  return (
    <div className="form_div">
        <form action="/" id="loginForm" method="POST">
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname" placeholder="Enter your Firstname..." required onChange={inputsHandler} value={inputField.fname}/><br/><br/>
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" placeholder="Enter your Lastname..." required onChange={inputsHandler} value={inputField.lname}/><br/><br/>
        <label for="class">Class</label>
            <select id="class" name="cls" onChange={inputsHandler} value={inputField.cls}>
            <option value="none">None of the above</option>
            <option value="CS1">CS01</option>
            <option value="CS2">CS02</option>
            <option value="CS3">CS03</option>
            </select>
        <br/><input type="button" value="Submit" onClick={handleSubmit}/>
        </form>
        {res!== {} && <label>success</label>}
      
    </div>
  );
}

export default Login;
