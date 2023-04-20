import '../Users/Login.css';
import {useState} from "react"
import React from 'react';
import { useNavigate } from "react-router-dom";

function AdminSignup() {

    const [inputField , setInputField] = useState({})
    const navigate = useNavigate();
    const [res, setRes] = useState({}) 
    const [error, setError] = useState("") 

    const inputsHandler = (e) =>{
        console.log(e.target.name, e.target.value)
        setInputField({...inputField, [e.target.name]: e.target.value})
    } 
    
    const handleSubmit = () =>{
        if(inputField.password !== inputField.confirmPassword) {
            alert("Passwords don't match! Please try again")
        }
        else {
            fetch('http://127.0.0.1:5000/admin/signup', {
                method: 'post',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(inputField)
                }).then((response) => response.json())
                    .then((data) => {
                    setRes(data)  
                    if(data["status"] === 409){
                        setError("Admin already exists!")
                    }
                    else if(data["status"] === 200){
                        localStorage["admin"] = data["admin"]
                        console.log("console in admin sign up ", data, localStorage)
                        navigate('/adminLogin')
                    }          
                });
        }             
    }

  return (
    <div className="form_div">
        <form action="/" id="loginForm" method="POST">
        <label htmlFor="userName">User Name:</label>
        <input type="text" id="userName" name="userName" placeholder="Enter your User Name" required onChange={inputsHandler} value={inputField.userName}/><br/><br/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter your Password" required onChange={inputsHandler} value={inputField.password}/><br/><br/>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your Password" required onChange={inputsHandler} value={inputField.confirmPassword}/><br/><br/>
        <br/><input type="button" value="Submit" onClick={handleSubmit}/>
        </form>
        {error !== "" && <label>{error}</label>}
    </div>
  );
}

export default AdminSignup;
