import {Routes, Route} from 'react-router-dom';
import Layout from "../layouts/Layout";
import Home from "../components/home/Home";
import Offer from "../components/offer/Offer";
import HomeOffer from '../components/home/offer/Offer'
import Contact from "../components/contact/Contact";
import PriceList from "../components/home/price-list/PriceList";
import AboutMe from "../components/about-me/AboutMe";
import Result from "../components/contact/Result";
const RoutesWrapper = () => {
    return(
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home /> } />
                <Route path="/usluga" element={<HomeOffer /> } />
                <Route path="/usluga/:id" element={<Offer /> } />
                <Route path="/cennik" element={<PriceList />} />
                <Route path="/o-mnie" element={<AboutMe />} />
                <Route path="/kontakt" element={<Contact /> } />
                <Route path="/kontakt/:status" element={<Result />} />

            </Route>
        </Routes>
    )
}

export default RoutesWrapper;