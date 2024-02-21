import styles from './Header.module.scss'
import headerLogo from '../../../images/home/header/header-logo.webp'
import logo from '../../../images/home/header/logo.webp'
import Circle from "../../../layouts/circle/Circle";
import { BsTelephoneFill } from "react-icons/bs";
const Header = () => {
    return(
        <div className={styles.headerWrapper}>
            <header className={styles.header}>
                <div className={styles.logoWrapper}>
                    <h1><img className={styles.logo} src={headerLogo} alt="Header logo" /></h1>
                    <Circle size="medium" left="-100px" bottom="0"/>
                </div>
                <div className={styles.headerSection}>
                    <img className={styles.logo} src={logo} alt="Logo" />
                    <div className={styles.headerText}>
                        <h2 className={`${styles.headerTextTitle}`}>
                            <span className={styles.firstLetter}>M</span>obilny
                        </h2>
                        <h2 className={`${styles.headerTextTitle} ${styles.secondTitle}`}>
                            <span className={styles.firstLetter}>G</span>abinet
                        </h2>
                        <h2 className={`${styles.headerTextTitle} ${styles.thirdTitle}`}>
                            <span className={styles.firstLetter}>P</span>odologiczny
                        </h2>
                    </div>
                    <a href="tel:+48459410096" className={styles.callButton}><BsTelephoneFill className={styles.phoneIcon} /> Zadzwoń</a>
                    <p className={`${styles.bottomText} ${styles.mainText}`}><span className={styles.arrow}>&gt;&gt;&gt;&gt;</span> Pielęgnacja Stóp z Dojazdem <span className={styles.arrow}>&lt;&lt;&lt;&lt;</span></p>
                    <p className={`${styles.bottomText} ${styles.mobileText}`}><span className={styles.arrow}>&gt;&gt;&gt;&gt;</span> Dojazd Gratis <span className={styles.arrow}>&lt;&lt;&lt;&lt;</span></p>
                </div>
            </header>
            <Circle size="veryBig" right="-75px" bottom="-150x"/>
        </div>
    )
}

export default Header;