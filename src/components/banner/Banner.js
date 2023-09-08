import React from "react";
import { useState, useEffect } from "react";
import { instance, imageUrl } from "../../baseUrl";
import "./Banner.css";

function Banner({ fetchUrl }) {
  const [movie, setMovies] = useState([]);

  const fetchData = async () => {
    const result = await instance.get(fetchUrl);
    // console.log(result);

    setMovies(
      result.data.results[
        Math.floor(Math.random() * result.data.results.length - 1)
      ]
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "...." : str;
  };

  return (
    // <div
    //   className="banner"
    //   style={{
    //     backgroundImage: `url(${imageUrl}${movie.backdrop_path})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   }}
    // >
    //   <div className="banner-content">
    //     <h1 className="banner-title">{movie.name }</h1>
    //     <h4 className="banner-overview">{truncate(movie.overview, 150)}</h4>
    //   </div>
    // </div>
    <div>
      <div
        className="banner"
        style={{
          backgroundImage: `linear-gradient(to right,
          rgba(0, 0, 0, 4), 
          transparent
        ),
        url(${imageUrl}${movie.backdrop_path})`,
          backgroundSize: "cover",
          width:"100%",
          height:"550px",
          // backgroundPosition: "center",
          backgroundRepeat:"no-repeat"
        }}
      >
        <div className="content">
          <h1 className="title">{movie.name} </h1>
          <div className="banner_buttons">
            <button className="button">Play</button>
            <button className="button">My list</button>
          </div>
          <h1 className="description">{truncate(movie.overview, 150)}</h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;
