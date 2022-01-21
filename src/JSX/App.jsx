import {BrowserRouter as Router, Routes, Route, Link}   from "react-router-dom";
import { MovieDetails } from "./MovieDetails.jsx";
import { Home } from "./Home";
import Navbar from "./Navbar.jsx";


export function App() {
    return (
        <Router>
            <header className="mt-4 overflow-hidden">
                <Link to="/"> 
                    < Navbar/>
                </Link>
            </header>
            <main className="overflow-hidden">
                <Routes>
                    <Route extact path="/movies/:movieId" element={<MovieDetails />}> </Route>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
            </main>
       </Router>
    );
}