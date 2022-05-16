import React from "react";
import emojis from "../assets/emojis.json";

const Card = ({ emojiIndex }) => {
  function insertEmoji(index) {
    return Object.entries(emojis)[index][1];
  }

  return (
    <div className="game-main-gameboard-card">
      <div className="game-main-gameboard-card-emoji">
        {insertEmoji(emojiIndex)}
      </div>
    </div>
  );
};

export default Card;
