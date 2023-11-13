import Header from "./header/Header";
import Offer from "./offer/Offer";
import AboutMe from "./about-me/AboutMe";
import Location from "./location/Location";
import PriceList from "./price-list/PriceList";
import {useEffect} from "react";
import HelmetContent from "../../helpers/HelmetContent";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return(
        <>
            <HelmetContent title="Hallux Clinic - Pogotowie Podologiczne" desc="Stopy to w dalszym ciągu wstydliwy temat, dlatego w swojej pracy staram się, aby każdy pacjent czuł się komfortowo i pozytywnie." />
            <Header />
            <Offer />
            <AboutMe />
            <PriceList />
            <Location/>
        </>
    )
}

export default Home;