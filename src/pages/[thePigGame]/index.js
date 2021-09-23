import React, { useState, useEffect } from "react";
import classes from "./styles.module.css";

function thePigGame() {
  const [player, setPlayer] = useState("{classes.playerActive}");

  const playerActive = () => {
    if (rollDice === 1) {
      setPlayer("classes.player");
    }
  };
  let dice = 2;
  const btnRoll = () => {
    const diceRandom = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    return (dice = diceRandom);
  };

  // const activePlayer = () => {};
  return (
    <div className={classes.global}>
      <div className={classes.html}>
        <div className={classes.body}>
          <div className={classes.main}>
            <section className={classes.player}>
              <h2 className={classes.name} id='name--0'>
                Player 1
              </h2>
              <p className={classes.score} id='score--0'>
                43
              </p>
              <div className={classes.current}>
                <p className={["current-label"]}>Current</p>
                <p className={["current-score"]} id='current--0'>
                  0
                </p>
              </div>
            </section>
            <section className={classes.player}>
              <h2 className={classes.name} id='name--1'>
                Player 2
              </h2>
              <p className={classes.score} id='score--1'>
                24
              </p>
              <div className={classes.current}>
                <p className={["current-label"]}>Current</p>
                <p className={["current-score"]} id='current--1'>
                  0
                </p>
              </div>
            </section>

            <img
              src={`/images/dice-${dice}.png`}
              alt='Playing dice'
              className={"dice"}
            />
            <button className={classes.btnNew} onClick={btnRoll}>
              🔄 New game
            </button>
            <button className={classes.btnRoll}>🎲 Roll dice</button>
            <button className={classes.btnHold}>📥 Hold</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default thePigGame;
