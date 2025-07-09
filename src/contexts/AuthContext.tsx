import { createContext } from "react";
import { useState } from "react";

type AuthContext = {
    session: null | userAPIResponse
    save: (user: userAPIResponse) => void
}

export const AuthContext = createContext({} as AuthContext);

export function AuthProvider({children} : {children: React.ReactNode}){
    const [session, setSession] = useState<null | userAPIResponse>(null)

    function save(data: userAPIResponse) {
        setSession(data)
    }

    return(
        <AuthContext.Provider value={{session, save}}>
              {children}
        </AuthContext.Provider>
    )
}