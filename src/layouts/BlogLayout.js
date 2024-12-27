import {Outlet} from "react-router-dom";
import AdminNavigation from "./navigation/AdminNavigation";

const AdminLayout = () => {
    return(
        <>
            <AdminNavigation />

            <div className={'container'}>
                <Outlet/>
            </div>
        </>
    )
}

export default AdminLayout;