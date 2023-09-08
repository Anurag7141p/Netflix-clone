import React from "react";
import { useState, useEffect } from "react";
import { instance, imageUrl } from "../../baseUrl";
import Modal from "react-modal";
import "./Row.css";

import ModalContent from "../modal/ModalContent";

function Row({ isLargeRow, title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [id, setId] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "23%",
      left: "20%",
      right: "20%",
      bottom: "auto",
      background: "black",
      padding: "1px",
      borderRadius: "20px",
    },
  };

  const bg = {
    overlay: {
      background: "#FFFF00",
    },
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const setIdAndModal = (id) => {
    setId(id);
    openModal();
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await instance.get(fetchUrl);
      setMovies(result.data.results);
    };
    
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h1>{title}</h1>

      <div className="movies">
        {movies.map((movie) => (
          <img
            key={movie.id}
            alt="#"
            onClick={() => setIdAndModal(movie.id)}
            className={isLargeRow ? "largemovie" : "movie"}
            src={`${imageUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
          />
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        styles={bg}
      >
        <ModalContent id={id} />
      </Modal>
    </div>
  );
}

export default Row;
