import { ARBITRUM_DROP_ADDRESS, ARBITRUM_MINTER, IS_TESTNET } from "@/lib/consts"
import handleTxError from "@/lib/handleTxError"
import usePreparePrivyWallet from "./usePreparePrivyWallet"
import useConnectedWallet from "./useConnectedWallet"
import usePrivySendTransaction from "./usePrivySendTransaction"
import { useUserProvider } from "@/providers/UserProvider"
import useWalletTransaction from "./useWalletTransaction"
import { useState } from "react"
import abi from "@/lib/abi/zora-drop.json"
import { BigNumber } from "ethers"
import { ZORA_FEE } from "onchain-magic"
import { useWeb3Drops } from "@/providers/Web3Provider"
import { arbitrum, arbitrumSepolia } from "viem/chains"
import { defaultAbiCoder } from "ethers/lib/utils"

const usePrivyCollect = () => {
  const { prepare } = usePreparePrivyWallet()
  const { connectedWallet } = useConnectedWallet()
  const { drops, priceValues } = useWeb3Drops()
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
      const totalFee = BigNumber.from(ZORA_FEE).toHexString()

      const minterArguments = defaultAbiCoder.encode(
        ["address", "string"],
        [connectedWallet, "!!!"],
      )

      if (isLoggedByEmail) {
        const response =  await sendTxByPrivy(
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
        totalFee
      )

      setLoading(false)
      return response
    } catch (error) {
      handleTxError(error)
    }
  }

  return {
    collect,
    loading,
  }
}

export default usePrivyCollect
