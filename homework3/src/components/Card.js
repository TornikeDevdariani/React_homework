import React from "react";

function Card(props) {
  return (
    <div className="shopping-item">
      <h3>{props.id}</h3>
      <img alt={props.alt} src="https://source.unsplash.com/random/200x300" />
      <h5>{props.stock}</h5>
      <h5>{props.Points}</h5>
      <h5>{props.style} lifestyle</h5>
      <button>Add To Cart</button>
    </div>
  );
}

export default Card;
