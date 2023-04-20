import './Personality.css';
import {useState} from "react"
import { useNavigate } from "react-router-dom";

function Exp2() {


    const [inputField , setInputField] = useState({
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
             
        fetch('http://127.0.0.1:5000/exp2', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(inputField)
            }).then(({ response }) => {
                setRes(response)
                navigate("/deepbreif")               
            });
    }

  return (
    <div className="form_div">
        <form id="demographicForm" method="POST">
        <label for="per_qs1">Face the issues boldly</label><br/>
        <input type="checkbox" id="exp2qs1" name="exp2qs1" value="agree" onChange={inputsHandler}/>
        <label for="A"> Agree</label><br/>
        <input type="checkbox" id="exp2qs1" name="exp2qs1" value="neutral" onChange={inputsHandler}/>
        <label for="N"> Neural</label><br/>
        <input type="checkbox" id="exp2qs1" name="exp2qs1" value="disagree" onChange={inputsHandler}/>
        <label for="D"> Disagree</label><br/><br/>

        <label for="per_qs2">Be in nervous situation all the time</label><br/>
        <input type="checkbox" id="exp2qs2" name="exp2qs2" value="agree" onChange={inputsHandler}/>
        <label for="A"> Agree</label><br/>
        <input type="checkbox" id="exp2qs2" name="exp2qs2" value="neutral" onChange={inputsHandler}/>
        <label for="N"> Neural</label><br/>
        <input type="checkbox" id="exp2qs2" name="exp2qs2" value="disagree" onChange={inputsHandler}/>
        <label for="D"> Disagree</label><br/><br/>
        <br/><input type="button" value="Submit" onClick={handleSubmit}/>
        </form>
        {res!== {} && <label>success</label>}
    </div>
  );
}

export default Exp2;
