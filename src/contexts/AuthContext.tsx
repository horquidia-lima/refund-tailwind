import { createContext } from "react";

export const AuthContext = createContext({name: 'quida'});

export function AuthProvider({children} : {children: React.ReactNode}){
    return(
        <AuthContext.Provider value={{name: 'quida'}}>
              {children}
        </AuthContext.Provider>
    )
}