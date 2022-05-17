import React, { useState, useEffect } from "react";
import Card from "./Card";

const GameBoard = () => {
  const NUMBER_OF_CARDS = 12;

  const [selectedEmojis, setSelectedEmojis] = useState([]);
  const [placedEmojis, setplacedEmojis] = useState(placeCards());

  function checkWinGame() {
    if (selectedEmojis.length === NUMBER_OF_CARDS) {
      console.log("You Win");
    }
  }

  function placeCards() {
    const randomCardDigits = [];
    for (let i = 0; i < NUMBER_OF_CARDS; i++) {
      while (randomCardDigits.length < i + 1) {
        const randomDigit = Math.floor(Math.random() * NUMBER_OF_CARDS);
        if (!randomCardDigits.includes(randomDigit))
          randomCardDigits[i] = randomDigit;
      }
    }
    const cardPlacement = randomCardDigits.map((cardNumber) => (
      <Card key={cardNumber} emojiIndex={cardNumber} />
    ));
    return cardPlacement;
  }

  return <div className="game-main-gameboard">{placedEmojis}</div>;
};

export default GameBoard;
