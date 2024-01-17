import { useConnectModal } from "@rainbow-me/rainbowkit"
import { useEthersSigner } from "../../../hooks/useEthersSigner"
import Media from "../../Core/Media"
import useCheckNetwork from "../../../hooks/useCheckNetwork"

const TrailerMintButton = ({ isPopup = false }) => {
  const signer = useEthersSigner()
  const { openConnectModal } = useConnectModal()
  const { checkNetwork } = useCheckNetwork()

  const handleClick = () => {
    console.log("SWEETS CONNECT WALLET / MINT")
    if (!signer) {
      openConnectModal()
      return
    }
    if (!checkNetwork()) {
      return
    }

    console.log("SWEETS MINT")
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
