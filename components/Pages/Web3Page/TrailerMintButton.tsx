import { useConnectModal } from "@rainbow-me/rainbowkit"
import { useCollection } from "onchain-magic"
import { useEthersSigner } from "../../../hooks/useEthersSigner"
import useCheckNetwork from "../../../hooks/useCheckNetwork"
import { BASE_MINTER, CHAIN_ID, IS_TESTNET } from "../../../lib/consts"
import ZoraDropPlayers from "./ZoraDropPlayers"

const TrailerMintButton = ({ isPopup = false }) => {
  const signer = useEthersSigner()
  const { openConnectModal } = useConnectModal()
  const { checkNetwork } = useCheckNetwork()
  const zoraDropAddress = process.env.NEXT_PUBLIC_DROP_ADDRESS
  const { collectAll } = useCollection({
    collectionAddress: zoraDropAddress,
    chainId: CHAIN_ID,
    minterOverride: IS_TESTNET ? "" : BASE_MINTER,
  })

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
      <ZoraDropPlayers isPopup={isPopup} />
    </button>
  )
}

export default TrailerMintButton
