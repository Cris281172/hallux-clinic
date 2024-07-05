import QuestionsDisplay from "./QuestionsDisplay";
import HelmetContent from "../../helpers/HelmetContent";
import Breadcrumbs from "../../helpers/breadcrumbs/Breadcrumbs";
import styles from './QA.module.scss'
import BackButton from "../../helpers/back-button/BackButton";
const QA = () => {
    return(
        <div className={styles.qa}>
            <div className="container">
                <Breadcrumbs />
                <HelmetContent title="QA - Najczęstsze pytania w naszym gabinecie - Podolog Łódź Hallux Clinic" desc="Odkryj odpowiedzi na najczęściej zadawane pytania dotyczące usług podologa mobilnego." />
                <QuestionsDisplay />
            </div>
        </div>
    )
}

export default QA;