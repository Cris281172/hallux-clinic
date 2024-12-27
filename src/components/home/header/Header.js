import styles from './Header.module.scss'
import headerLogo1500 from '../../../images/home/header/header-logo-1500.webp'
import headerLogo600 from '../../../images/home/header/header-logo-600.webp'
import headerLogo450 from '../../../images/home/header/header-logo-450.webp'
import logo from '../../../images/home/header/logo.webp'
import Circle from "../../../layouts/circle/Circle";
import { BsTelephoneFill } from "react-icons/bs";
const Header = () => {
    return(
        <div className={styles.headerWrapper}>
            <header className={styles.header}>
                <div className={styles.logoWrapper}>
                    {/**/}

                    <picture>
                        <source className={styles.logo} media="(min-width: 600px)" srcSet={headerLogo1500} />
                        <source className={styles.logo} media="(min-width: 450px)" srcSet={headerLogo600} />
                        <source className={styles.logo} media="(min-width: 1px)" srcSet={headerLogo450} />
                        <img className={styles.logo} src={headerLogo1500} alt="Header logo" />
                        {/*<img className={styles.logo} src={headerLogo} alt="Header logo" fetchPriority="low"/>*/}

                    </picture>

                    <Circle size="medium" left="-100px" bottom="0"/>
                </div>
                <div className={styles.headerSection}>
                    <img className={styles.logo} src={logo} alt="Mobilny Podolog Łódź - Hallux.Clinic" />
                    <h1 className={styles.headerText}>
                        <span className={`${styles.headerTextTitle}`}>
                            <span className={styles.firstLetter}>M</span>obilny
                        </span>
                        <span className={`${styles.headerTextTitle} ${styles.secondTitle}`}>
                            <span className={styles.firstLetter}>G</span>abinet
                        </span>
                        <span className={`${styles.headerTextTitle} ${styles.thirdTitle}`}>
                            <span className={styles.firstLetter}>P</span>odologiczny
                        </span>
                        <span className={`${styles.headerTextTitle} ${styles.fourthTitle}`}>
                            <span className={styles.firstLetter}>Ł</span>ódź
                        </span>
                    </h1>
                    <a href="tel:+48459410096" className={styles.callButton}><BsTelephoneFill className={styles.phoneIcon} /> Zadzwoń</a>
                    <p className={`${styles.bottomText} ${styles.mainText}`}><span className={styles.arrow}>&gt;&gt;&gt;&gt;</span> Pielęgnacja Stóp z Dojazdem * GRATIS *<span className={styles.arrow}>&lt;&lt;&lt;&lt;</span></p>
                    <p className={`${styles.bottomText} ${styles.mobileText}`}><span className={styles.arrow}>&gt;&gt;&gt;&gt;</span> Dojazd Gratis <span className={styles.arrow}>&lt;&lt;&lt;&lt;</span></p>
                </div>
            </header>
            <Circle size="veryBig" right="-75px" bottom="-150x"/>
        </div>
    )
}

export default Header;