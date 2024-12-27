import styles from './MobilePodologist.module.scss'
import mobilePodologistImage from '../../../images/home/mobile-podologist/mobile-podologist.webp'
import {Link} from "react-router-dom";
const MobilePodologist = () => {
    return(
        <div className={styles.mobilePodologistWrapper}>
            <div className={`${styles.mobilePodologist} container`}>
                <h2 className={styles.mobilePodologistTitle}>Mobilny Podolog Łódź</h2>
                <div className={styles.mobilePodologistContent}>
                    <div className={styles.textWrapper}>
                        <p className={styles.text}>
                            Witaj w Hallux.Clinic - mobilnym gabinecie podologicznym z Łodzi - Twoim rozwiązaniu na zdrowe
                            stopy bez wychodzenia z domu. Jako doświadczony podolog z Łodzi, oferuję profesjonalną opiekę
                            podologiczną gdziekolwiek jesteś. Oferowane usługi są dostosowane do Twoich potrzeb,
                            zapewniając nie tylko leczenie, ale i edukację o zdrowiu stóp. Opinie naszych zadowolonych
                            klientów potwierdzają, że mobilny gabinet podologiczny Hallux.Clinic to rozwiązanie którego
                            szukasz.
                        </p>
                        <p className={styles.text}>
                            Jestem wykwalifikowanym podologiem z Łodzi, którzy przyjedzie do Ciebie z najnowocześniejszym
                            sprzętem, by zapewnić kompleksowe usługi lecznicze stóp – od profilaktyki po zaawansowane
                            zabiegi. Zdrowe stopy to podstawa aktywnego życia, dlatego mój gabinet podologiczny stawia na
                            indywidualne podejście dopasowane do każdego klienta.
                        </p>
                        <p className={styles.text}>
                            Nie czekaj na zdrowie Twoich stóp. Skontaktuj się z nami i umów wizytę w domowym zaciszu.
                            Mobilny gabinet podologiczny z Łodzi to wygoda, profesjonalizm i opinie, które świadczą o naszej
                            skuteczności. Krocz razem z nami ku lepszemu zdrowiu stóp.
                        </p>
                        <Link to="mobilny-podolog" className={styles.seeMore}>Poznaj usługę mobilnego podologa</Link>
                    </div>
                    <div className={styles.imageWrapper}>
                        <img src={mobilePodologistImage} className={styles.image} alt="Mobile podologist" />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default MobilePodologist;