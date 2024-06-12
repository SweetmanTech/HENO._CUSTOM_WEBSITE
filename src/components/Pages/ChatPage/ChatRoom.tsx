import { ChatUIProvider, ChatView, MODAL_POSITION_TYPE } from "@pushprotocol/uiweb"

const ChatRoom = () => (
  <section className="w-[90%] md:w-[70%] h-[300px] md:h-[500px]">
    <ChatUIProvider>
      <ChatView
        chatId={process.env.NEXT_PUBLIC_GROUP_CHAT_ID}
        limit={10}
        isConnected
        verificationFailModalPosition={MODAL_POSITION_TYPE.RELATIVE}
      />
    </ChatUIProvider>
  </section>
)

export default ChatRoom
