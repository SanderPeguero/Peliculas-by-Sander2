import React, { useContext, useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"

import { auth } from "../firebase"

const AuthContext = React.createContext()

export function useAuth() { return useContext(AuthContext) }

export function AuthProvider({ children }){
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState()
    const history = useNavigate()
    const location = useLocation()

    useEffect(() => {
        // if(location.pathname == '/login' || location.pathname == '/chat'){
        // if(location.pathname == '/sander'){

            console.log("EL HOOK ENTRO EN EFECTO");

            auth.onAuthStateChanged(user => {
                setUser(user)
                setLoading(false)
                history('/chat')
            })

        // }else{
            // return;
        // }
    }, [user],[history])

    const value = { user }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
