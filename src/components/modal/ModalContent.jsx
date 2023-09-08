import React, { useEffect, useState } from "react";
import Youtube from "react-youtube";
import axios from "axios";
import { APIKEY } from "../../baseUrl";

const ModalContent = ({id}) => {
    console.log("this is original id",id);
  const [trailerId, setTrailerId] = useState("");

  const opts = {
    height: "390",
    width: "100%",
    // playerVars: {
    //   autoplay: 1,
    // },
  };

  const viewTrailer = async (id) => {
    console.log(id);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${APIKEY}&language=en-US`
      )
      .then((response) => {
        console.log(response);
        if (response.data.results.length !== 0) {
          setTrailerId(response.data.results[0].key);
        } else {
          console.log("Empty Data");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    viewTrailer(id);
  }, []);

  console.log(trailerId, "hshhshsh");

  return (
    <div>
      <Youtube videoId={trailerId} opts={opts} />
    </div>
  );
};

export default ModalContent;
