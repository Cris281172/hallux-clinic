import styles from './TopPanel.module.scss'
import { TbDotsVertical } from "react-icons/tb";
import {AiOutlineClose} from "react-icons/ai";
const TopPanel = ({setChatVisible}) => {
    return(
        <div className={styles.topPanel}>
            <p className={styles.assistantName}>
                Asystent Hallux Clinic
                <span className={styles.assistantNameBeta}>
                    Beta
                </span>
            </p>
            <button className={styles.moreOptions}>
                <AiOutlineClose className={styles.moreOptionsIcon} onClick={() => setChatVisible(false)}/>
            </button>
        </div>
    )
}

export default TopPanel;