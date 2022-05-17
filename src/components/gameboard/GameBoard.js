import React, { useState, useEffect } from "react";
import Card from "./Card";

const GameBoard = ({ wonGame, lostGame, winGame, loseGame }) => {
  const NUMBER_OF_CARDS = 12;

  const [pickedEmoji, setPickedEmoji] = useState(null);
  const [selectedEmojis, setSelectedEmojis] = useState([]);
  const [placedEmojis, setPlacedEmojis] = useState(placeCards());

  function selectEmoji(event) {
    const emojiSelected = event.target.getAttribute("data-index");
    setPickedEmoji(emojiSelected);
  }

  useEffect(
    function checkLoseGame() {
      if (selectedEmojis.includes(pickedEmoji)) {
        console.log("lose");
        loseGame();
      } else if (pickedEmoji !== null) {
        setSelectedEmojis((prev) => [...prev, pickedEmoji]);
        setPickedEmoji(null);
      }
    },
    [pickedEmoji, selectedEmojis]
  );

  useEffect(
    function checkWinGame() {
      if (selectedEmojis.length === NUMBER_OF_CARDS) {
        console.log("You Win");
      } else if (pickedEmoji !== null && !lostGame) {
        setPlacedEmojis(placeCards);
      }
    },
    [selectedEmojis, pickedEmoji, loseGame, placeCards]
  );

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
      <Card
        key={cardNumber}
        emojiIndex={cardNumber}
        selectEmoji={selectEmoji}
      />
    ));
    return cardPlacement;
  }

  return <div className="game-main-gameboard">{placedEmojis}</div>;
};

export default GameBoard;
