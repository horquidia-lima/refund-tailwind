import { BrowserRouter } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { AuthRoutes } from "./AuthRoutes";
import { Loading } from "../components/Loading";
import { EmployeeRoutes } from "./EmployeeRoutes";
import { ManagerRoutes } from "./ManagerRoutes";

const isLoading = false

export function Routes() {
   const {session} = useAuth()
    

    function Route(){
        switch(session?.user.role){
            case "manager": return <ManagerRoutes />;
            case "employee": return <EmployeeRoutes />
            default: return <AuthRoutes />
        }
    }

    if(isLoading){
        return <Loading />
    }

    return (
        <BrowserRouter>
            <Route />
        </BrowserRouter>
    );
}