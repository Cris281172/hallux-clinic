import styles from './qa.module.scss'
import QuestionsDisplay from "../../qa/QuestionsDisplay";
import {Link} from "react-router-dom";
const QA = () => {
    return(
        <div className="container">
            <div className={styles.qa}>
                <div className={styles.qaTitleWrapper}>
                    <h2 className={styles.qaTitle}>
                        Najczęstsze pytania
                    </h2>
                </div>
                <QuestionsDisplay questionsCount={4} />
                <Link to="qa" className={styles.seeAllQuestions}>
                    Zobacz wszystkie pytania
                </Link>
            </div>
        </div>
    )
}

export default QA;