import styles from './Footer.module.scss'
import logo from '../../images/home/header/logo.svg'
import {Link} from 'react-router-dom'
const Footer = () => {
    return(
        <div className={styles.footerWrapper}>
            <footer className={styles.footer}>
                <div className={styles.haluxInformation}>
                    <img src={logo} alt="headerLogo" className={styles.logo}/>
                    <h5 className={styles.haluxSubtitle}>Pogotowie podologiczne Halux</h5>
                    <p className={styles.haluxText}>jest efektem wielkiej pasji i fascynacji nowoczesnymi metodami leczenia i pielęgnacji stóp.</p>
                </div>
                <nav className={styles.navigation}>
                    <h5 className={styles.navigationTitle}>Nawigacja</h5>
                    <ul className={styles.listOfLink}>
                        <li className={styles.item}>
                            <Link to="" className={styles.link}>Oferta</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="" className={styles.link}>O mnie</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="" className={styles.link}>Cennik</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="" className={styles.link}>Kontakt</Link>
                        </li>
                    </ul>
                </nav>
                <div className={styles.contact}>
                    <h5 className={styles.contactTitle}>Kontakt</h5>
                    <div className={styles.sectionWrapper}>
                        <div className={styles.contactSection}>
                            <h6 className={styles.contactSectionTitle}>Numer telefonu</h6>
                            <a  href="tel:+502535912" className={styles.phoneNumber}>+48 502 535 912</a>
                        </div>
                        <div className={styles.contactSection}>
                            <h6 className={styles.contactSectionTitle}>Email</h6>
                            <a  href="mailto:mjuczynska@interia.pl" className={styles.email}>mjuczynska@interia.pl</a>
                        </div>
                    </div>

                </div>
            </footer>
            <div className={styles.bottomFooter}>
                <p className={styles.bottomFooterText}>&copy; Wszelkie prawa zastrzeżone | Designed By <a href="" className={styles.author}>Krzysztof Senior Juczyński</a> | Created By <a href="https://juczynski.pl" className={styles.author}>Krzysztof Junior Juczyński</a></p>
            </div>
        </div>
    )
}

export default Footer;