import { Outlet } from 'react-router-dom';
import Navigation from "./navigation/Navigation";
import Footer from "./footer/Footer";
import CookiesWindow from "../components/cookies/CookiesWindow";

const Layout = () => {

    return(
        <>
            <Navigation />
            <Outlet />
            <Footer />
            <CookiesWindow />
        </>
    )
}

export default Layout;