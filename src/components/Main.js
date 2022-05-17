import React, { useState } from "react";
import "./styles/Main.css";
import GameBar from "./gameboard/GameBar";
import GameBoard from "./gameboard/GameBoard";

const Main = () => {
  const [wonGame, setWonGame] = useState(false);
  const [lostGame, setLostGame] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);

  const winGame = () => setWonGame(true);
  const loseGame = () => setLostGame(true);

  return (
    <div className="game-main">
      <GameBar />
      <GameBoard
        wonGame={wonGame}
        lostGame={lostGame}
        winGame={winGame}
        loseGame={loseGame}
      />
    </div>
  );
};

export default Main;
