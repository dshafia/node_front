import React from 'react'
import { Link } from "react-router-dom";
import './MessageScreens.css'

const ControlGroup = () => {
    return (
        <>
            <div className='infocontainer'>
                `
                <div className='infocard'>
                    <div className='infocontent'>
                        <p style={{ fontSize: 'x-large', fontWeight: 'bold' }}>Anagram Challenge: A Test of Vocabulary Skills</p>
                        <p style={{ fontSize: 'x-large', fontWeight: 'bold' }}>Single Player</p>
                        <div className='inforow'>
                            <img className='infoimg' src='/images/singleplayer.png' />
                            <p className='infos'>Welcome to our single player anagram game! Anagrams are a great way to challenge your vocabulary skills and have some fun while you're at it. In this game, you will be given a jumbled word, and your task is to rearrange the letters to form a new word.<br /><br />As you play the game, timer will be displayed at the top of the screen. The faster you solve each anagram, the higher your score will be.<br /><br />Give it a try and see how many anagrams you can solve?</p>
                        </div>
                    </div>
                    <div className="gameone-btn">
                        <Link to="/cg" className="gamebtn-text">Start game</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ControlGroup