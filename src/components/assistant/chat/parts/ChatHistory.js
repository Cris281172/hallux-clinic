import styles from './ChatHistory.module.scss'
import ExampleQuestions from "./ExampleQuestions";
const ChatHistory = ({chatHistory, chatRef, sendQuestion, loading}) => {

    return(
        <div className={styles.chatHistory} ref={chatRef}>
            <ExampleQuestions sendQuestion={sendQuestion} />
            {chatHistory.map(chatElement => (
                <>
                    {chatElement.type === 'assistant' &&
                        <div className={styles.assistantMessage}>
                            <p>
                                {chatElement.text}
                                <br />
                                <span className={styles.chatGPTinfo}>Wiadomość stworzona przez ChatGPT</span>
                            </p>
                        </div>
                    }

                    {chatElement.type === 'user' &&
                        <div className={styles.userMessage}>
                            <p>
                                {chatElement.text}
                            </p>
                        </div>
                    }
                </>
            ))}
            {loading &&
                <div className={styles.assistantMessage}>
                <p>
                    <div className={styles.loader}></div>
                </p>
            </div>}

        </div>
    )
}

export default ChatHistory;