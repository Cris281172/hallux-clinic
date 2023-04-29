import styles from './AboutMe.module.scss'
import selfPhoto from '../../../images/home/about-me/self-photo.svg'
import {Link} from 'react-router-dom'
import Circle from "../../../layouts/circle/Circle";

const AboutMe = () => {
    return(
        <div className={styles.aboutMeWrapper}>
            <div className={styles.aboutMe}>
                <h2 className={styles.aboutMeTitle}>O mnie</h2>
                <div className={styles.aboutMeInformation}>
                    <img className={styles.selfPhoto} src={selfPhoto} alt="selfPhoto" />
                    <div className={styles.textSection}>
                        <p className={styles.text}>Podologiczny natomiast jest bardziej medyczny i skupia się na leczeniu różnych problemów zdropaznokci.usuwanie zrogowaciałego naskórka, przycinanie i pilowanie paznokci oraz aplikowanie lakieru do oraz paznokci. Podczas pedicure kosmetycznego wykonywane są takie zabiegi jak kąpiele stóp, Pedicure kosmetyczny to zabieg pielęgnacyjny stóp, który skupia się na estetyce i wyglądz</p>
                        <Link to="" className={styles.seeMore}>Zobacz więcej</Link>
                    </div>
                </div>
            </div>
            <Circle size="big" left="-100px" top="50px" />
            <Circle size="big" right="-100px" bottom="50px" />
        </div>
    )
}

export default AboutMe;