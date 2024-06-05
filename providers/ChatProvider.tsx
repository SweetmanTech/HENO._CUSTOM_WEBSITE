import useChatData from "@/hooks/useChatData"
import { createContext, useContext, useMemo } from "react"

const ChatContext = createContext(null)

const ChatProvider = ({ children }) => {
  const chatData = useChatData()

  const value = useMemo(
    () => ({
      ...chatData,
    }),
    [chatData],
  )

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}

export const useChat = () => {
  const context = useContext(ChatContext)
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider")
  }
  return context
}

export default ChatProvider
