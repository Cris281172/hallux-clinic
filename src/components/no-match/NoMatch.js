import styles from './NoMatch.module.scss'
import {Link} from "react-router-dom";
import logoImage from '../../images/home/header/logo.webp'

const NoMatch = () => {
    return(
        <div className={styles.noMatch}>
            <div className={styles.noMatchContent}>
                <img className={styles.logoImage} src={logoImage} alt="Logo image" />
                <h1 className={styles.noMatchTitle}>404</h1>
                <p className={styles.noMatchText}>
                    Wygląda na to że strona nie odpowiada,
                    strona, której szukasz jest niedostępna!
                </p>
                <Link to="/" className={styles.homeBackButton}>
                    Wróć do strony głównej
                </Link>
            </div>

        </div>
    )
}

export default NoMatch;