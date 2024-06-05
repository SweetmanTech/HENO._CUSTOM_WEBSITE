import usePrivyEthersSigner from "@/hooks/usePrivyEthersSigner"
import { usePrivy } from "@privy-io/react-auth"
import { useClient } from "@xmtp/react-sdk"
import { useCallback, useEffect } from "react"

const JoinButton = () => {
  const { login } = usePrivy()
  const { signer } = usePrivyEthersSigner()

  const { initialize, client } = useClient()

  const initXmtp = useCallback(async () => {
    if (!signer) return
    const options = {
      persistConversations: false,
      env: "dev",
      skipContactPublishing: true,
    } as any
    await initialize({ options, signer })
  }, [signer])

  useEffect(() => {
    initXmtp()
  }, [initXmtp])

  if (signer && !client)
    return (
      <button type="button" className="border px-3 py-2">
        Joining...
      </button>
    )

  return (
    <button type="button" onClick={login} className="border px-3 py-2">
      Join Room
    </button>
  )
}

export default JoinButton
