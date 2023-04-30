import React, { useState } from 'react'
import './gameone.css'
import { Link } from "react-router-dom";
import { FiChevronsRight } from 'react-icons/fi';
import Template from './Template'
import Button from 'react-bootstrap/Button';
import './CG.css';

const lettersList = ['M', 'A', 'E', 'P', 'L', 'F', 'O'];

export const Question = () => {
    return (
        <div className="ques-container">
            <p className="ques-text">{`Question text goes here. <<Anagram>>`}</p>
        </div>
    )
}

export const Answer = () => {
    return (
        <div className="ans-container">
            <textarea className="gameone-anstext" placeholder="eg. text"></textarea>
        </div>
    )
}

export const Letters = (letter) => {
    return (
        <div className="letter">
            {letter.letter}
        </div>
    )
}

export const ErrorText = () => {
    return (
        <p className="error-txt">Wrong! Please try again!!</p>
    )
}

const Gameone = () => {
    const [isError, setIsError] = useState(false);

    const handleClick = () => {
        setIsError(true);
    }

    return (
        <>
        <div className="form_div">
            <div className="gameone-content">
                <div className="gameone-container">
                    <Question />
                    {isError ? <ErrorText /> : ''}
                    <div className="letters-class">
                        {lettersList.map((letter) => (
                            <Letters letter={letter} />
                        ))}
                    </div>
                    <Answer />
                    <input type="button" value="Submit" onClick={() => handleClick()}/>
                </div>
                <div className="btn-container">
                    <Link to="/taskfailed" className="taskone-btn"><FiChevronsRight /></Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Gameone