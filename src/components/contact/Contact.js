import styles from './Contact.module.scss'
import {useEffect} from "react";
import HelmetContent from "../../helpers/HelmetContent";
import ContactInformation from "./ContactInformation";
import ContactForm from "./ContactForm";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <>
            <HelmetContent title="Kontakt - Hallux Clinic" desc="Masz problemy ze stopami? Umów się na wizyte już dzisiaj. Każdego pacjenta traktuje indyiwdualnie, dlatego w moim gabinecie mobilnym poczujesz się nadzwyczajnie nie wychodząc z domu."/>
            <div className={`${styles.contact} container`}>
                <div className={styles.container}>
                    <div className={styles.contactTitleWrapper}>
                        <h2 className={styles.contactTitle}>Kontakt</h2>
                    </div>
                    <div className={styles.contactComponentsWrapper}>
                        <ContactForm />
                        <ContactInformation />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
