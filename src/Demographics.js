import './Demographic.css';
import {useState} from "react"
import { useNavigate } from "react-router-dom";

function Demographics() {


    const [inputField , setInputField] = useState({})

    const navigate = useNavigate();

    const [res, setRes] = useState({}) 
    const [label, setLabel] = useState(false) 

    const inputsHandler = (e) =>{
        console.log(e.target.name, e.target.value)
        setInputField({...inputField, [e.target.name]: e.target.value})
    } 

    const handleSubmit = () =>{
        console.log(inputField)   
             
        fetch('http://127.0.0.1:5000/demographic_info', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(inputField)
            }).then(({ response }) => {
                setRes(response)
                navigate("/personality");                 
            });
    }

  return (
    <div className="form_div">
        <form id="demographicForm" method="POST">
        <label for="gender">What gender do you identify as?</label>
        <input type="text" id="gender" name="gender" placeholder="" required onChange={inputsHandler} value={inputField.gender}/><br/><br/>
        <label for="age">What is your age?</label>
        <input type="text" id="age" name="age" placeholder="" required onChange={inputsHandler} value={inputField.age}/><br/><br/>
        <label for="cls">What class do you belong to?</label>
        <input type="text" id="demo_cls" name="demo_cls" placeholder="" required onChange={inputsHandler} value={inputField.demo_cls}/><br/><br/>
        <label for="address">What is your address?</label>
        <input type="text" id="address" name="address" placeholder="" required onChange={inputsHandler} value={inputField.address}/><br/><br/>
        <br/><input type="button" value="Submit" onClick={handleSubmit}/>
        </form>
        {res!== {} && <label>success</label>}
    </div>
  );
}

export default Demographics;
