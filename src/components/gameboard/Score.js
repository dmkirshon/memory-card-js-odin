import React from "react";

const Score = ({ playerScore, highScore }) => {
  return (
    <div className="game-main-gamebar-score">
      Score: {playerScore} | High Score: {highScore}
    </div>
  );
};

export default Score;
