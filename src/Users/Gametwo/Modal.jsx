import React from 'react';

import { GAME_STATE, getTotalScore } from './utils';

const Modal = ({ gameState, groups, startGame, timeLeft, resetGame, pathname, previousPage }) => (
  <div className="modal modal-sm active">
    <div className="modal-overlay" />
    <div className="modal-container">
      <div className="modal-header">
        <div className="modal-title h4">Anagram Challenge</div>
      </div>
      <div className="modal-body">
        <div className="content h6">
          {' '}
          {gameState === GAME_STATE.READY
            ? `Drag and Drop the letters in the correct order to complete the anagram. You have 30 seconds to complete this game.`
            // : `You scored - ${getTotalScore(groups, timeLeft)}`}
            : pathname == `/cg` ? `You fail! You spent a lot of time to solve the anagram.` : pathname == `/exp1` ? `You fail! You spent more time than your opponent to solve the anagram.` : `You fail! Your team spent a lot of time to solve the anagram.`}
        </div>
      </div>
      <div className="modal-footer">
        <button
          className="modal-btn"
          onClick={gameState === GAME_STATE.READY ? startGame : resetGame}
        >
          {gameState === GAME_STATE.READY ? 'Start game' : 'Next anagram'}
        </button>
      </div>
    </div>
  </div>
);

export default Modal;
