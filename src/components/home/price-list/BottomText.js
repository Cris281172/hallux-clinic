import styles from './BottomText.module.scss'
import {IoFootstepsOutline} from "react-icons/io5";
const BottomText = () => {
    return(
        <div className={styles.bottomText}>
            <h2 className={styles.bottomTextTitle}>Zabiegi podologiczne w Hallux.Clinic obejmują szeroką gamę usług, m.in.:</h2>
            <ul className={styles.bottomTextList}>
                <li className={styles.bottomTextItem}>
                    <IoFootstepsOutline /> Podstawowa konsultacja podologiczna - pierwszy krok do zdrowych stóp,
                </li>
                <li className={styles.bottomTextItem}>
                    <IoFootstepsOutline /> Leczenie problemów skórnych stóp - modzele, nagniotki, pęknięcia,
                </li>
                <li className={styles.bottomTextItem}>
                    <IoFootstepsOutline /> Zabiegi na wrastające paznokcie - bezbolesne metody leczenia,
                </li>
                <li className={styles.bottomTextItem}>
                    <IoFootstepsOutline /> Terapia grzybicy paznokci - skuteczne eliminowanie infekcji,
                </li>
                <li className={styles.bottomTextItem}>
                    <IoFootstepsOutline /> Profesjonalna pielęgnacja stóp - dla piękna i zdrowia Twoich stóp.
                </li>
            </ul>
            <p className={styles.bottomTextParagraph}>
                Nasze usługi są skierowane do wszystkich, którzy cenią sobie komfort i wygodę, a także
                dla tych, którzy z różnych przyczyn nie mogą opuścić domu. Cennik został
                skonstruowany tak, aby zapewnić dostępność naszych usług dla szerokiego grona
                odbiorców, jednocześnie zachowując najwyższą jakość świadczonych przez nas
                zabiegów.
            </p>
            <p className={styles.bottomTextParagraph}>
                Zapraszamy do kontaktu z nami, aby dowiedzieć się więcej o cenniku usług
                podologicznych i umówić wizytę. Pamiętaj, zdrowe stopy to podstawa dobrego
                samopoczucia i mobilności - nie czekaj, zadbaj o nie już dziś z podolog Hallux.Clinic.
            </p>
        </div>
    )
}

export default BottomText;