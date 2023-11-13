import styles from './AboutMe.module.scss'
import selfPhoto from '../../../images/home/about-me/self-photo.webp'
import {Link} from 'react-router-dom'
import Circle from "../../../layouts/circle/Circle";
import { useInView } from 'react-intersection-observer';
import {useState, useEffect} from 'react';

const AboutMe = () => {
    return(
        <div className={styles.aboutMeWrapper}>
            <div className={`${styles.aboutMe} container`}>
                <h2 className={styles.aboutMeTitle}>O mnie</h2>
                <div className={styles.aboutMeInformation}>
                    <img className={styles.selfPhoto} src={selfPhoto} alt="selfPhoto" />
                    <div className={styles.textSection}>
                        <p className={styles.text}>&nbsp;&nbsp; Współpraca to podstawa, dlatego w moim gabinecie przy współudziale wielu specjalistów jesteśmy w stanie postawić trafną diagnozę, a tym samym włączyć skuteczne leczenie. <br/> W centrum naszego zainteresowania pozostaje pacjent, jego zadowoloenie i zaufanie, dlatego współpracuję z najlepszymi ekspertami, aby optymalnie wykorzystać różnorodność metod i technik. Działając zespołowo zapewniamy szeroki zakres usług i profesionalizm naszym pacjentom.</p>
                        <Link to="/o-mnie" className={styles.seeMore}>Zobacz więcej</Link>
                    </div>
                </div>
            </div>
            <Circle size="big" left="-100px" top="50px" />
            <Circle size="big" right="-100px" bottom="50px" />
        </div>
    )
}

export default AboutMe;