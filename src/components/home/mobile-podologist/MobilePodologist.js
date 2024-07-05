import styles from './MobilePodologist.module.scss'
import mobilePodologistImage from '../../../images/home/mobile-podologist/mobile-podologist.webp'
import {Link} from "react-router-dom";
const MobilePodologist = () => {
    return(
        <div className={styles.mobilePodologistWrapper}>
            <div className={`${styles.mobilePodologist} container`}>
                <h2 className={styles.mobilePodologistTitle}>Mobilny Podolog</h2>
                <div className={styles.mobilePodologistContent}>
                    <div className={styles.textWrapper}>
                        <p className={styles.text}>
                            Mobilny Gabinet Podologiczny to pielęgnacja stóp z dojazdem do pacjenta. Jest to krok w stronę Seniorów mających problem z chodzeniem lub idealne rozwiązanie dla osób niechodzących, ale również dla osób nie mających czasu. Wstydliwe sprawy Twoich stóp możesz rozwikłać z moją pomocą w zaciszu Twojego własnego domu. Przyjadę prosto do Twojego domu oferując Tobie wygodę i oszczędność czasu.
                        </p>
                        <Link to="mobilny-podolog" className={styles.seeMore}>Zobacz więcej</Link>
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