import handleTxError from "@/lib/handleTxError"
import { useState } from "react"
import { Address } from "viem"
import getCollectorClient from "@/lib/zora/getCollectorClient"
import getToken from "@/lib/zora/getToken"
import usePrivySendTransaction from "./usePrivySendTransaction"
import useConnectedWallet from "./useConnectedWallet"
import usePreparePrivyWallet from "./usePreparePrivyWallet"

const useCollectDrop = () => {
  const { prepare } = usePreparePrivyWallet()
  const { connectedWallet } = useConnectedWallet()
  const { sendTransaction } = usePrivySendTransaction()
  const [loading, setLoading] = useState(false)

  const collect = async (dropAddress: Address, tokenId: number, chainId: number) => {
    try {
      if (!(await prepare(chainId))) return false
      setLoading(true)

      const { token }: any = await getToken(dropAddress, "1155", tokenId, chainId)
      const { salesConfig } = token
      const { mintFee } = salesConfig

      const collectorClient = getCollectorClient(chainId)
      const { parameters } = await collectorClient.mint({
        tokenContract: dropAddress,
        mintType: "1155",
        quantityToMint: 1,
        minterAccount: connectedWallet as Address,
        tokenId,
      })

      const { abi, functionName, args, address: minter } = parameters

      const response = await sendTransaction(
        minter,
        chainId,
        abi,
        functionName,
        args,
        mintFee,
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

export default useCollectDrop
