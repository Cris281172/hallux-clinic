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
                        <p className={styles.text}>Podologia to nie tylko moja profesja, ale przede wszystkim pasja. Dążąc do perfekcji, nieustannie
                            rozwijam swoje umiejętności, uczestnicząc w licznych szkoleniach i prestiżowych kongresach
                            podologicznych. Jako doświadczony specjalista w gabinecie podologicznym w Łodzi, moim celem
                            jest dostarczanie usług najwyższej jakości dla każdego – zarówno dorosłych, jak i dzieci.
                            Szczególną uwagę poświęcam seniorom, którzy z różnych przyczyn, w tym chorób
                            współistniejących, nie mogą samodzielnie dotrzeć do naszego gabinetu. Ich dobrostan i komfort są
                            dla mnie priorytetem, co motywuje mnie do ciągłego poszerzania mojej wiedzy i umiejętności.
                            Współpraca z cenionymi specjalistami z różnych dziedzin medycyny pozwala mi na utrzymanie
                            najwyższych standardów usług podologicznych, co potwierdzają liczne pozytywne opinie naszych
                            pacjentów. Gabinet podologiczny w Łodzi to miejsce, gdzie pasja łączy się z profesjonalizmem, a
                            zdrowie Twoich stóp jest naszym największym zobowiązaniem.</p>
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