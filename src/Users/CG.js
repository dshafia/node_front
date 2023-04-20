import './CG.css';
import { useNavigate } from "react-router-dom";

function CG() {

  const navigate = useNavigate();

  const handleSubmit = () =>{    
    navigate("/deepbreif")

          
  } 

  return (
    <div className="form_div">
        <iframe className='game_frame' src="https://playpager.com/embed/checkers/index.html"></iframe>
        <br/><input type="button" value="Submit" onClick={handleSubmit}/>
    </div>
  );

}

export default CG;
