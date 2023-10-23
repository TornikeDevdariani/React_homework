/* eslint-disable prettier/prettier */
import React from "react";
import "./card.css";
function Card(props) {
  return (
    <div className="userInfos">
      <img alt="IMG" src={props.img} />
      <h3>
        {props.name} {props.first} {props.last}
      </h3>
      <h5> Gender: {props.gender}</h5>
      <h5>Age: {props.age}</h5>
      <h5>Email: {props.email} </h5>
    </div>
  );
}

export default Card;
