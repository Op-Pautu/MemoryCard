import React from "react";

export default function Card({
  id,
  name,
  email,
  score,
  setScore,
  bestScore,
  setBestScore,
  clickedCards,
  setClickedCards,
  shuffle,
}) {
  const handleClick = () => {
    // Check if the card has already been clicked
    if (clickedCards.includes(id)) {
      // Game over
      setScore(0);
      setClickedCards([]);
    } else {
      // Increment the score
      setScore((prevScore) => prevScore + 1);
      // Add the clicked card to the list of clicked cards
      setClickedCards((prevClickedCards) => [...prevClickedCards, id]);
      // Check if the new score is greater than the best score
      if (score + 1 > bestScore) {
        setBestScore(score + 1);
      }
    }
    // Reshuffle the cards
    shuffle(cards);
  };

  return (
    <div
      className="card"
      // update score
      onClick={handleClick}
    >
      <img
        src={`https://robohash.org/${id}?size=200x200&set=set4`}
        alt="cats"
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}
