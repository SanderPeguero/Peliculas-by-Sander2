import { useQuery } from "./Hooks/useQuery";
import { useDebounce } from "./Hooks/useDebounce";
import { MoviesGrid } from "./MoviesGrid";


export function Home() {
    const query = useQuery();
    const search = query.get("search"); 

    const debouncedSearch = useDebounce(search, 300);

    return (
        <div>
            <MoviesGrid key={debouncedSearch} search={debouncedSearch}/>
        </div>
    );  
}