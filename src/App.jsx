import {BrowserRouter as Router, Routes, Route, Link}   from "react-router-dom"
import { MovieDetails } from "./Peliculas2/JSX/MovieDetails"
import { ModalPeliculas } from "./Peliculas2/JSX/ModalPeliculas"
import { Home } from "./Peliculas2/JSX/Home"
import Navbar from "./Peliculas2/JSX/Navbar"
import Chats from './Chat/components/Chats'
import Login from './Chat/components/Login'
// import { AuthProvider } from './Chat/contexts/AuthProvider'


export function App() {

    return (
        <Router>
            <header className="overflow-hidden">
                <Navbar/>
            </header>
            <main className="overflow-hidden">
                    <Routes>
                        <Route exact path='/movies/:movieId' element={ <ModalPeliculas/> }> </Route>
                        <Route exact path='/' element={<Home/>}></Route>
                        <Route exact path='/chat' element={
                            // <AuthProvider>
                                <Chats/>
                            // </AuthProvider>
                        }></Route>
                        <Route exact path='/login' element={
                            // <AuthProvider>
                                <Login/>
                            // </AuthProvider>
                        }></Route>
                    </Routes>
            </main>
       </Router>
    );
}