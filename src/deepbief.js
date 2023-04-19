import './Consent.css';
import { useNavigate } from "react-router-dom";

function DeepBrief() {

    const navigate = useNavigate();
  
    const handleSubmit = () =>{    
              navigate("/");           
          };
            
  
    return (
      <div className="form_div">
          <p1>This creative brief for Reebok is a good example from a customer focus standpoint. While it’s shorter than many briefs, it does go into detail about the target audience.<br/> 
           It covers who they are and their life circumstances. Not to mention the top challenge they face and how the brand addresses that challenge.<br/>
           These are details copywriters, designers, and others involved in print ad creation find useful.
          </p1>
          <h2 Thank you />
          <br/>
          <br/>
          <form>
              <br/><input type="button" value="Next" onClick={handleSubmit}/>
          </form>
      </div>
    );
  
  }
  
  export default DeepBrief;