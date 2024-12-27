import { IoChatboxEllipsesOutline } from "react-icons/io5";
import styles from './SpeechBubble.module.scss'
import {useEffect, useState} from "react";
const SpeechBubble = ({setChatVisible}) => {

    const [textVisible, setTextVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setTextVisible(true);
        }, 3500);
        return () => clearTimeout(timer);
    }, []);

    const changeChatVisible = () => {
        setChatVisible(prevState => !prevState)
        if(window.innerWidth < 700){
            document.body.style.overflow = "hidden"
        }
        setTextVisible(false)
    }

    return(
        <div className={styles.speechBubbleWrapper}>
            <button onClick={changeChatVisible} className={styles.speechBubble}>
                <IoChatboxEllipsesOutline className={styles.speechBubbleIcon} />
            </button>
            <p className={`${styles.speechBubbleText} ${textVisible ? styles.show : ''}`}>Masz pytanie? Wyślij wiadomość.</p>
        </div>
    )
}

export default SpeechBubble;