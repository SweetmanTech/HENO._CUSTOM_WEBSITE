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
  console.log("SWEETS zoraDropAddress", zoraDropAddress)
  console.log("SWEETS CHAIN_ID", CHAIN_ID)
  const { drops, collectAll, priceValues } = useCollection({
    collectionAddress: zoraDropAddress,
    chainId: CHAIN_ID,
    minterOverride: "0xFF8B0f870ff56870Dc5aBd6cB3E6E89c8ba2e062" as any,
  })
  console.log("SWEETS drops", drops)

  const handleClick = async () => {
    if (!signer) {
      openConnectModal()
      return false
    }
    if (!checkNetwork()) {
      return false
    }
    console.log("SWEETS priceValues", priceValues)
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
