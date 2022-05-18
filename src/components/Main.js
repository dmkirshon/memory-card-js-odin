import React, { useEffect, useState } from "react";
import "./styles/Main.css";
import GameBar from "./gameboard/GameBar";
import GameBoard from "./gameboard/GameBoard";

const Main = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const winGame = () => setPlayerScore((prevScore) => prevScore + 1);
  const loseGame = () => {
    if (playerScore > highScore) setHighScore(playerScore);
    setPlayerScore(0);
  };

  return (
    <div className="game-main">
      <GameBar playerScore={playerScore} highScore={highScore} />
      <GameBoard winGame={winGame} loseGame={loseGame} />
    </div>
  );
};

export default Main;
