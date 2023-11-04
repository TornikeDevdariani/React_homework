import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { useAppContext } from "../../context/AppContextProvider";
import { fetchMovie } from "../../api/moviesApi";
import MovieCard from "../../components/MovieCard/MovieCard";

const DetailPage = ({ result }) => {
  const navigate = useNavigate();
  const { movieID } = useParams();
  const {
    state: { isUserLogged, user },
    dispatch,
  } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);
  const [movieData, setMovieData] = useState([]);
  const [error, setError] = useState("second");
  useEffect(() => {
    fetchMovie(movieID)
      .then((result) => {
        setMovieData(result);
        console.log(result);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieID]);

  return (
    <div>
      <div>
        <div className="Loader">
          {isLoading && (
            <BarLoader color="#36d7b7" speedMultiplier={0.5} width={300} />
          )}
        </div>
        <h1>{result.title}</h1>
      </div>
    </div>
  );
};

export default DetailPage;
