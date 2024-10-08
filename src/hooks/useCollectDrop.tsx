import { HYDROPLANING_DROP_ADDRESS, ZORA_FEE, HYDROPLANING_REWARDS_RECIPIENT } from "@/lib/consts"
import handleTxError from "@/lib/handleTxError"
import { useState } from "react"
import { BigNumber } from "ethers"
import getEncodedMinterArgs from "@/lib/zora/getEncodedMinterArgs"
import {
  zoraCreator1155ImplABI,
  zoraCreatorFixedPriceSaleStrategyAddress,
} from "@zoralabs/protocol-deployments"
import get1155SaleStatus from "@/lib/get1155SaleStatus"
import { Address } from "viem"
import usePrivySendTransaction from "./usePrivySendTransaction"
import useConnectedWallet from "./useConnectedWallet"
import usePreparePrivyWallet from "./usePreparePrivyWallet"
import getCollectorClient from "@/lib/zora/getCollectorClient"
import getToken from "@/lib/zora/getToken"

const useCollectDrop = () => {
  const { prepare } = usePreparePrivyWallet()
  const { connectedWallet } = useConnectedWallet()
  const { sendTransaction } = usePrivySendTransaction()
  const [loading, setLoading] = useState(false)

  const collect = async (dropAddress: Address, tokenId: number, chainId: number) => {
    try {
      if (!(await prepare(chainId))) return false
      if (!connectedWallet) return false

      setLoading(true)

      const { token } = await getToken(dropAddress, '1155', tokenId, chainId)

      console.log("ZIAD", token)

      const collectorClient = getCollectorClient(chainId)
      const { parameters } = await collectorClient.mint({
        tokenContract: dropAddress,
        mintType: '1155',
        quantityToMint: 1,
        minterAccount: connectedWallet,
        tokenId,
      })
  
      // const response = await sendTransaction(
      //   HYDROPLANING_DROP_ADDRESS,
      //   chainId,
      //   zoraCreator1155ImplABI,
      //   "mint",
      //   [
      //     zoraCreatorFixedPriceSaleStrategyAddress[chainId],
      //     1,
      //     1,
      //     [HYDROPLANING_REWARDS_RECIPIENT],
      //     minterArguments,
      //   ],
      //   totalFee,
      //   "HENO.WEB3",
      //   "COLLECT",
      // )
      // const { error } = response as any
      // if (error) {
      //   setLoading(false)
      //   return false
      // }
      setLoading(false)
      return true
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
