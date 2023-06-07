import React from "react";
import "./card.css";


const Card = (props) => {
  return (
    <div className="container">
      <div className="card">
        <img src={`https://robohash.org/${props.id}`} alt="roboFreind" />
        <h3>{props.name}</h3>
        <span>{props.email}</span>
      </div>
    </div>
  );
};

export default Card;
