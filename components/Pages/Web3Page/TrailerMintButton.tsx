import { useConnectModal } from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi"
import { use1155Collect } from "onchain-magic"
import { useEthersSigner } from "../../../hooks/useEthersSigner"
import Media from "../../Core/Media"
import useCheckNetwork from "../../../hooks/useCheckNetwork"

const TrailerMintButton = ({ isPopup = false }) => {
  const signer = useEthersSigner()
  const { openConnectModal } = useConnectModal()
  const { checkNetwork } = useCheckNetwork()
  const { address } = useAccount()
  const zoraDropAddress = process.env.NEXT_PUBLIC_DROP_ADDRESS
  const salesConfig = "0xFF8B0f870ff56870Dc5aBd6cB3E6E89c8ba2e062"
  const { mintWithRewards } = use1155Collect(zoraDropAddress, salesConfig)

  const handleClick = async () => {
    if (!signer) {
      openConnectModal()
      return false
    }
    if (!checkNetwork()) {
      return false
    }
    const mintReferralReward = "0x69775D64D3770D93498063F7891467A80145AFa5"
    const response = await mintWithRewards(
      "1",
      address,
      mintReferralReward,
      "I'm Tired of Being Hypersurveilled",
    )
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
