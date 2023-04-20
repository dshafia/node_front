import '../Users/Login.css';
import {useState} from "react"
import React from 'react';
import { useNavigate } from "react-router-dom";

function AdminHome() {
    const userName = localStorage["admin"] ? localStorage["admin"] : ""
    const [inputField , setInputField] = useState({"userName" : userName})
    const navigate = useNavigate();
    const [res, setRes] = useState({}) 
    const [error, setError] = useState("") 

    const inputsHandler = (e) =>{
        setInputField({...inputField, [e.target.name]: e.target.value})
    } 
    
    const handleSubmit = () =>{             
        fetch('http://127.0.0.1:5000/admin/login', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(inputField)
            }).then((response) => response.json())
                .then((data) => {
                setRes(data)  
                if(data["status"] === 404){
                    setError("Admin doesn't exist! Please Sign up first")
                }
                else if(data["status"] === 200){
                    navigate()
                }          
            });
              
    }
console.log("userName", userName, localStorage["admin"])
  return (
    <div className="form_div">
        <form action="/" id="loginForm" method="POST">
        <label htmlFor="userName">User Name:</label>
        <input type="text" id="userName" name="userName" placeholder="Enter your User Name" required onChange={inputsHandler} value={inputField.userName}/><br/><br/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your Password" required onChange={inputsHandler} value={inputField.password}/><br/><br/>
        <br/><input type="button" value="Submit" onClick={handleSubmit}/>
        </form>
        {error !== "" && <label>{error}</label>}
    </div>
  );
}

export default AdminHome;
