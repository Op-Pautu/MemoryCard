import { useState } from "react";
import { cats } from "./cats";
import "./App.css";
import CardList from "./components/CardList";

function App() {
  const [cards, setCards] = useState(cats);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

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
        score={score}
        setScore={setScore}
        setBestScore={setBestScore}
        bestScore={bestScore}
        clickedCards={clickedCards}
        setClickedCards={setClickedCards}
        setCards={setCards}
      />
    </div>
  );
}

export default App;
