import { useConnectModal } from "@rainbow-me/rainbowkit"
import { useEthersSigner } from "../../hooks/useEthersSigner"
import useZoraMint from "../../hooks/useZoraMint"
import Button from "../Core/Button"

const MintButton = () => {
  const signer = useEthersSigner()
  const { mintWithRewards } = useZoraMint()
  const { openConnectModal } = useConnectModal()

  const handleClick = async () => {
    if (!signer) {
      openConnectModal()
      return
    }
    await mintWithRewards()
  }

  return <Button onClick={handleClick}>Collect</Button>
}

export default MintButton
