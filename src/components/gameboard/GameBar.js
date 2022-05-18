import React from "react";
import Score from "./Score";

const GameBar = ({ playerScore, highScore }) => {
  return (
    <div className="game-main-gamebar">
      <Score playerScore={playerScore} highScore={highScore} />
    </div>
  );
};

export default GameBar;
