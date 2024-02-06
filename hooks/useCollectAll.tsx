import { useConnectModal } from "@rainbow-me/rainbowkit"
import { useEthersSigner, useCollection } from "onchain-magic"
import useCheckNetwork from "@/hooks/useCheckNetwork"
import { BASE_MINTER, CHAIN_ID, IS_TESTNET } from "@/lib/consts"
import { toast } from "react-toastify"

const useCollectAll = () => {
  const signer = useEthersSigner()
  const { openConnectModal } = useConnectModal()
  const { checkNetwork } = useCheckNetwork()
  const zoraDropAddress = process.env.NEXT_PUBLIC_DROP_ADDRESS
  const { collectAll, priceValues } = useCollection({
    collectionAddress: zoraDropAddress,
    chainId: CHAIN_ID,
    minterOverride: IS_TESTNET ? SEPOLIA_MINTER : BASE_MINTER,
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
    toast.success("collected!")
    return response
  }

  return {
    onClick,
  }
}

export default useCollectAll
