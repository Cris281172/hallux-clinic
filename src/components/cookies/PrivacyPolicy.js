import HelmetContent from "../../helpers/HelmetContent";
import styles from "../contact/Contact.module.scss";
import ContactForm from "../contact/ContactForm";
import ContactInformation from "../contact/ContactInformation";
import PrivacyPolicyConfig from "../../config/PrivacyPolicyConfig";

const PrivacyPolicy = () => {
    const privacyPolicyConfig = PrivacyPolicyConfig
    const Item = ({config}) => {
        return(
            <div>
                <h4>{config.title}</h4>
                <ul>
                    {config.items.map(el => {
                        return(
                            <li>
                               - {el.text}
                            </li>
                        )
                    })}

                </ul>
            </div>
        )
    }

    return(
        <>
            <HelmetContent title="Polityka Prywatności - Hallux Clinic" desc="Masz problemy ze stopami? Umów się na wizyte już dzisiaj. Każdego pacjenta traktuje indyiwdualnie, dlatego w moim gabinecie mobilnym poczujesz się nadzwyczajnie nie wychodząc z domu."/>
            <div className={`${styles.contact} container`}>
                <div className={styles.container}>
                    <div className={styles.contactTitleWrapper}>
                        <h2 className={styles.contactTitle}>Polityka prywatności</h2>
                    </div>
                    {privacyPolicyConfig.map(el => <Item config={el} />)}
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy;