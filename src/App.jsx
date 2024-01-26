import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import MovieScreen from "./components/MovieScreen";
import WatchList from "./components/WatchList";
import axios from "axios";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${
          import.meta.env.VITE_REACT_APP_API_KEY
        }&language=en-US&page=${page}`
      )
      .then((res) => {
        setMovieList(res.data.results);
      });
  };

  useEffect(() => {
    getData();
  }, [page]);

  const addMovie = (movie) => setList([...list, movie]);

  const removeMovie = (movie) => {
    const newState = list.filter((mov) => {
      return mov !== movie;
    });
    setList(newState);
  };

  return (
    <>
      <Header />
      <main>
        <MovieScreen
          removeMovie={removeMovie}
          addMovie={addMovie}
          movieList={movieList}
          page={page}
          setPage={setPage}
          list={list}
        />
        <WatchList removeMovie={removeMovie} list={list} />
      </main>
    </>
  );
}

export default App;
