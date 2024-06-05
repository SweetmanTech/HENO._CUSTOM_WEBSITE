import { useConversations } from "@xmtp/react-sdk"
import axios from "axios"
import { useEffect } from "react"

const useChatData = () => {
  const { conversations } = useConversations()

  useEffect(() => {
    const init = async () => {
      
    }

    if (!conversations) return
    init()
  }, [conversations])

  const createGroup = async () => {
    console.log("ZIAD HERE")
    const response = await axios.get("/api/xmtp/group/create");
    console.log("ZIAD", response)
  }

  return {
    conversations,
    createGroup
  }
}

export default useChatData
