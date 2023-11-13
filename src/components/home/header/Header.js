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
                    <p className={styles.headerText}>
                        Stop bólowi stóp!
                        Zaufaj naszemu doświadczonemu podologowi
                        i ciesz się komfortem każdego kroku.
                        Profesjonalna opieka w wygodnym miejscu i czasie dla Ciebie.
                        Umów się już dziś!
                    </p>
                    <a href="tel:+48459410096" className={styles.callButton}><BsTelephoneFill className={styles.phoneIcon} /> Zadzwoń</a>
                </div>
            </header>
            <Circle size="veryBig" right="-75px" bottom="-150x"/>
        </div>
    )
}

export default Header;