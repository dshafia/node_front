import { useState } from 'react';
import './Consent.css';
import { useNavigate } from "react-router-dom";

function Consent() {

  const navigate = useNavigate();
  const [isChecked, setChecked] = useState(false)
  const handleSubmit = () =>{    
    navigate("/demographic");           
  };
  
  return (
    <div className="form_div">
        <p1>The experimental method in psychology helps us learn more about how people think and why they behave the way they do. 
            <br/>Experimental psychologists can research a variety of topics using many different experimental methods.
            <br/>Each one contributes to what we know about the mind and human behavior.<br/> Physiology is the study of how the human body works. 
            <br/>It describes the chemistry and physics behind basic body functions, from how molecules behave in cells to how systems of organs work together.<br/>
            It helps us understand what happens in a healthy body in everyday life and what goes wrong when someone gets sick
        </p1>
        <br/>
        <br/>
        <form>
            <input type="checkbox" id="consent" name="consent" value={isChecked} onClick={() => setChecked(!isChecked)} required/>
            <label>I Acknowledge That I Have Read And Understand The Terms</label>
            <br/>
            <input type="button" value="Next" onClick={handleSubmit} disabled = {!isChecked}/>
        </form>
    </div>
  );

}

export default Consent;
