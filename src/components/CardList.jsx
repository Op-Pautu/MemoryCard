import React from "react";
import Card from "./Card";

export default function CardList({ cardList }) {
  return (
    <div className="cardList">
      {cardList.map((card) => {
        return (
          <div className="card-container">
            <Card
              key={card.id}
              id={card.id}
              name={card.name}
              username={card.username}
              email={card.email}
            />
          </div>
        );
      })}
    </div>
  );
}
