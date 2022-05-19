import { useQuery } from "./Hooks/useQuery";
import { useDebounce } from "./Hooks/useDebounce";
import { MoviesGrid } from "./MoviesGrid";
import { Search } from "./Search.jsx";

export function Home() {
    const query = useQuery();
    const search = query.get("search"); 

    const debouncedSearch = useDebounce(search, 300);

    return (
        <div id="home" style={{overflow: 'hidden'}}>
            <Search/>
            <MoviesGrid key={debouncedSearch} search={debouncedSearch}/>
        </div>
    );  
}