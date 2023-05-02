import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import { LETTERS, WORDLETS, WORDS } from './data';
import { shuffle, getTimeLeft, move, GAME_STATE } from './utils';

import Dropzone from './Dropzone';
import Header from './Header';
import Modal from './Modal';

import './Gametwo.css'

import { Link } from "react-router-dom";

const GAME_DURATION = 1000 * 30; // 30 seconds

console.log('pathname', window.location.pathname);

const initialState = {
  bench: shuffle(LETTERS),
  [WORDS.WORDS]: [],
  gameState: GAME_STATE.READY,
  timeLeft: 0,
  pathname: window.location.pathname,
};

class Gametwo extends React.Component {
  state = initialState;

  componentDidMount() {
    this.setState({
      previousPage: localStorage.getItem("previourUrl")
    })
  }

  startGame = () => {

    this.currentDeadline = Date.now() + GAME_DURATION;

    this.setState(
      {
        bench: shuffle(shuffle(WORDLETS)[0]),
        gameState: GAME_STATE.PLAYING,
        timeLeft: getTimeLeft(this.currentDeadline),
        // previousPage: prevPage,
      },
      this.gameLoop
    );
  };

  Letters = (letter) => {
    return (
      <div className="letter">
        {letter.letter}
      </div>
    )
  }

  gameLoop = () => {
    this.timer = setInterval(() => {
      const timeLeft = getTimeLeft(this.currentDeadline);
      const isTimeout = timeLeft <= 0;
      if (isTimeout && this.timer) {
        clearInterval(this.timer);
      }

      this.setState({
        timeLeft: isTimeout ? 0 : timeLeft,
        ...(isTimeout ? { gameState: GAME_STATE.DONE } : {}),
      });
    }, 1000);
  };

  endGame = () => {
    if (this.timer) {
      clearInterval(this.timer);
    }

    this.setState({
      gameState: GAME_STATE.DONE,
    });
  };

  resetGame = () => {
    this.setState(initialState);
  };

  onDragEnd = ({ source, destination }) => {
    if (!destination) {
      return;
    }

    this.setState(state => {
      return move(state, source, destination);
    });
  };

  render() {
    const { gameState, timeLeft, bench, ...groups } = this.state;
    const isDropDisabled = gameState === GAME_STATE.DONE;

    return (
      // <div className='main-cnt'>
        <div className='game-container'>
          <Header gameState={gameState} timeLeft={timeLeft} endGame={this.endGame} previousPage={this.state.previousPage} />
          {this.state.gameState !== GAME_STATE.PLAYING && (
            <Modal
              startGame={this.startGame}
              resetGame={this.resetGame}
              timeLeft={timeLeft}
              gameState={gameState}
              groups={groups}
              pathname={this.state.pathname}
            />
          )}
          <DragDropContext onDragEnd={this.onDragEnd}>
            <div className="container">
              <div className="rows">
                <Dropzone id="bench" letters={bench} isDropDisabled={isDropDisabled} />
                <Dropzone
                  id={WORDS.WORDS}
                  letters={this.state[WORDS.WORDS]}
                  isDropDisabled={isDropDisabled}
                />
              </div>
            </div>
          </DragDropContext>
          <div className="gameone-btn">
            {this.state.previousPage == '/resiliencesurvey' ? (
              <Link to="/survey" className="gamebtn-text">End game</Link>
            ) : (
              <Link to="/resiliencesurvey" className="gamebtn-text">End game</Link>
            )}
        </div>
        </div>
      // </div>
    );
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}

export default Gametwo;
