import { useConnectModal } from "@rainbow-me/rainbowkit"
import { useEthersSigner, useCollection } from "onchain-magic"
import useCheckNetwork from "./useCheckNetwork"
import { BASE_MINTER, CHAIN_ID, IS_TESTNET } from "../lib/consts"

const useCollectAll = () => {
  const signer = useEthersSigner()
  const { openConnectModal } = useConnectModal()
  const { checkNetwork } = useCheckNetwork()
  const zoraDropAddress = process.env.NEXT_PUBLIC_DROP_ADDRESS
  const { collectAll, priceValues } = useCollection({
    collectionAddress: zoraDropAddress,
    chainId: CHAIN_ID,
    minterOverride: IS_TESTNET ? "0x1Cd1C1f3b8B779B50Db23155F2Cb244FCcA06B21" : BASE_MINTER,
  })
  console.log("SWEETS priceValues", priceValues)

  const onClick = async () => {
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

  return {
    onClick,
  }
}

export default useCollectAll
