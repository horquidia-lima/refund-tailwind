import { createContext } from "react";
import { useState } from "react";

type AuthContext = {
    session: null | userAPIResponse
}

export const AuthContext = createContext({} as AuthContext);

export function AuthProvider({children} : {children: React.ReactNode}){
    const [session, setSession] = useState<null | userAPIResponse>(null)
    return(
        <AuthContext.Provider value={{session}}>
              {children}
        </AuthContext.Provider>
    )
}