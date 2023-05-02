import React from 'react'
import { Link } from "react-router-dom";
import './MessageScreens.css'

const ExpGroupTwo = () => {
    return (
        <>
            <div className='infocontainer'>
                `
                <div className='infocard'>
                    <div className='infocontent'>
                        <p style={{ fontSize: 'x-large', fontWeight: 'bold' }}>Anagram Challenge: A Test of Vocabulary Skills</p>
                        <p style={{ fontSize: 'x-large', fontWeight: 'bold' }}>Two Player (Team)</p>
                        <div className='inforow'>
                            <img className='infotwoimg' src='/images/twoplayer.png' />
                            <p className='infos'>Welcome to our two player anagram game, where you can team up with players to test your vocabulary skills! In this game, you will be randomly matched with another player to work together to solve anagrams.<br /><br />As you play the game, timer will be displayed at the top of the screen. The faster you solve each anagram, the higher your score will be.<br /><br />Give it a try and see how many anagrams you can solve and how well you can work together to solve anagrams?</p>
                        </div>
                    </div>
                    <div className="gameone-btn">
                        <Link to="/exp2" className="gamebtn-text">Start game</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExpGroupTwo