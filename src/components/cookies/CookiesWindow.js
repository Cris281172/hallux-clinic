import styles from './CookiesWindow.module.scss'
import {Link} from "react-router-dom";
import {useState} from "react";
const CookiesWindow = () => {
    const [windowVisible, setWindowVisible] = useState(localStorage.getItem('halluxClinicCookiesAccept') === null)
    const handleClick = () => {
        setWindowVisible(false)
        localStorage.setItem('halluxClinicCookiesAccept', 'true')
    }

    return(
        <>
            {windowVisible &&
                <div className={styles.cookiesWindow}>
                    <h4 className={styles.title}>Polityka prywatności</h4>
                    <p className={styles.text}>
                        Strona wykorzystuje pliki cookies w celu prawidłowego działania strony, korzystania z narzędzi analitycznych i marketingowych oraz zapewniania funkcji społecznościowych. Szczegóły znajdziesz w <Link className={styles.link} to="polityka-prywatnosci">polityce prywatności</Link>.
                    </p>
                    <button className={styles.acceptButton} onClick={handleClick}>
                        Akceptuje
                    </button>
                </div>
            }
        </>

    )
}

export default CookiesWindow;