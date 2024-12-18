import "../css/MovieCard.css";
import { useMovieContext } from "../context/MovieContext";

function MovieCard({ movie }) {

  const { addToFavorites, removeFromFavorites, isFavorites } = useMovieContext();
  const favorite = isFavorites(movie.id);


  function onFavoriteCick(e) {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className="movie-overlay">
          <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteCick}>
            ❤︎
          </button>
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split( "-") [0] }</p>
        {/* <h3>{movie.rating}</h3> */}
      </div>
    </div>
  );
}
export default MovieCard;
