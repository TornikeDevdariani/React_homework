import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../api/moviesApi";
import { BarLoader } from "react-spinners";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useAppContext } from "../../context/AppContextProvider";
import "./Movies.css";
const Movies = () => {
  const {
    state: { isUserLogged, user },
    dispatch,
  } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);
  const [moviesData, setMoviesData] = useState([]);
  const [error, setError] = useState("second");
  useEffect(() => {
    fetchMovies()
      .then((result) => {
        setMoviesData(result);
        console.log(result);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <div>
        <h1>Movies for you {user.userName}</h1>
        {/* <pre>{JSON.stringify(result, null, 2)}</pre> */}
        <div className="movieCardDiv">
          <div className="Loader">
            {isLoading && (
              <BarLoader color="#36d7b7" speedMultiplier={0.5} width={300} />
            )}
          </div>
          {moviesData &&
            moviesData.map((movies) => (
              <MovieCard
                key={movies.rank}
                title={movies.title}
                thumbnail={movies.image}
                result={movies}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
