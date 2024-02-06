import { useCollection, useUniversalMinter } from "onchain-magic"
import { BASE_MINTER, CHAIN_ID, IS_TESTNET, SEPOLIA_MINTER } from "@/lib/consts"
import usePreparePrivyWallet from "./usePreparePrivyWallet"

const usePrivyCollect = () => {
  const zoraDropAddress = process.env.NEXT_PUBLIC_DROP_ADDRESS
  const { prepare } = usePreparePrivyWallet()
  const { universalMinter, mintBatchWithoutFees } = useUniversalMinter(CHAIN_ID)
  const { drops, priceValues } = useCollection({
    collectionAddress: zoraDropAddress,
    chainId: CHAIN_ID,
    minterOverride: IS_TESTNET ? SEPOLIA_MINTER : BASE_MINTER,
  })

  const onClick = async () => {
    if (!drops.lenth && !priceValues.length) return
    if (!prepare()) return
  }

  return {
    onClick,
  }
}

export default usePrivyCollect
