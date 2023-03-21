import React from "react";

export default function Memory({ cards }) {
  return (
    <div>
      <div>
        {cards.map((card) => {
          return <div></div>;
        })}
      </div>
    </div>
  );
}
