import {HashRouter as Router, Routes, Route, Link}   from "react-router-dom"
// import { MovieDetails } from "./Peliculas2/JSX/MovieDetails"
import { ModalPeliculas } from "./Peliculas2/JSX/ModalPeliculas"
import { Home } from "./Peliculas2/JSX/Home"
import Navbar from "./Peliculas2/JSX/Navbar"
import Chats from './Chat2/App'
// import Login from './Chat/components/Login'
import Wallet from './Wallet/App'
// import { ThemeProvider } from '@chakra-ui/core'

// import { AuthProvider } from './Chat/contexts/AuthProvider'


export function App() {

    return (
        // <ThemeProvider>
            <Router>
                <header className="overflow-hidden">
                    <Navbar/>
                </header>
                <main className="overflow-hidden">
                        <Routes>
                            <Route exact path='/movies/:movieId' element={<ModalPeliculas/>}></Route>
                            <Route exact path='/movies' element={<Home/>}></Route>
                            {/* <Route exact path='/wallet' element={<Wallet/>}></Route> */}
                            <Route exact path='/chat' element={<Chats/>}></Route>
                        </Routes>
                </main>
            </Router>
        // </ThemeProvider>
    );
}