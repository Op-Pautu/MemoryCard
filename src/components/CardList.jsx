import React from "react";
import Card from "./Card";

export default function CardList({
  cardList,

  score,
  setScore,
  bestScore,
  setBestScore,
  clickedCards,
  setClickedCards,
}) {
  const shuffle = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const isMobile = window.innerWidth <= 850;
  const numberOfCardsToDisplay = isMobile ? 5 : 10;

  const shuffledCards = shuffle(cardList);

  const selectedCards = shuffledCards.slice(0, numberOfCardsToDisplay);
  return (
    <div className="cardList">
      {selectedCards.map((card) => {
        return (
          <div className="card-container" key={card.id}>
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
              cards={cardList}
            />
          </div>
        );
      })}
    </div>
  );
}
