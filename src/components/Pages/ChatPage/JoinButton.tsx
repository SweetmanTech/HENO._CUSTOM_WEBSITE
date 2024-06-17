import usePrivyEthersSigner from "@/hooks/usePrivyEthersSigner"
import { usePrivy } from "@privy-io/react-auth"

const JoinButton = () => {
  const { login } = usePrivy()
  const { signer } = usePrivyEthersSigner()

  if (signer)
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
