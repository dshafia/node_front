import React from 'react';

import { GAME_STATE, getSeconds } from './utils';

const Header = ({ timeLeft, gameState, endGame }) => (
  <header className="navbar">
    {gameState === GAME_STATE.PLAYING && (
      <>
        <section className="navbar-center text-error">{getSeconds(timeLeft)} Seconds Left</section>
        <section className="navbar-center">
          <button className="nextgame-btn" onClick={endGame}>
            Next anagram
          </button>
        </section>
      </>
    )}
  </header>
);

export default Header;
