import '../Users/Login.css';
import {useState, useEffect, useRef} from "react"
import React from 'react';

function AdminHome() {
  useEffect(() => {
    fetch('http://127.0.0.1:5000/admin/getCategory', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({"categoryName" : "EXP1"})
      }).then((response) => response.json())
          .then((data) => {
          if(data["status"] === 200){
            setFormValues(data["result"]["questions"])
          }          
      });
  }, [])

  const [formValues, setFormValues] = useState([{question : "Q0", name: ""}])
  const userName = localStorage["admin"] ? localStorage["admin"] : ""
  const [category , setCategory] = useState("EXP1")

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        newFormValues[i]["question"] = "Q" + i.toString()
        setFormValues(newFormValues);
      }
    
    let addFormFields = () => {
        setFormValues([...formValues, {name: ""}])
      }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    
    let handleSubmit = (event) => {
        event.preventDefault();
        const inputField = {
          "categoryName" : category,
          "questions" : formValues,
          "admin" : userName
      }      
      fetch('http://127.0.0.1:5000/admin/addCategory', {
          method: 'post',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify(inputField)
          }).then((response) => response.json())
              .then((data) => {
              if(data["status"] === 200){
                alert ("Successfully Saved!")
                console.log("Successfully stored")
              }          
          });
    }

    const handleCategoryChange = (e) => {
      setCategory(e.target.value)
      fetch('http://127.0.0.1:5000/admin/getCategory', {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({"categoryName" : e.target.value})
        }).then((response) => response.json())
            .then((data) => {
            if(data["status"] === 200){
              setFormValues(data["result"]["questions"])
            }
            else {
              setFormValues([{"name" : ""}])
            }          
        });
    } 

    return (
      <div className="form_div_questions">
        <form  onSubmit={handleSubmit}>
        <label htmlFor="class">Experiment Class</label>
                <select id="experiment" name="exp" onChange={(e) => handleCategoryChange(e)} value={category}>
                <option value="EXP1">EXP1</option>
                <option value="EXP2">EXP2</option>
                </select>
          {formValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <label>Name</label>
              <input type="text" name="name" value={element.name || ""} onChange={e => handleChange(index, e)} />
              {
                index ? 
                  <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
                : null
              }
            </div>
          ))}
          <div className="button-section">
              <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
              <button className="button submit" type="submit">Submit</button>
          </div>
      </form>
    </div>
    )
}

export default AdminHome;
