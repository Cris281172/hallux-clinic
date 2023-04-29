import styles from './Offer.module.scss'
import SingleOffer from "./SingleOffer";
const Offer = () => {
    return(
        <div className={styles.offerWrapper}>
            <div className={styles.offer}>
                <h2 className={styles.offerTitle}>Przejrzyj naszą ofertę</h2>
                <p className={styles.offerText}>
                    Centrum Podologii i Diagnostyki Stóp PodoLog zaprasza do korzystania z bogatej oferty zabiegów podologicznych. Dodatkowo przeprowadzamy specjalistyczne pomiary stóp i wykonujemy indywidualne wkładki ortopedyczne.
                </p>
                <div className={styles.singleOfferWrapper}>
                    <SingleOffer name="Konsultacja podologiczna"/>
                    <SingleOffer name="Podstawowy zabieg podologiczny"/>
                    <SingleOffer name="Rozszerzony zabieg podologiczny"/>
                    <SingleOffer name="Brodawki wirusowe"/>
                    <SingleOffer name="Wrastające, wkręcające paznokcie"/>
                    <SingleOffer name="Zrogowacenia modzele"/>
                </div>
            </div>
        </div>
    )
}

export default Offer;