import { useConnectModal } from "@rainbow-me/rainbowkit"
import { useCollection } from "onchain-magic"
import { useEthersSigner } from "../../../hooks/useEthersSigner"
import Media from "../../Core/Media"
import useCheckNetwork from "../../../hooks/useCheckNetwork"
import { CHAIN_ID } from "../../../lib/consts"

const TrailerMintButton = ({ isPopup = false }) => {
  const signer = useEthersSigner()
  const { openConnectModal } = useConnectModal()
  const { checkNetwork } = useCheckNetwork()
  const zoraDropAddress = process.env.NEXT_PUBLIC_DROP_ADDRESS
  const { collectAll } = useCollection(zoraDropAddress, CHAIN_ID)

  const handleClick = async () => {
    if (!signer) {
      openConnectModal()
      return false
    }
    if (!checkNetwork()) {
      return false
    }
    const response = await collectAll()
    return response
  }

  return (
    <button type="button" onTouchStart={handleClick} onClick={handleClick}>
      <Media
        type="image"
        containerClasses={`${isPopup ? "w-[150px]" : "w-[250px]"} aspect-[880/1586]`}
        link="/images/Web3/heno.png"
        blurLink="/images/Web3/heno.png"
      />
    </button>
  )
}

export default TrailerMintButton
