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
        <form onSubmit={handleSubmit} style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '1rem'
        }}>
            <div style={{ position: 'relative' }}>
                <input 
                    className={Styles.searchInput} 
                    type="text" value={search ? search : ""} 
                    placeholder="search"
                    onChange={(e) => {
                        const valor = e.target.value;
                        navigate("?search=" + valor);
                    }}
                    style={{
                        fontSize: '1.1rem',
                        height: '30px',
                        width: '200px',
                        borderRadius: '10px',
                        padding: '5px 20px 5px 10px',
                        border: '2px solid #0d1d2e',
                        boxShadow: '0 0 5px #0d1d2e',
                        color: '#000000'
                    }}
                />
                 <ImSearch style={{
                     position: 'absolute',
                     right: '10px',
                     top: '0',
                     cursor: 'pointer',
                     height: '100%',
                     color: '#000000',
                     border: 'none',
                     background: 'none'
                 }}/>
            </div>
        </form>
    )
}