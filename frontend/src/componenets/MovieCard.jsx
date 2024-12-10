


function MovieCard({movie}) {

    function onFavoriteCick() {

        alert ("button clicked")
        
    }



    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title} />
            <div className="movie-overlay">
                <button className="favorite-btn" onClick ={onFavoriteCick}>
                ❤︎
                </button>

            </div>

        </div>

        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_year}</p>
            {/* <h3>{movie.rating}</h3> */}
        </div>

    </div>


    
}
export default MovieCard;