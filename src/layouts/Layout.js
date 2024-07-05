import { Outlet } from 'react-router-dom';
import Navigation from "./navigation/Navigation";
import Footer from "./footer/Footer";
import CookiesWindow from "../components/cookies/CookiesWindow";
import CanonicalLink from "../helpers/CanonicalLink";
const Layout = () => {

    return(
        <>
            <CanonicalLink />
            <Navigation />
            <Outlet />
            <Footer />
            <CookiesWindow />
        </>
    )
}

export default Layout;