import React from "react";
import Card from "./Card";

export default function CardList({
  cardList,
  shuffle,
  score,
  setScore,
  bestScore,
  setBestScore,
  clickedCards,
  setClickedCards,
}) {
  const shuffledCards = shuffle(cardList);

  //display only 10 cards
  shuffledCards.length = 10;

  return (
    <div className="cardList">
      {shuffledCards.map((card) => {
        return (
          <div className="card-container">
            <Card
              key={card.id}
              id={card.id}
              name={card.name}
              username={card.username}
              email={card.email}
              score={score}
              setScore={setScore}
              bestScore={bestScore}
              setBestScore={setBestScore}
              clickedCards={clickedCards}
              setClickedCards={setClickedCards}
              shuffle={shuffle}
            />
          </div>
        );
      })}
    </div>
  );
}
