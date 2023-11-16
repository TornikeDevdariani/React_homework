import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { useAppContext } from "../../context/AppContextProvider";
import { fetchMovie } from "../../api/movieDetailApi";
import "./DetailPage.css";
import { Container } from "react-bootstrap";

const DetailPage = () => {
  const navigate = useNavigate();
  const { movieID } = useParams();
  console.log(movieID);
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
      <div className="Loader">
        {isLoading && (
          <BarLoader
            id="exacteLoader"
            color="#36d7b7"
            speedMultiplier={0.5}
            width={300}
          />
        )}
      </div>
      <div style={{ marginTop: "100px" }} className="detailPageDiv">
        <div className="movieDetails">
          <div className="movieDetailsImg">
            <img
              id="detailIMG"
              src={movieData.big_image}
              alt="thumbnail"
              height="350px"
            />
          </div>
          <div className="movieDetailsInfo">
            <h1>{movieData.title}</h1>
            <div className="RatingDiv" style={{ display: "flex" }}>
              <svg
                style={{ height: "30px" }}
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1521.000000 801.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                {" "}
                <g
                  transform="translate(0.000000,801.000000) scale(0.100000,-0.100000)"
                  fill="#ffffff"
                  stroke="transparent"
                >
                  {" "}
                  <path d="M734 7989 c-150 -14 -319 -86 -439 -186 -116 -97 -225 -279 -262 -438 -17 -77 -18 -210 -18 -3365 0 -3724 -9 -3352 85 -3545 105 -214 291 -365 530 -428 l85 -22 6895 0 6895 0 85 22 c296 78 515 297 593 593 l22 85 0 3290 c0 3160 -1 3293 -18 3370 -37 159 -146 341 -262 438 -125 105 -285 171 -452 187 -120 12 -13619 11 -13739 -1z m13851 -423 c77 -38 153 -114 191 -191 l29 -60 0 -3315 0 -3315 -29 -60 c-38 -77 -114 -153 -191 -191 l-60 -29 -6915 0 -6915 0 -60 29 c-77 38 -153 114 -191 191 l-29 60 0 3315 0 3315 27 55 c51 103 141 184 241 215 35 11 1230 13 6942 12 l6900 -2 60 -29z"></path>{" "}
                  <path d="M10410 4200 l0 -2200 400 0 400 0 0 100 0 100 78 -39 c277 -138 483 -181 633 -131 187 63 353 228 423 422 62 170 59 119 63 1233 5 1077 -1 1273 -37 1425 -55 224 -191 387 -379 452 -55 19 -87 23 -191 23 l-125 0 -85 -41 c-109 -53 -184 -110 -293 -223 l-87 -90 0 584 0 585 -400 0 -400 0 0 -2200z m1106 575 c26 -15 54 -43 69 -69 l25 -43 0 -858 c0 -857 0 -859 -21 -903 -33 -67 -94 -102 -178 -102 -81 0 -139 31 -176 94 l-25 43 0 863 0 863 25 43 c37 63 94 94 174 94 51 0 73 -5 107 -25z"></path>{" "}
                  <path d="M2810 4000 l0 -2000 400 0 400 0 0 2000 0 2000 -400 0 -400 0 0 -2000z"></path>{" "}
                  <path d="M4010 4000 l0 -2000 400 0 400 0 2 1402 3 1402 360 -1402 360 -1402 249 2 248 3 387 1399 386 1399 3 -1401 2 -1402 400 0 400 0 0 2000 0 2000 -597 0 -598 0 -304 -1015 c-168 -557 -307 -1012 -311 -1010 -3 2 -138 458 -300 1014 l-295 1011 -597 0 -598 0 0 -2000z"></path>{" "}
                  <path d="M8010 3999 l0 -2002 528 6 c290 4 566 11 614 17 203 23 334 62 473 142 162 92 249 177 310 303 74 153 70 60 70 1505 0 1211 -1 1300 -18 1379 -33 153 -100 285 -187 370 -51 50 -262 184 -332 212 -29 11 -84 27 -123 35 -89 18 -522 33 -982 34 l-353 0 0 -2001z m1001 1372 c75 -29 132 -80 166 -149 l28 -57 0 -1175 0 -1175 -27 -51 c-52 -99 -130 -141 -280 -151 l-88 -6 0 1398 0 1398 73 -5 c39 -3 97 -15 128 -27z"></path>{" "}
                </g>{" "}
              </svg>
              <h4 style={{ marginTop: "3px", marginLeft: "10px" }}>
                {movieData.rating}
              </h4>
            </div>

            <div>
              <h5>Year: {movieData.year}</h5>
              <h4>Genre : {movieData.genre}</h4>
              <h4>Director: {movieData.director}</h4>
              <h4>Writer : {movieData.writers}</h4>
              <h5>{movieData.description}</h5>
            </div>
          </div>
        </div>
        <div className="trailer">
          <Container>
            <div className="ratio ratio-16x9">
              <iframe
                id="trailerFrame"
                src={movieData.trailer_embed_link}
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
