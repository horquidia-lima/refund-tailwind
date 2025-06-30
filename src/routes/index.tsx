import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./AuthRoutes";
import { Loading } from "../components/Loading";
import { EmployeeRoutes } from "./EmployeeRoutes";
import { ManagerRoutes } from "./ManagerRoutes";

const isLoading = false
export function Routes() {
    if(isLoading){
        return <Loading />
    }

    return (
        <BrowserRouter>
            <AuthRoutes />
        </BrowserRouter>
    );
}