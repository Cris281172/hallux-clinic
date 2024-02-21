import {Routes, Route} from 'react-router-dom';
import Layout from "../layouts/Layout";
import Home from "../components/home/Home";
import OfferGrid from "../components/offer/OfferGrid";
import HomeOffer from '../components/home/offer/Offer'
import Contact from "../components/contact/Contact";
import PriceList from "../components/home/price-list/PriceList";
import AboutMe from "../components/about-me/AboutMe";
import Result from "../components/contact/Result";
import PrivacyPolicy from "../components/cookies/privacy-policy/PrivacyPolicy";
import RodoWrapper from "../components/cookies/rodo";
import InformationalInformationWebsite from "../components/cookies/rodo/InformationalInformationWebsite";
import NoMatch from "../components/no-match/NoMatch";
import Gallery from "../components/gallery/Gallery";
import SingleOffer from "../components/offer/single-offer/SingleOffer";
import MobilePodologist from "../components/mobile-podologist/MobilePodologist";
const RoutesWrapper = () => {
    return(
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home /> } />
                <Route path="/usluga" element={<HomeOffer /> } />
                <Route path="/usluga/:categoryId" element={<OfferGrid /> } />
                <Route path="/usluga/:categoryId/:serviceId" element={<SingleOffer /> } />
                <Route path="/cennik" element={<PriceList />} />
                <Route path="/o-mnie" element={<AboutMe />} />
                <Route path="/galeria" element={<Gallery />} />
                <Route path="/kontakt" element={<Contact /> } />
                <Route path="/kontakt/:status" element={<Result />} />
                <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
                <Route path="/rodo/:id" element={<RodoWrapper />} />
                <Route path="/mobilny-podolog" element={<MobilePodologist />} />
            </Route>
            <Route path="*" element={<NoMatch />} />
        </Routes>
    )
}

export default RoutesWrapper;