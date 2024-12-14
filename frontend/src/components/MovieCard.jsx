import "../css/MovieCard.css";

function MovieCard({ movie }) {
  function onFavoriteCick() {
    alert("button clicked");
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteCick}>
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
