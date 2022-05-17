import React from "react";
import emojis from "../assets/emojis.json";

const Card = ({ emojiIndex, selectEmoji }) => {
  function insertEmoji(index) {
    return Object.entries(emojis)[index][1];
  }

  return (
    <div
      data-index={emojiIndex}
      onClick={(e) => selectEmoji(e)}
      className="game-main-gameboard-card"
    >
      {insertEmoji(emojiIndex)}
    </div>
  );
};

export default Card;
