import styles from './QuestionsDisplay.module.scss'
import QAConfig from "../../config/QAConfig";
import React from "react";
import QuestionLoop from "./QuestionLoop";
import BackButton from "../../helpers/back-button/BackButton";
import {useLocation} from "react-router-dom";
import HelmetContent from "../../helpers/HelmetContent";
const QuestionsDisplay = ({questionsCount = 9999}) => {
    const qaConfig = QAConfig.slice(0, questionsCount)
    const location = useLocation()

    const faqStructuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": qaConfig.map((qaItem, index) => ({
            "@type": "Question",
            "name": qaItem.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": qaItem.answer
            }
        }))
    };

    return(
        <div className={styles.questionDisplay}>
            <HelmetContent script={{type: 'application/ld+json', content: JSON.stringify(faqStructuredData)}} />
            <BackButton />
            {location.pathname !== '/' &&
                <h1 className={styles.qaTitle}>
                    Q&A - Najczęstsze pytania
                </h1>
            }
            {qaConfig.map((qaItem, index) => <React.Fragment key={index}><QuestionLoop qaItem={qaItem} qaIndex={index} /></React.Fragment>)}
        </div>
    )
}

export default QuestionsDisplay;