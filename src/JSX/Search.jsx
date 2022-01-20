import Styles from "../CSS/Search.module.css";
import { ImSearch } from "react-icons/im";
import { useNavigate } from 'react-router-dom';
import { useQuery } from "./Hooks/useQuery";

export function Search() {
    const navigate = useNavigate();
    
    const query = useQuery();
    const search = query.get("search");
    


    const handleSubmit = (e) => {
        e.preventDefault();
    }




    return (
        <form className={Styles.searchContainer} onSubmit={handleSubmit}>
            <div className={Styles.searchBox}>
                <input 
                    className={Styles.searchInput} 
                    type="text" value={search} 
                    onChange={(e) => {
                        const value = e.target.value;
                        navigate("/?search=" + value);
                    }}
                    />
                 <ImSearch className={Styles.searchButton}/>
            </div>
        </form>
    )
}