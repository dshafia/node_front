import './Personality.css';
import {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";

function Exp1() {
    useEffect(() => {
        fetch('http://127.0.0.1:5000/admin/getCategory', {
          method: 'post',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({"categoryName" : "EXP1"})
          }).then((response) => response.json())
              .then((data) => {
              if(data["status"] === 200){
                setQuestions(data["result"]["questions"])
              }          
          });
      }, [])
    
    const [questions, setQuestions] = useState([{ name: ""}])
    const [inputField , setInputField] = useState({
    })

    const navigate = useNavigate();

    const [res, setRes] = useState({}) 

    const inputsHandler = (e,i) =>{
        console.log(e.target.name, e.target.value,i,questions)
        setInputField({...inputField, [questions[i].name]: e.target.value})
        console.log("inputField ", inputField)
    } 

    const handleSubmit = () =>{
        inputField["category"] = "EXP1"   
        inputField["user"] = localStorage["user"]
        fetch('http://127.0.0.1:5000/saveExperiment', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(inputField)
            }).then(({ response }) => {
                setRes(response)
                navigate("/deepbreif")               
            });
    }

    return (
        <div className="form_div_questions">
            <form id="demographicForm" method="POST">
            {questions.map((query, index) => (
                <div key={index} onChange={(e) => inputsHandler(e,index)}>
                    <label>{query.name}</label><br/>
                    <input type="radio" id={index} name={index} value="agree" />
                    <label htmlFor="A"> Agree</label><br/>
                    <input type="radio" id={index} name={index} value="neutral"/>
                    <label htmlFor="N"> Neural</label><br/>
                    <input type="radio" id={index} name={index} value="disagree"/>
                    <label htmlFor="D"> Disagree</label><br/><br/>
                </div>
            ))}
            <br/><input type="button" value="Submit" onClick={handleSubmit}/>
            </form>
        </div>
      );
}

export default Exp1;
