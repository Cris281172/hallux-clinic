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
                        <p className={styles.text}>Podologia to moja życiowa pasja, którą nieustannie pogłębiam, uczestnicząc w licznych
                            szkoleniach i kongresach poświęconych podologii. Jako podolog z Łodzi i okolic, moje
                            doświadczenie obejmuje pracę zarówno z dorosłymi, jak i z dziećmi. Jednak moje serce
                            bije najsilniej dla Seniorów, którzy z powodu różnorodnych chorób współistniejących
                            często nie są w stanie samodzielnie skorzystać z usług podologicznych. Aby zapewnić
                            usługi spełniające najwyższe standardy, angażuję się w współpracę z uznawanymi
                            ekspertami w dziedzinie podologii.</p>
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