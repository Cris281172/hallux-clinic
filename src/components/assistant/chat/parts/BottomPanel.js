import styles from './BottomPanel.module.scss'
const BottomPanel = ({handleChange, sendQuestion, loading, questionValueInputRef}) => {
    return(
        <div className={styles.bottomPanel}>
            <input ref={questionValueInputRef} placeholder="Napisz swoje zapytanie..." className={styles.bottomPanelInput} onChange={handleChange} />
            <button disabled={loading} onClick={sendQuestion} className={styles.bottomPanelSend}>Wyślij</button>
        </div>
    )
}

export default BottomPanel;