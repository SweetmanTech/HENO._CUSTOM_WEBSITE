import { usePrivy } from "@privy-io/react-auth"
import { useClient } from "@xmtp/react-sdk"
import JoinButton from "./JoinButton"
import MemeberList from "./MemberList"
import ChatHistory from "./ChatHistory"
import SendMessage from "./SendMessage"

export const members = [
  "0x51027631B9DEF86e088C33368eC4E3A4BE0aD264",
  "0x99C35a53E76d72dDA0A6A4710e198c0a720BA2BB",
]

const ChatRoom = () => {
  const { ready, user, authenticated } = usePrivy()
  const isAuthenticated = ready && user && authenticated
  const { client } = useClient()

  if (!isAuthenticated || !client) return <JoinButton />
  return (
    <section className="flex gap-3">
      <div className="space-y-2">
        <MemeberList />
      </div>
      <div className="space-y-2">
        <ChatHistory />
        <SendMessage />
      </div>
    </section>
  )
}

export default ChatRoom
