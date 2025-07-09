import { createContext } from "react";
import { useState, useEffect } from "react";

type AuthContext = {
    isLoading: boolean
    session: null | userAPIResponse
    save: (user: userAPIResponse) => void
}

const LOCAL_STORAGE_KEY = '@refund'

export const AuthContext = createContext({} as AuthContext);

export function AuthProvider({children} : {children: React.ReactNode}){
    const [session, setSession] = useState<null | userAPIResponse>(null)
    const [isLoading, setIsLoading] = useState(true)

    function save(data: userAPIResponse) {
        localStorage.setItem(`${LOCAL_STORAGE_KEY}:user`, JSON.stringify(data.user))
        localStorage.setItem(`${LOCAL_STORAGE_KEY}:token`, data.token)

        setSession(data)
    }

    function loadUser(){
        const user = localStorage.getItem(`${LOCAL_STORAGE_KEY}:user`)
        const token = localStorage.getItem(`${LOCAL_STORAGE_KEY}:token`)

        if(user && token) {
            setSession({token, user: JSON.parse(user)})
        }

        setIsLoading(false)
    }

    useEffect(() => {
        loadUser()
    }, [])

    return(
        <AuthContext.Provider value={{session, save, isLoading}}>
              {children}
        </AuthContext.Provider>
    )
}