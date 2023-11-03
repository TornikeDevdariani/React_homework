import React, { useEffect, useState } from "react";
import { fetchSeries } from "../../api/seriesApi";
import { BarLoader } from "react-spinners";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useAppContext } from "../../context/AppContextProvider";

const Series = () => {
  const {
    state: { isUserLogged, user },
    dispatch,
  } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);
  const [seriesData, setSeriesData] = useState([]);
  const [error, setError] = useState("second");
  useEffect(() => {
    fetchSeries()
      .then((result) => {
        setSeriesData(result);
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
        <h1>Series for you {user.userName}</h1>
        {/* <pre>{JSON.stringify(result, null, 2)}</pre> */}
        <div className="movieCardDiv">
          <div className="Loader">
            {isLoading && (
              <BarLoader color="#36d7b7" speedMultiplier={0.5} width={300} />
            )}
          </div>
          {seriesData &&
            seriesData.map((series) => (
              <MovieCard
                key={series.rank}
                title={series.title}
                thumbnail={series.image}
                result={series}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Series;
