import './Demographic.css';

import {useState} from "react"
import { useNavigate } from "react-router-dom";

function Moodsurvey() {


    const [inputField , setInputField] = useState({"user":localStorage["user"]})

    const navigate = useNavigate();

    const [res, setRes] = useState({}) 
    const [label, setLabel] = useState(false) 

    const inputsHandler = (e) =>{
        console.log(e.target.name, e.target.value)
        setInputField({...inputField, [e.target.name]: e.target.value})
    } 

    const handleSubmit = () =>{
        console.log(inputField)   
             
        fetch('http://127.0.0.1:5000/moodsurvey', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(inputField)
            }).then(({ response }) => {
                setRes(response)
                navigate("/personality");                 
            });
    }

  return (
    <div className="Res_form">
        <form id="demographicForm" method="POST">
        <label for="gender">What is your current Mood ?</label>
        <input type="text" id="MS1" name="MS1" placeholder="" required onChange={inputsHandler} value={inputField.MS1}/><br/><br/>
        <label for="age">How did your semester go ?</label>
        <input type="text" id="MS2" name="MS2" placeholder="" required onChange={inputsHandler} value={inputField.MS2}/><br/><br/>
        <br/><input type="button" value="Submit" onClick={handleSubmit}/>
        </form>
    </div>
  );
}

export default Moodsurvey;
