import styles from './Assistant.module.scss'
import callToAPI from "../../api";
import SpeechBubble from "./SpeechBubble";
import Chat from "./chat/Chat";
import {useState, useEffect, useRef} from "react";
const Assistant = () => {
    const [chatVisible, setChatVisible] = useState(false);
    const assistantRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (assistantRef.current && !assistantRef.current.contains(event.target)) {
                setChatVisible(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [assistantRef]);

    useEffect(() => {
        if(window.innerWidth < 700 && chatVisible){
            document.body.style.overflow = "hidden"
        }
        else if(window.innerWidth < 700 && !chatVisible){
            document.body.style.overflow = "auto"
        }
    }, [chatVisible])

    return (
        <div className={styles.assistant} ref={assistantRef}>
            {chatVisible && <Chat setChatVisible={setChatVisible} />}
            <SpeechBubble setChatVisible={setChatVisible} />
        </div>
    );
};


export default Assistant;