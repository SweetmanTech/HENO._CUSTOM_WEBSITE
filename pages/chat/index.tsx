import ChatPage from "@/components/Pages/ChatPage"
import ChatProvider from "@/providers/ChatProvider"
import { XMTPProvider } from "@xmtp/react-sdk"

const Chat = () => (
  <XMTPProvider>
    <ChatProvider>
      <ChatPage />
    </ChatProvider>
  </XMTPProvider>
)

export default Chat
