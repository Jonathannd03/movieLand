import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

//590d6a26

const API_URL = "http://www.omdbapi.com?apikey=590d6a26";


function App() {
  const [movies, setMovie] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchMovies = async (tittle) => {
    const response = await fetch(`${API_URL}&s=${tittle}`);
    const data = await response.json();

    setMovie(data.Search);
  };

  useEffect(() => {
    searchMovies("batman");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movieOne={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No moivies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
