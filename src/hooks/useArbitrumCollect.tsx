import { ARBITRUM_DROP_ADDRESS, ARBITRUM_MINTER, IS_TESTNET, ZORA_FEE } from "@/lib/consts"
import handleTxError from "@/lib/handleTxError"
import { useState } from "react"
import { BigNumber } from "ethers"
import { arbitrum, arbitrumSepolia } from "viem/chains"
import getEncodedMinterArgs from "@/lib/zora/getEncodedMinterArgs"
import { zoraCreator1155ImplABI } from "@zoralabs/protocol-deployments"
import usePrivySendTransaction from "./usePrivySendTransaction"
import useConnectedWallet from "./useConnectedWallet"
import usePreparePrivyWallet from "./usePreparePrivyWallet"

const useArbitrumCollect = () => {
  const { prepare } = usePreparePrivyWallet()
  const { connectedWallet } = useConnectedWallet()
  const { sendTransaction } = usePrivySendTransaction()
  const [loading, setLoading] = useState(false)
  const chainId = IS_TESTNET ? arbitrumSepolia.id : arbitrum.id

  const collect = async () => {
    try {
      if (!(await prepare(chainId))) return false
      if (!connectedWallet) return false

      setLoading(true)
      const totalFee = BigNumber.from(ZORA_FEE).toHexString()
      const minterArguments = getEncodedMinterArgs(connectedWallet, "!!!")

      const response = await sendTransaction(
        ARBITRUM_DROP_ADDRESS,
        chainId,
        zoraCreator1155ImplABI,
        "mintWithRewards",
        [ARBITRUM_MINTER, 1, 1, minterArguments, connectedWallet],
        totalFee,
        "HENO.WEB3",
        "COLLECT",
      )
      const { error } = response as any
      if (error) {
        setLoading(false)
        return false
      }
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
