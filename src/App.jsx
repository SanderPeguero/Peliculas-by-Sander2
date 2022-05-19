import {BrowserRouter as Router, Routes, Route, Link}   from "react-router-dom"
import { ModalPeliculas } from "./Peliculas2/JSX/ModalPeliculas"
import { Home } from "./Peliculas2/JSX/Home"
import Navbar from "./Peliculas2/JSX/Navbar"
import Chats from './Chat2/App'
import Wallet from './Wallet/App'
import { SnackbarProvider } from 'notistack'


export function App() {

    return (
        <SnackbarProvider>
            <Router>
            {/* className="overflow-hidden" */}
                <header style={{overflow: 'hidden'}}>
                    <Navbar/>
                </header>
                {/* className="overflow-hidden" */}
                <main style={{overflow: 'hidden'}}>
                        <Routes>
                            <Route exact path='/movies/:movieId' element={<ModalPeliculas/>}></Route>
                            <Route exact path='/movies' element={<Home/>}></Route>
                            {/* <Route exact path='/wallet' element={<Wallet/>}></Route> */}
                            {/* <Route exact path='/chat' element={<Chats/>}></Route> */}
                        </Routes>
                </main>
            </Router>
        </SnackbarProvider>
    );
}