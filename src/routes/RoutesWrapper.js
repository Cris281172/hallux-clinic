import {Routes, Route} from 'react-router-dom';
import Layout from "../layouts/Layout";
import Home from "../components/home/Home";
import Offer from "../components/offer/Offer";

const RoutesWrapper = () => {
    return(
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home /> } />
                <Route path="/oferta" element={<Offer /> } />
            </Route>
        </Routes>
    )
}

export default RoutesWrapper;