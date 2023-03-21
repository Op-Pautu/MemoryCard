import { useState } from "react";
import { cats } from "./cats";
import "./App.css";
import CardList from "./components/CardList";

function App() {
  const [cards, setCards] = useState(cats);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
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
  return (
    <div className="App">
      <div className="header">
        <h1 className="title">Memory Game</h1>
        <div className="scoreboard">
          <p>Score: {score}</p>
          <p>Best Score: {bestScore}</p>
        </div>
      </div>

      <CardList
        cardList={cards}
        shuffle={shuffle}
        score={score}
        setScore={setScore}
        setBestScore={setBestScore}
        bestScore={bestScore}
        clickedCards={clickedCards}
        setClickedCards={setClickedCards}
      />
    </div>
  );
}

export default App;
