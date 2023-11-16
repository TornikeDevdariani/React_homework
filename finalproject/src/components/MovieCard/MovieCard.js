import React from "react";
import { useNavigate } from "react-router-dom";
import movies from "../../pages/movies/Movies";
import "./movieCard.css";
import routes from "../../constants/routes";
const MovieCard = ({ result }) => {
  const navigate = useNavigate();
  return (
    <div
      className="movieCard
      
    "
    >
      <img alt="Movie-IMG" src={result.image} height="250px" />
      <h4>{result.title}</h4>
      <button
        style={{ cursor: "pointer", marginBottom: "5px" }}
        onClick={() => {
          navigate(`${routes.movies}/${result.id}`);
        }}
      >
        Watch movie
      </button>
    </div>
  );
};

export default MovieCard;
