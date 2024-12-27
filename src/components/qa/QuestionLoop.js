import {useState} from "react";
import styles from './QuestionLoop.module.scss'
import { IoFootstepsOutline } from "react-icons/io5";
const QuestionLoop = ({qaItem, qaIndex}) => {

    const [activeIndex, setActiveIndex] = useState(null)

    const handleButtonClick = () => {
        setActiveIndex(activeIndex === qaIndex ? null : qaIndex);
    };

    return(
        <div className={`${styles.questionLoop} ${qaIndex === activeIndex ? styles.active : ''}`}>
            <button className={styles.questionButton} onClick={handleButtonClick}>
                {qaItem.question}
                <IoFootstepsOutline className={styles.questionButtonFoot} />
            </button>
            <p className={styles.answerText}>
                {qaItem.answer}
            </p>
        </div>
    )
}

export default QuestionLoop;