import React from "react";
import "./styles/Main.css";
import GameBar from "./gameboard/GameBar";
import GameBoard from "./gameboard/GameBoard";

const Main = () => {
  return (
    <div className="game-main">
      <GameBar />
      <GameBoard />
    </div>
  );
};

export default Main;
