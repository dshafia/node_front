import './CG.css';
import { useNavigate } from "react-router-dom";

function CG() {

  const navigate = useNavigate();

  return (
    <div className="form_div">
        <iframe className='game_frame' src="https://playpager.com/embed/checkers/index.html"></iframe>
    </div>
  );

}

export default CG;
