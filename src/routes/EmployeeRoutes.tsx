import {Routes, Route} from 'react-router'

import { NotFound } from "../pages/NotFound";
import { Refund } from '../pages/Refund';
import { AppLayout } from '../components/AppLayout';

export function EmployeeRoutes(){
    return(
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route path="/" element={<Refund />} />
            </Route>

            <Route path="*" element={<NotFound />} />

        </Routes>
    )
}