"use client"

import { ChatUIProvider, ChatView, MODAL_POSITION_TYPE } from "@pushprotocol/uiweb"

const ChatRoom = () => (
  <ChatUIProvider>
    <ChatView
      chatId="b8e068e02fe12d7136bc2f24408835573f30c6fbf0b65ea26ab4c7055a2c85f1"
      limit={10}
      isConnected
      verificationFailModalPosition={MODAL_POSITION_TYPE.RELATIVE}
    />
  </ChatUIProvider>
)

export default ChatRoom
