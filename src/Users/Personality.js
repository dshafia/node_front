import './Personality.css';
import { useEffect, useState } from "react"
import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Personality() {

    const [inputField, setInputField] = useState({})

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
        rand = Math.floor(rand * difference);
        rand = rand + min;

        return rand;
    }

    const inputsHandler = (e) => {
        console.log(e.target.name, e.target.value)
        setInputField({ ...inputField, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        console.log(inputField)
        num = generateRandom()
        console.log(num)
        fetch('http://127.0.0.1:5000/personality', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputField)
        }).then(({ response }) => {
            setRes(response)
            console.log(res)
            if (num == 1) {
                // navigate("/CG")  
                navigate("/cgInfo")
            }
            else if (num == 2) {
                // navigate("/exp1")
                navigate("/exponeInfo")
            }
            else {
                // navigate("/exp2")
                navigate("/exptwoInfo")
            }
        });

    }

    const QuestionAnswer = ({question}) => {
        return (
            <div className="ques-container">
                <p className="ques-text">{question}</p>
                <textarea className="ans-text" placeholder="Type your answer here"></textarea>
            </div>
        )
    }

    return (
        <div className="taskone-content">
            <div className="taskone-container">
                <QuestionAnswer question={`Have you ever worked hard towards achieving a goal but ultimately failed?\nHow did your failure affect your motivation to pursue similar goals in the future?`} />
                <QuestionAnswer question={`Did you become discouraged or more determined to succeed?\nWhat steps did you take to maintain your motivation or get back on track after the setback?`} />
                <div className="gameone-btn">
                    <Link to="/exp1" className="gamebtn-text">Start game</Link>
                </div>
            </div>
        </div>
    );

}

export default Personality;
