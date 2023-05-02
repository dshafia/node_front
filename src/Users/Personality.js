import './Personality.css';
import {useEffect, useState} from "react"
import React from 'react';
import { useNavigate } from "react-router-dom";

function Personality() {

    const [inputField , setInputField] = useState({})

    let num = 0

    const navigate = useNavigate();

    const [res, setRes] = useState({}) 
    const [label, setLabel] = useState(false) 

    useEffect(() => {
        localStorage.setItem("previourUrl", window.location.pathname);
    }, [])

    function generateRandom(min = 1, max = 4) {
        let difference = max - min;
        let rand = Math.random();
        rand = Math.floor( rand * difference);
        rand = rand + min;
    
        return rand;
    }

    const inputsHandler = (e) =>{
        console.log(e.target.name, e.target.value)
        setInputField({...inputField, [e.target.name]: e.target.value})
    } 
    
    const handleSubmit = () =>{
        console.log(inputField)   
        num = generateRandom()
        console.log(num)
        fetch('http://127.0.0.1:5000/personality', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(inputField)
            }).then(({ response }) => {
                setRes(response)
                console.log(res)
                if (num == 1){
                    // navigate("/CG")  
                    navigate("/cgInfo")
                } 
                else if(num == 2){
                    // navigate("/exp1")
                    navigate("/exponeInfo")
                }   
                else{
                    // navigate("/exp2")
                    navigate("/exptwoInfo")
                }        
            });
              
    }
        

  return (
    <div className = "form_div">
        <form  id="personalityform" method="POST">
        <label for="per_qs1" >I like being in leadership positions.</label><br/>
        <input type="checkbox" id="perqs1" name="perqs1" onChange={inputsHandler} value={"agree"}/>
        <label for="A"> Agree</label><br/>
        <input type="checkbox" id="perqs1" name="perqs1"  onChange={inputsHandler} value={"neutral"}/>
        <label for="N"> Neural</label><br/>
        <input type="checkbox" id="perqs1" name="perqs1"  onChange={inputsHandler} value={"disagree"}/>
        <label for="D"> Disagree</label><br/><br/>

        <label for="per_qs2">I express my opinions strongly.</label><br/>
        <input type="checkbox" id="perqs2" name="perqs2"  onChange={inputsHandler} value={"agree"}/>
        <label for="A"> Agree</label><br/>
        <input type="checkbox" id="perqs2" name="perqs2" onChange={inputsHandler} value={"neutral"}/>
        <label for="N"> Neural</label><br/>
        <input type="checkbox" id="perqs2" name="perqs2"  onChange={inputsHandler} value={"disagree"}/>
        <label for="D"> Disagree</label><br/><br/>
        <br/><input type="button" value="Submit" onClick={handleSubmit}/>
        </form>
        {res!== {} && <label>success</label>}
    </div>
  );

}

export default Personality;
