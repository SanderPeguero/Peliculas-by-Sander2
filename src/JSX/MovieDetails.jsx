import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { get } from "../Api.js";
import styles from "../CSS/MovieDetails.module.css";
import { Spinner } from "./Spinner.jsx";
import poster from "../Images/Poster.png";


export function MovieDetails() {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [Movies, setMovie] = useState(null);


    useEffect(() => {  
        setIsLoading(true);
        get("/movie/" + movieId).then((data) => {
            setMovie(data);
            setIsLoading(false);
        });
      }, [movieId]);

    if (isLoading) {
        return <Spinner/>;
    }
    if (!Movies) {
        return null;
    }

    const imageUrl = Movies.poster_path ? "https://image.tmdb.org/t/p/w500" + Movies.poster_path : poster;

    return ( 
        <div className={styles.detailsContainer}>
            <img 
                className={`${styles.title} ${styles.movieImage}`}
                src={imageUrl} 
                alt={Movies.title} 
            />
            <div className={`${styles.title} ${styles.movieDetails}`}>
                <p className={styles.firstItem}><strong className={styles.subtitle}>Title:</strong> {Movies.title}</p>
                <p><strong className={styles.subtitle}>Genres:</strong>{Movies.genres.map(genre => genre.name).join(", ")}</p>
                <p><strong className={styles.subtitle}>Duration:</strong> {Movies.runtime} minutes</p>
                <p><strong className={styles.subtitle}>Release Date:</strong> {Movies.release_date}</p>
                <p>
                    <strong className={styles.subtitle}>Home Page:  </strong> 
                    <a className={styles.link} href= {Movies.homepage}>
                         {Movies.homepage} 
                    </a> 
                </p>
                <p><strong className={styles.subtitle}>Description:</strong> {Movies.overview}</p>
            </div>
        </div>
    );
}