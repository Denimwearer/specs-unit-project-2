import React from "react";
import MovieCard from "./MovieCard";

const MovieScreen = ({
  list,
  page,
  setPage,
  movieList,
  addMovie,
  removeMovie,
}) => {
  const movieDisplay = movieList.map((movie, index) => {
    return (
      <MovieCard
        key={index}
        removeMovie={removeMovie}
        addMovie={addMovie}
        movie={movie}
        list={list}
      />
    );
  });

  const decrement = () => setPage(page - 1);

  const increment = () => setPage(page + 1);

  return (
    <div className="page">
      <h1>Cordero's Movie Theatre</h1>
      <h3>Add a movie to your watchList</h3>
      <div className="btn-container">
        <button onClick={page !== 1 ? decrement : undefined}>Previous</button>
        <button onClick={increment}>Next</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default MovieScreen;
