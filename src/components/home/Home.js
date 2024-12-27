import Header from "./header/Header";
import Offer from "./offer/Offer";
import AboutMe from "./about-me/AboutMe";
import Location from "./location/Location";
import PriceList from "./price-list/PriceList";
import {useEffect} from "react";
import HelmetContent from "../../helpers/HelmetContent";
import Reviews from "./reviews/Reviews";
import MobilePodologist from "./mobile-podologist/MobilePodologist";
import QA from "./qa/QA";
import Statistics from "./statistics/Statistics";
import Salve from "./salve/Salve";

const schemaData = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "Mobilny Gabinet Podologiczny - Hallux Clinic Łódź",
    "image": "https://hallux.clinic/static/media/logo.f767bcb1db8e8122b337.webp",
    "url": "https://hallux.clinic/",
    "telephone": "+48 459 410 096",
    "email": "hallux.clinic@gmail.com",
    "priceRange": "$-$$$",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Armii Krajowej 44",
        "addressLocality": "Łódź",
        "postalCode": "94-046",
        "addressCountry": "PL"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 51.74711912597202,
        "longitude": 19.39417061210181
    },
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "09:00",
            "closes": "20:00"
        }
    ],
    "sameAs": "https://www.facebook.com/people/Hallux-Clinic-Pogotowie-Podologiczne-%C5%81%C3%B3d%C5%BA/61551609556581/"
}

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return(
        <>
            <HelmetContent title="Podolog Łódź Hallux Clinic - Gabinet podologiczny" desc="Stopy to w dalszym ciągu wstydliwy temat, dlatego w swojej pracy staram się, aby każdy pacjent czuł się komfortowo i pozytywnie." script={{type: "application/ld+json", content: JSON.stringify(schemaData)}} />
            <Header />
            <Offer />
            <AboutMe />
            <PriceList />
            <MobilePodologist />
            <Location/>
            <Salve />
            <QA />
            <Reviews />
            <Statistics />
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "HealthAndBeautyBusiness",
                    "name": "Mobilny Gabinet Podologiczny - Hallux Clinic Łódź",
                    "image": "https://hallux.clinic/static/media/logo.f767bcb1db8e8122b337.webp",
                    "url": "https://hallux.clinic/",
                    "telephone": "+48 459 410 096",
                    "email": "hallux.clinic@gmail.com",
                    "priceRange": "$-$$$",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Armii Krajowej 44",
                        "addressLocality": "Łódź",
                        "postalCode": "94-046",
                        "addressCountry": "PL"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 51.74711912597202,
                        "longitude": 19.39417061210181
                    },
                    "openingHoursSpecification": [
                        {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday",
                                "Tuesday",
                                "Thursday",
                                "Friday",
                                "Saturday"
                            ],
                            "opens": "09:00",
                            "closes": "20:00"
                        },
                        {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": "Wednesday",
                            "opens": "10:00",
                            "closes": "20:00"
                        }
                    ],
                    "sameAs": "https://www.facebook.com/people/Hallux-Clinic-Pogotowie-Podologiczne-%C5%81%C3%B3d%C5%BA/61551609556581/"
                })}
            </script>
        </>
    )
}

export default Home;