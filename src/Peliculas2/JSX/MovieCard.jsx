import { Link } from "react-router-dom";
import styles from "../CSS/MovieCard.module.css";
import poster from "../Images/Poster.png";

export function MovieCard ({ movie }) {
    const imageUrl = movie.poster_path ? "https://image.tmdb.org/t/p/w300" + movie.poster_path : poster;
    return (
        <li className={styles.MovieCard}>
            <Link to={"/movies/" + movie.id}> 
                <img 
                width={230}
                height={345}
                className={styles.MovieImage} 
                src={imageUrl} 
                alt={movie.title}
                />
                
                <div>{movie.title}</div>
            </Link>    
        </li>
    );
}