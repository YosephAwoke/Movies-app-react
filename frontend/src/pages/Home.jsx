import MovieCard from "../componenets/MovieCard";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Dune", release_year: "2021" },
    { id: 2, title: "Spider Man", release_year: "2003" },
    { id: 3, title: "Avator", release_year: "2007" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();

    alert(`Searching for ${searchQuery}`);
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search Movies"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movie-grid">
        {movies.map(
          (movie) =>
            // movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard key={movie.id} movie={movie} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
