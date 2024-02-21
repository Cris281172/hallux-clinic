import styles from './Footer.module.scss'
import logo from '../../images/home/header/logo.webp'
import {Link} from 'react-router-dom'
import { FaSquareFacebook } from "react-icons/fa6";
const Footer = () => {
    return(
        <div className={styles.footerWrapper}>
            <footer className={styles.footer}>
                <nav className={styles.navigation}>
                    <h5 className={styles.navigationTitle}>Usługi</h5>
                    <ul className={styles.listOfLink}>
                        <li className={styles.item}>
                            <Link to="/usluga/diagnostyka-podologiczna" className={styles.link}>Diagnostyka podologiczna</Link>
                            <ul className={styles.sublistOfLink}>
                                <li className={styles.sublistOfLinkItem}>
                                    <Link className={styles.sublistOfLinkItemLink} to="/usluga/diagnostyka-podologiczna/konsultacja-podologiczna">Konsultacja Podologiczna</Link>
                                </li>
                                <li className={styles.sublistOfLinkItem}>
                                    <Link className={styles.sublistOfLinkItemLink} to="/usluga/diagnostyka-podologiczna/konsultacja-online">Konsultacja Online</Link>
                                </li>
                            </ul>
                        </li>
                        <li className={styles.item}>
                            <Link to="/usluga/profilaktyka-podologiczna" className={styles.link}>Profilaktyka podologiczna</Link>
                            <ul className={styles.sublistOfLink}>
                                <li className={styles.sublistOfLinkItem}>
                                    <Link className={styles.sublistOfLinkItemLink} to="/usluga/profilaktyka-podologiczna/podstawowy-zabieg-podologiczny">Podstawowy Zabieg Podologiczny</Link>
                                </li>
                                <li className={styles.sublistOfLinkItem}>
                                    <Link className={styles.sublistOfLinkItemLink} to="/usluga/profilaktyka-podologiczna/rozszerzony-zabieg-podologiczny">Rozszerzony Zabieg Podologiczny ( pedicure leczniczy)</Link>
                                </li>
                            </ul>
                        </li>
                        <li className={styles.item}>
                            <Link to="/usluga/terapie-problemow-skornych" className={styles.link}>Terapie problemów skórnych</Link>
                            <ul className={styles.sublistOfLink}>
                                <li className={styles.sublistOfLinkItem}>
                                    <Link className={styles.sublistOfLinkItemLink} to="/usluga/terapie-problemow-skornych/pekajace-piety">Pękające Pięty</Link>
                                </li>
                                <li className={styles.sublistOfLinkItem}>
                                    <Link className={styles.sublistOfLinkItemLink} to="/usluga/terapie-problemow-skornych/usuwanie-brodawek-wirusowych">Usuwanie Brodawek Wirusowych</Link>
                                </li>
                                <li className={styles.sublistOfLinkItem}>
                                    <Link className={styles.sublistOfLinkItemLink} to="/usluga/terapie-problemow-skornych/usuwanie-modzeli">Usuwanie Modzeli</Link>
                                </li>
                                <li className={styles.sublistOfLinkItem}>
                                    <Link className={styles.sublistOfLinkItemLink} to="/usluga/terapie-problemow-skornych/usuwanie-odciskow">Usuwanie Odcisków</Link>
                                </li>
                            </ul>
                        </li>
                        <li className={styles.item}>
                            <Link to="/usluga/terapie-problemow-aparatu-paznokwciowego" className={styles.link}>Terapie problemów aparatu paznokciowego</Link>
                            <ul className={styles.sublistOfLink}>
                                <li className={styles.sublistOfLinkItem}>
                                    <Link className={styles.sublistOfLinkItemLink} to="/usluga/terapie-problemow-aparatu-paznokwciowego/grzybica-stop-i-paznokci">Grzybica Stóp i Paznokci</Link>
                                </li>
                                <li className={styles.sublistOfLinkItem}>
                                    <Link className={styles.sublistOfLinkItemLink} to="/usluga/terapie-problemow-aparatu-paznokwciowego/leczenie-wzrastajacych-i-wkrecajacych-paznokci">Leczenie Wrastających i Wkręcających Paznokci</Link>
                                </li>
                                <li className={styles.sublistOfLinkItem}>
                                    <Link className={styles.sublistOfLinkItemLink} to="/usluga/terapie-problemow-aparatu-paznokwciowego/onycholiza">Onycholiza</Link>
                                </li>
                                <li className={styles.sublistOfLinkItem}>
                                    <Link className={styles.sublistOfLinkItemLink} to="/usluga/terapie-problemow-aparatu-paznokwciowego/usuniecie-krwiaka">Usunięcie Krwiaka</Link>
                                </li>
                            </ul>
                        </li>
                        <li className={styles.item}>
                            <Link to="/usluga/ortonyksja" className={styles.link}>Ortonyksja</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/usluga/zabiegi-uzupelniajace" className={styles.link}>Zabiegi uzupełniające</Link>
                        </li>
                    </ul>
                </nav>
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
                        <li className={styles.item}>
                            <Link to="/rodo/obowiazek-informacyjny" className={styles.link}>Rodo</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/polityka-prywatnosci" className={styles.link}>Polityka prywatności</Link>
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
                        <div className={styles.contactSection}>
                            <h6 className={styles.email}>
                                Armii Krajowej 44; 94-046 Łódź
                            </h6>
                            <h6 className={styles.email}>
                                Nip: 7261496883
                            </h6>
                            <h6 className={styles.email}>
                                Regon: 471387913
                            </h6>
                        </div>
                    </div>

                </div>
            </footer>
            <div className={`${styles.haluxInformation} container`}>
                <img src={logo} alt="headerLogo" className={styles.logo}/>
                <div className={styles.socialMedia}>
                    {/*<h5 className={styles.socialMediaTitle}>Odwiedź również: </h5>*/}
                    <a href="https://www.facebook.com/profile.php?id=61551609556581" target="_blank" className={styles.facebookLink}>
                        <FaSquareFacebook className={styles.facebookIcon} />
                    </a>
                </div>
            </div>
            <div className={styles.bottomFooter}>
                <p className={styles.bottomFooterText}>&copy; Wszelkie prawa zastrzeżone | Created By <a href="https://juczynski.pl" className={styles.author}>Krzysztof Junior Juczyński</a></p>
            </div>
        </div>
    )
}

export default Footer;