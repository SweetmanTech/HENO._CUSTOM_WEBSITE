import { useState } from "react"

export enum SCREEN {
    INPUT_MODE = "INPUT_MODE",
    SUCCESS = "SUCCESS"
}

const useContactData = () => {
    const [userName, setUserName] = useState("")
    const [subject, setSubject] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [message, setMessage] = useState("")
    const [screenStatus, setScreenStatus] = useState(SCREEN.INPUT_MODE)

    return {
        userName,
        setUserName,
        subject,
        setSubject,
        emailAddress,
        setEmailAddress,
        message,
        setMessage,
        screenStatus,
        setScreenStatus
    }
}

export default useContactData