import { BASE_MINTER, CHAIN_ID, IS_TESTNET, SEPOLIA_MINTER, ZORA_DROP_ADDRESS } from "@/lib/consts"
import handleTxError from "@/lib/handleTxError"
import usePreparePrivyWallet from "./usePreparePrivyWallet"
import useConnectedWallet from "./useConnectedWallet"
import usePrivySendTransaction from "./usePrivySendTransaction"
import { useUserProvider } from "@/providers/UserProvider"
import useWalletTransaction from "./useWalletTransaction"
import { useState } from "react"
import abi from "@/lib/abi/zora-UniversalMinter.json"
import { BigNumber } from "ethers"
import getCalldatas from "@/lib/zora/getCalldatas"
import getUniversalMinter from "@/lib/zora/getUniversalMinter"
import useCollection from "./useCollection"

const useZoraCollectAll = () => {
  const { prepare } = usePreparePrivyWallet()
  const { connectedWallet } = useConnectedWallet()
  const { drops, priceValues } = useCollection({
    collectionAddress: ZORA_DROP_ADDRESS,
    chainId: CHAIN_ID,
    minterOverride: IS_TESTNET ? SEPOLIA_MINTER : BASE_MINTER,
  })
  const { sendTransaction: sendTxByPrivy } = usePrivySendTransaction()
  const { sendTransaction: sendTxByWallet } = useWalletTransaction()
  const { isLoggedByEmail } = useUserProvider()
  const [loading, setLoading] = useState(false)

  const collect = async () => {
    try {
      if (!(await prepare())) return false
      if (!connectedWallet) return false
      if (!drops.length || !priceValues.length) return

      setLoading(true)
      const targets = Array(drops.length).fill(ZORA_DROP_ADDRESS)
      const calldatas = getCalldatas(
        drops.length,
        IS_TESTNET ? SEPOLIA_MINTER : BASE_MINTER,
        connectedWallet,
        connectedWallet,
      )
      const universalMinter = getUniversalMinter(CHAIN_ID)
      const totalValue = priceValues.reduce(
        (total: any, value: any) => total.add(BigNumber.from(value || "0")),
        BigNumber.from(0),
      )

      if (isLoggedByEmail) {
        const response = await sendTxByPrivy(
          universalMinter,
          CHAIN_ID,
          abi,
          "mintBatchWithoutFees",
          [targets, calldatas, priceValues],
          totalValue.toHexString(),
          "HENO.WEB3",
          "COLLECT ALL",
        )
        setLoading(false)
        return response
      }

      const response = await sendTxByWallet(
        universalMinter,
        CHAIN_ID,
        abi,
        "mintBatchWithoutFees",
        [targets, calldatas, priceValues],
        totalValue.toHexString(),
      )

      setLoading(false)
      return response
    } catch (error) {
      handleTxError(error)
      return { error }
    }
  }

  return {
    collect,
    loading,
  }
}

export default useZoraCollectAll
