import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import styles from "../CSS/MoviesGrid.module.css";
import { get } from "../Api.js";
import { Spinner } from "./Spinner.jsx";
import { useQuery } from "./Hooks/useQuery";
import InfiniteScroll from "react-infinite-scroll-component";


export function MoviesGrid() {
  const [Movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [has_More, sethas_More] = useState(true);

  const query = useQuery();
  const search = query.get("search"); 
  
  useEffect(() => {  
    const searchUrl = search 
    ? "/search/movie?query=" + search + "&page=" + page
    : "/discover/movie?page=" + page; 
    get(searchUrl).then((data) => {
      setMovies(prevMovies => prevMovies.concat(data.results));
      sethas_More(data.page < data.total_pages);
    });
  }, [search, page]);


    return( 
      <InfiniteScroll 
      dataLength={Movies.length} 
      hasMore={has_More} 
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Spinner/>}
      >

      <ul className={styles.MoviesGrid}>
        {Movies.map((movie) => (
            <MovieCard key = {movie.id } movie = {movie}></MovieCard>
        ))}
      </ul>

      </InfiniteScroll>
    );
}