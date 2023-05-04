import styles from './Offer.module.scss'
import SingleOffer from "./SingleOffer";
const Offer = () => {
    return(
        <div className={styles.offerWrapper}>
            <div className={styles.offer}>
                <h2 className={styles.offerTitle}>Zabiegi Podologiczne</h2>
                <p className={styles.offerText}>
                    Dbaj o swoje stopy! Zabiegi podologiczne to sposób na zdrowe i zadbane stopy. Usuń odciski. modzele i grzybicę. Zarezerwuj wizytę u specjalistów już dziś!
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