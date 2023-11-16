import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchMovies } from "../../api/moviesApi";
import SliderCard from "../SliderCard/SliderCard";
import { BarLoader } from "react-spinners";
const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  const [isLoading, setIsLoading] = useState(true);
  const [moviesData, setMoviesData] = useState([]);
  const [error, setError] = useState("second");
  useEffect(() => {
    fetchMovies()
      .then((result) => {
        setMoviesData(result);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <div style={{ marginRight: "3%" }}>
      <div className="Loader">
        {isLoading && (
          <BarLoader
            id="exactLoader"
            color="#36d7b7"
            speedMultiplier={0.5}
            width={300}
          />
        )}
      </div>
      <Slider
        {...settings}
        style={{
          marginLeft: "30px",
          marginRight: "auto",
        }}
      >
        {moviesData &&
          moviesData
            .slice(0, 8)
            .map((movies) => (
              <SliderCard
                key={movies.rank}
                title={movies.title}
                thumbnail={movies.image}
                result={movies}
              />
            ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
