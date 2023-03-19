import { useState } from "react";
import { cats } from "./cats";
import "./App.css";
import CardList from "./components/CardList";

function App() {
  const [cards, setCards] = useState(cats);

  return (
    <div className="App">
      <h1 className="title">Memory Game</h1>
      <CardList cardList={cards} />
    </div>
  );
}

export default App;
