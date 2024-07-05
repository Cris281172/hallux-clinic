import styles from './Contact.module.scss'
import {useEffect} from "react";
import HelmetContent from "../../helpers/HelmetContent";
import ContactInformation from "./ContactInformation";
import ContactForm from "./ContactForm";
import generateStructuredData from "../../docusaurus.config";
import Breadcrumbs from "../../helpers/breadcrumbs/Breadcrumbs";
import BackButton from "../../helpers/back-button/BackButton";
const Contact = () => {

    const structuredData = generateStructuredData('Contact', {
        title: "Kontakt - Podolog Łódź Hallux Clinic",
        desc: "Masz problemy ze stopami? Umów się na wizyte już dzisiaj. Każdego pacjenta traktuje indyiwdualnie, dlatego w moim gabinecie mobilnym poczujesz się nadzwyczajnie nie wychodząc z domu."
    });

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <>
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
            <HelmetContent title="Kontakt - Podolog Łódź Hallux Clinic" desc="Masz problemy ze stopami? Umów się na wizyte już dzisiaj. Każdego pacjenta traktuje indyiwdualnie, dlatego w moim gabinecie mobilnym poczujesz się nadzwyczajnie nie wychodząc z domu."/>
            <div className={`${styles.contact} container`}>
                <Breadcrumbs />
                <div className="container" style={{position: 'relative'}}>
                    <BackButton />
                    <div className={styles.contactTitleWrapper}>
                        <h1 className={styles.contactTitle}>Kontakt</h1>
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
