import React, { useState } from "react";
import Card from "./Card";

const GameBoard = () => {
  function placeCards() {
    const randomCardDigits = [];
    for (let i = 0; i < 12; i++) {
      while (randomCardDigits.length < i + 1) {
        const randomDigit = Math.floor(Math.random() * 12);
        if (!randomCardDigits.includes(randomDigit))
          randomCardDigits[i] = randomDigit;
      }
    }
    const cardPlacement = randomCardDigits.map((cardNumber) => (
      <Card key={cardNumber} emojiIndex={cardNumber} />
    ));
    return cardPlacement;
  }

  return <div className="game-main-gameboard">{placeCards()}</div>;
};

export default GameBoard;
