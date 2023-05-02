import './Demographic.css';

import {useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";

function ResilienceTwo() {


    const [inputField , setInputField] = useState({"user":localStorage["user"]})

    const navigate = useNavigate();

    const [res, setRes] = useState({}) 
    const [label, setLabel] = useState(false) 

    useEffect(() => {
        localStorage.setItem("previourUrl", window.location.pathname);
    }, [])

    const inputsHandler = (e) =>{
        console.log(e.target.name, e.target.value)
        setInputField({...inputField, [e.target.name]: e.target.value})
    }

    const handleSubmit = () =>{
        navigate("/deepbreif")
    }

  return (
    <div className="Res_form">
        <form id="demographicForm" method="POST">
        <label for="gender">How do you feel the game was?</label>
        <input type="text" id="RS1" name="RS1" placeholder="" required onChange={inputsHandler} value={inputField.RS1}/><br/><br/>
        <label for="age">Could you have done better ?</label>
        <input type="text" id="RS2" name="RS2" placeholder="" required onChange={inputsHandler} value={inputField.RS2}/><br/><br/>
        <br/><input type="button" value="Submit" onClick={() => handleSubmit()}/>
        </form>
    </div>
  );
}

export default ResilienceTwo;
