import styles from './ExampleQuestions.module.scss'
const ExampleQuestions = ({sendQuestion}) => {

    const sendExampleQuestion = (question) => {
        sendQuestion(question)
    }

    const exampleQuestionsConfig = [
        {
            text: 'Czym zajmuję się podolog mobilny?'
        },
        {
            text: 'Jakie są ceny usług podologa mobilnego?'
        },
        {
            text: 'Jak przygotować się do wizyty podologa mobilnego?'
        },
        {
            text: "Czy zabiegi podologiczne bolą?"
        },
        {
            text: 'Jak można umówić się na wizytę?'
        },
        {
            text: "Jakie zabiegi oferuje podolog mobilny?"
        }
    ]

    return(
        <div className={styles.exampleQuestions}>
            {exampleQuestionsConfig.map((exampleQuestion, index) => (
                <button className={styles.exampleQuestionsButton} key={index} onClick={() => sendExampleQuestion(exampleQuestion.text)}>
                    {exampleQuestion.text}
                </button>
            ))}
        </div>
    )
}

export default ExampleQuestions;