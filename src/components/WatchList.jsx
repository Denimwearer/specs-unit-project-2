import React from "react";
import MovieCard from "./MovieCard";

const WatchList = ({ list, removeMovie }) => {
  const movieDisplay = list.map((movie, index) => {
    return (
      <MovieCard
        key={index}
        movie={movie}
        removeMovie={removeMovie}
        list={list}
      />
    );
  });
  return (
    <div className="watchlist">
      <h1>My Watchlist</h1>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default WatchList;
