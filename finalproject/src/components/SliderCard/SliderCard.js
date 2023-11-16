import React from "react";
import { useNavigate } from "react-router-dom";
import movies from "../../pages/movies/Movies";
import "./sliderCard.css";
import routes from "../../constants/routes";
const SliderCard = ({ result }) => {
  const navigate = useNavigate();
  return (
    <div
      className="slider
      
    "
    >
      <div className="sliderContainer" style={{ cursor: "pointer" }}>
        <img id="sliderImg" alt="Movie-IMG" src={result.image} height="250px" />
        <div className="sliderInf">
          <h4 id="sliderH4">{result.title}</h4>
          <button
            id="sliderBtn"
            style={{ cursor: "pointer", marginBottom: "5px" }}
            onClick={() => {
              navigate(`${routes.movies}/${result.id}`);
            }}
          >
            Watch movie
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
