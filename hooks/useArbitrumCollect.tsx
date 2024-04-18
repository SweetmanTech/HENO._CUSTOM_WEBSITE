import { ARBITRUM_DROP_ADDRESS, ARBITRUM_MINTER, IS_TESTNET, ZORA_FEE } from "@/lib/consts"
import handleTxError from "@/lib/handleTxError"
import usePreparePrivyWallet from "./usePreparePrivyWallet"
import useConnectedWallet from "./useConnectedWallet"
import usePrivySendTransaction from "./usePrivySendTransaction"
import { useUserProvider } from "@/providers/UserProvider"
import useWalletTransaction from "./useWalletTransaction"
import { useState } from "react"
import abi from "@/lib/abi/zora-drop.json"
import { BigNumber } from "ethers"
import { arbitrum, arbitrumSepolia } from "viem/chains"
import getEncodedMinterArgs from "@/lib/zora/getEncodedMinterArgs"

const useArbitrumCollect = () => {
  const { prepare } = usePreparePrivyWallet()
  const { connectedWallet } = useConnectedWallet()
  const { sendTransaction: sendTxByPrivy } = usePrivySendTransaction()
  const { sendTransaction: sendTxByWallet } = useWalletTransaction()
  const { isLoggedByEmail } = useUserProvider()
  const [loading, setLoading] = useState(false)

  const collect = async () => {
    try {
      if (!(await prepare(arbitrumSepolia.id))) return false
      if (!connectedWallet) return false

      setLoading(true)
      const totalFee = BigNumber.from(ZORA_FEE).toHexString()
      const minterArguments = getEncodedMinterArgs(connectedWallet, "!!!")

      if (isLoggedByEmail) {
        const response = await sendTxByPrivy(
          ARBITRUM_DROP_ADDRESS,
          IS_TESTNET ? arbitrumSepolia.id : arbitrum.id,
          abi,
          "mintWithRewards",
          [ARBITRUM_MINTER, 1, 1, minterArguments, connectedWallet],
          totalFee,
          "HENO.WEB3",
          "COLLECT",
        )
        setLoading(false)
        return response
      }

      const response = await sendTxByWallet(
        ARBITRUM_DROP_ADDRESS,
        IS_TESTNET ? arbitrumSepolia.id : arbitrum.id,
        abi,
        "mintWithRewards",
        [ARBITRUM_MINTER, 1, 1, minterArguments, connectedWallet],
        totalFee,
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

export default useArbitrumCollect
