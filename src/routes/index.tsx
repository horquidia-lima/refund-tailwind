import { BrowserRouter } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { AuthRoutes } from "./AuthRoutes";
import { Loading } from "../components/Loading";
import { EmployeeRoutes } from "./EmployeeRoutes";
import { ManagerRoutes } from "./ManagerRoutes";

const isLoading = false
//const session = undefined

const session = {
    user: {
        role: "", /* manager | employee */
    },
}
export function Routes() {
   const context = useAuth()
    console.log(context)

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