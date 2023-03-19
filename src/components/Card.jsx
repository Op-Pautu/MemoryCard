import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img
        src={`https://robohash.org/${props.id}?size=200x200&set=set4`}
        alt="cats"
      />
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
}
