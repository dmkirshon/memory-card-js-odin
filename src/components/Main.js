import React, { useEffect, useState } from "react";
import "./styles/Main.css";
import GameBar from "./gameboard/GameBar";
import GameBoard from "./gameboard/GameBoard";

const Main = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const matchPoint = () => setPlayerScore((prevScore) => prevScore + 1);
  const endGame = () => {
    if (playerScore > highScore) setHighScore(playerScore);
    setPlayerScore(0);
  };

  return (
    <div className="game-main">
      <GameBar playerScore={playerScore} highScore={highScore} />
      <GameBoard matchPoint={matchPoint} endGame={endGame} />
    </div>
  );
};

export default Main;
