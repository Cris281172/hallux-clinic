import styles from "./ContactInformation.module.scss";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
const ContactInformation = () => {
    return(
        <div className={styles.contactInformation}>
            <div className={styles.item}>
                <AiFillPhone className={styles.icon} />
                <h6 className={styles.title}>Numer telefonu: </h6>
                <a href="tel:+48459410096" className={styles.value}>+48 459 410 096</a>
            </div>
            <div className={styles.item}>
                <AiOutlineMail className={styles.icon} />
                <h6 className={styles.title}>Email: </h6>
                <a href="mailto:hallux.clinic@gmail.com" className={styles.value}>hallux.clinic@gmail.com</a>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.itemList}>
                        Armii Krajowej 44; 94-046 Łódź
                    </li>
                    <li className={styles.itemList}>
                        Nip: 7261496883
                    </li>
                    <li className={styles.itemList}>
                        Regon: 471387913
                    </li>
                    <li className={styles.itemList}>
                        Konto bankowe: 03 1240 5556 1111 0011 2320 7916 (Pekao S.A.)
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ContactInformation;