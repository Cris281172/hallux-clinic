import styles from './Result.module.scss'
import {Link, useParams} from "react-router-dom";
import { MdOutlineCheck, MdOutlineCancel } from "react-icons/md";
const Result = ({}) => {
    const params = useParams()
    return(
        <div className={styles.result}>
            <div className="container">
                <div className={styles.iconWrapper}>
                    {params.status === 'sukces' ?
                        <MdOutlineCheck className={styles.icon} />
                        :
                        <MdOutlineCancel className={styles.icon} />
                    }
                </div>
                <div className={styles.titleWrapper}>
                    <h4 className={styles.title}>{params.status === 'sukces' ? 'Formualrz został wysłany!' : 'Formualrz nie został wysłany!'}</h4>
                </div>
                <div className={styles.buttonWrapper}>
                    <Link to="/" className={styles.link}>Wróć na stronę główna</Link>
                    <Link to="/kontakt" className={styles.link}>Wyślij ponownie</Link>
                </div>
            </div>
        </div>

    )
}

export default Result;