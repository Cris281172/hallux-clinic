import styles from './Footer.module.scss'
import logo from '../../images/home/header/logo.webp'
import {Link} from 'react-router-dom'
const Footer = () => {
    return(
        <div className={styles.footerWrapper}>
            <footer className={styles.footer}>
                <div className={styles.haluxInformation}>
                    <img src={logo} alt="headerLogo" className={styles.logo}/>
                    <h5 className={styles.haluxSubtitle}>Pogotowie podologiczne Hallux</h5>
                    <p className={styles.haluxText}>Jest efektem wielkiej pasji i fascynacji nowoczesnymi metodami leczenia i pielęgnacji stóp.</p>
                </div>
                <nav className={styles.navigation}>
                    <h5 className={styles.navigationTitle}>Nawigacja</h5>
                    <ul className={styles.listOfLink}>
                        <li className={styles.item}>
                            <Link to="/usluga" className={styles.link}>Usługa</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/o-mnie" className={styles.link}>O mnie</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/cennik" className={styles.link}>Cennik</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/kontakt" className={styles.link}>Kontakt</Link>
                        </li>
                    </ul>
                </nav>
                <div className={styles.contact}>
                    <h5 className={styles.contactTitle}>Kontakt</h5>
                    <div className={styles.sectionWrapper}>
                        <div className={styles.contactSection}>
                            <h6 className={styles.contactSectionTitle}>Numer telefonu</h6>
                            <a  href="tel:+48459410096" className={styles.phoneNumber}>+48 459 410 096</a>
                        </div>
                        <div className={styles.contactSection}>
                            <h6 className={styles.contactSectionTitle}>Email</h6>
                            <a  href="mailto:hallux.clinic@gmail.com" className={styles.email}>hallux.clinic@gmail.com</a>
                        </div>
                    </div>

                </div>
            </footer>
            <div className={styles.bottomFooter}>
                <p className={styles.bottomFooterText}>&copy; Wszelkie prawa zastrzeżone | Created By <a href="https://juczynski.pl" className={styles.author}>Krzysztof Junior Juczyński</a></p>
            </div>
        </div>
    )
}

export default Footer;