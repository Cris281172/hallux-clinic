import styles from './CookiesWindow.module.scss'
import {Link} from "react-router-dom";
const CookiesWindow = () => {
    return(
        <div className={styles.cookiesWindow}>
            <Link to="polityka-prywatnosci">Polityka prywatności</Link>
        </div>
    )
}

export default CookiesWindow;