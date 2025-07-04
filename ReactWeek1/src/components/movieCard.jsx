import { useEffect } from "react"
import movieImage from '../../movie.jpg';

function MovieCard({ movie }) {
    function favClick() {
        alert("clicked")
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movieImage} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={favClick}>
                        🤍
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    )

}

export default MovieCard