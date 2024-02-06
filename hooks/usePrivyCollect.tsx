import { getCalldatas, useCollection, useUniversalMinter } from "onchain-magic"
import { BASE_MINTER, CHAIN_ID, IS_TESTNET, SEPOLIA_MINTER } from "@/lib/consts"
import usePreparePrivyWallet from "./usePreparePrivyWallet"
import { BigNumber } from "ethers"
import useConnectedWallet from "./useConnectedWallet"
import usePrivySendTransaction from "./usePrivySendTransaction"
import abi from "@/lib/abi/zora-UniversalMinter.json"

const usePrivyCollect = () => {
  const zoraDropAddress = process.env.NEXT_PUBLIC_DROP_ADDRESS
  const { prepare } = usePreparePrivyWallet()
  const { connectedWallet } = useConnectedWallet()
  const { universalMinter, mintBatchWithoutFees } = useUniversalMinter(CHAIN_ID)
  const { drops, priceValues } = useCollection({
    collectionAddress: zoraDropAddress,
    chainId: CHAIN_ID,
    minterOverride: IS_TESTNET ? SEPOLIA_MINTER : BASE_MINTER,
  })

  const { sendTransaction } = usePrivySendTransaction()

  const onClick = async () => {
    try {
      if (!drops.lenth && !priceValues.length) return
      if (!prepare()) return

      const targets = Array(drops.length).fill(zoraDropAddress)
      const calldatas = getCalldatas(
        drops.length,
        IS_TESTNET ? SEPOLIA_MINTER : BASE_MINTER,
        connectedWallet,
        connectedWallet,
      )
      const totalValue = priceValues.reduce(
        (total: any, value: any) => total.add(BigNumber.from(value || "0")),
        BigNumber.from(0),
      )

      await sendTransaction(
        universalMinter,
        CHAIN_ID,
        abi,
        "mintBatchWithoutFees",
        [targets, calldatas, priceValues],
        totalValue,
        "HENO.WEB3",
        "COLLECT ALL",
      )
    } catch (error) {
      console.log(error, "ZIAD")
    }
  }

  return {
    onClick,
  }
}

export default usePrivyCollect
