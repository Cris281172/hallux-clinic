import styles from './Offer.module.scss'
import SingleOffer from "./SingleOffer";
import offer1 from '../../../images/home/offer/offer1.webp'
import offer2 from '../../../images/home/offer/offer2.webp'
import offer3 from '../../../images/home/offer/offer3.webp'
import offer4 from '../../../images/home/offer/offer4.webp'
import offer5 from '../../../images/home/offer/offer5.webp'
import offer6 from '../../../images/home/offer/offer6.webp'
import OfferConfig from "../../../config/OfferConfig";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import HelmetContent from "../../../helpers/HelmetContent";
import BackButton from "../../../helpers/back-button/BackButton";
import Breadcrumbs from "../../../helpers/breadcrumbs/Breadcrumbs";

const Offer = () => {

    const location = useLocation()

    const offerConfig = OfferConfig;

    const [link, setLink] = useState("")

    useEffect(() => {
        location.pathname === '/' ? setLink("usluga/") : setLink("")
    }, []);

    return(
        <>
            {location.pathname === '/' ? '' : <HelmetContent title="Oferta - Podolog Łódź Hallux Clinic" desc="Sprawdź naszą ofertę zabiegów podologicznych w Łodzi. Hallux Clinic oferuje diagnostykę, profilaktykę, terapie skórne i paznokciowe, ortonyksję i zabiegi uzupełniające. Zadbaj o zdrowie swoich stóp już dziś!"  />}
            <div className={`${styles.offerWrapper} container`}>
                {location.pathname === '/' ? '' : <Breadcrumbs />}
                <div className={styles.offer}>
                    {location.pathname === '/' ? '' : <BackButton />}
                    {location.pathname === '/' ? <h2 className={styles.offerTitle}>Zabiegi Podologiczne</h2> : <h1 className={styles.offerTitle}>Zabiegi Podologiczne</h1>}
                    <p className={styles.offerText}>
                        Dbaj o swoje stopy! Zabiegi podologiczne to sposób na zdrowe i zadbane stopy. Usuń odciski. modzele i grzybicę. Zarezerwuj wizytę już dziś!
                    </p>
                    <div className={styles.singleOfferWrapper}>
                        <SingleOffer name={offerConfig[0].mainTitle} link={`${link}diagnostyka-podologiczna`} image={offer1}/>
                        <SingleOffer name={offerConfig[1].mainTitle} link={`${link}profilaktyka-podologiczna`} image={offer2}/>
                        <SingleOffer name={offerConfig[2].mainTitle} link={`${link}terapie-problemow-skornych`} image={offer3}/>
                        <SingleOffer name={offerConfig[3].mainTitle} link={`${link}terapie-problemow-aparatu-paznokciowego`} image={offer4}/>
                        <SingleOffer name={offerConfig[4].mainTitle} link={`${link}ortonyksja`} image={offer5}/>
                        <SingleOffer name={offerConfig[5].mainTitle} link={`${link}zabiegi-uzupelniajace`} image={offer6}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offer;