import callToAPI from "../../../api";
import styles from './Chat.module.scss'
import ChatHistory from "./parts/ChatHistory";
import {useEffect, useRef, useState} from "react";
import TopPanel from "./parts/TopPanel";
import BottomPanel from "./parts/BottomPanel";
const Chat = ({setChatVisible}) => {

    const [questionInputValue, setQuestionInputValue] = useState('')
    const [chatHistory, setChatHistory] = useState(localStorage.getItem('chat-history') ? JSON.parse(localStorage.getItem('chat-history')) : [])
    const [loading, setLoading] = useState(false)
    const chatRef = useRef()
    const questionValueInputRef = useRef()
    const handleChange = (e) => {
        setQuestionInputValue(e.target.value)
    }

    const scrollToBottomChat = () => {
        chatRef.current.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottomChat()
    }, [chatHistory]);
    const sendQuestion = (value) => {
        setLoading(true)
        const questionValue = questionInputValue ? questionInputValue : value
        questionValueInputRef.current.value = ''
        console.log(typeof questionValue)
        if(typeof questionValue === 'object'){
            return
        }
        if(questionValue.trim().length === 0){
            return
        }
        if(localStorage.getItem('chat-history')){
            let newArrayOfQuestions = []
            newArrayOfQuestions = JSON.parse(localStorage.getItem('chat-history'));
            newArrayOfQuestions.push({type: 'user', text: questionValue})
            localStorage.setItem('chat-history', JSON.stringify(newArrayOfQuestions))
            setChatHistory(newArrayOfQuestions)
        }
        else{
            localStorage.setItem('chat-history', JSON.stringify([{type: 'user', text: questionValue}]))
            setChatHistory([{type: 'user', text: questionValue}])
        }
        callToAPI('/assistant/ask', 'post', {
            'question': questionValue
        })
            .then(res => {
                let newArrayOfQuestions = []
                newArrayOfQuestions = JSON.parse(localStorage.getItem('chat-history'));
                newArrayOfQuestions.push({type: 'assistant', text: res.answer})
                localStorage.setItem('chat-history', JSON.stringify(newArrayOfQuestions))
                setChatHistory(newArrayOfQuestions)
            })
            .finally(() => {
                setLoading(false)
                setQuestionInputValue('')
            })
    }


    return(
        <div className={styles.chat}>
            <TopPanel setChatVisible={setChatVisible} />
            <ChatHistory chatHistory={chatHistory} chatRef={chatRef} sendQuestion={sendQuestion} loading={loading}/>
            <BottomPanel handleChange={handleChange} sendQuestion={sendQuestion} loading={loading} questionValueInputRef={questionValueInputRef} />
        </div>
    )
}

export default Chat;