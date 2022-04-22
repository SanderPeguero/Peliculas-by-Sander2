import {BrowserRouter as Router, Routes, Route, Link}   from "react-router-dom"
import { MovieDetails } from "./Peliculas2/JSX/MovieDetails"
import { ModalPeliculas } from "./Peliculas2/JSX/ModalPeliculas"
import { Home } from "./Peliculas2/JSX/Home"
import Navbar from "./Peliculas2/JSX/Navbar"


export function App() {

    return (
        <Router>
            <header className="overflow-hidden">
                <Navbar/>
            </header>
            <main className="overflow-hidden">
                <Routes>
                    <Route path="/movies/:movieId" element={ <ModalPeliculas/> }> </Route>
                    <Route exact path="/" element={<Home/>}></Route>
                </Routes>
            </main>
       </Router>
    );
}