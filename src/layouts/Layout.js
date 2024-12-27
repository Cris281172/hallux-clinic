import { Outlet } from 'react-router-dom';
import Navigation from "./navigation/Navigation";
import Footer from "./footer/Footer";
import CanonicalLink from "../helpers/CanonicalLink";
const Layout = () => {

    return(
        <>
            <CanonicalLink />
            <Navigation />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;