import {
  HYDROPLANING_DROP_ADDRESS,
  IS_TESTNET,
  ZORA_FEE,
  HYDROPLANING_REWRARDS_RECEIPIENT,
} from "@/lib/consts"
import handleTxError from "@/lib/handleTxError"
import { useState } from "react"
import { BigNumber } from "ethers"
import { base, baseSepolia } from "viem/chains"
import getEncodedMinterArgs from "@/lib/zora/getEncodedMinterArgs"
import {
  zoraCreator1155ImplABI,
  zoraCreatorFixedPriceSaleStrategyAddress,
} from "@zoralabs/protocol-deployments"
import get1155SaleStatus from "@/lib/get1155SaleStatus"
import usePrivySendTransaction from "./usePrivySendTransaction"
import useConnectedWallet from "./useConnectedWallet"
import usePreparePrivyWallet from "./usePreparePrivyWallet"

const useHydroCollect = () => {
  const { prepare } = usePreparePrivyWallet()
  const { connectedWallet } = useConnectedWallet()
  const { sendTransaction } = usePrivySendTransaction()
  const [loading, setLoading] = useState(false)
  const chainId = IS_TESTNET ? baseSepolia.id : base.id

  const collect = async () => {
    try {
      if (!(await prepare(chainId))) return false
      if (!connectedWallet) return false

      setLoading(true)
      const saleDetails = await get1155SaleStatus(HYDROPLANING_DROP_ADDRESS, 1, chainId)
      const totalFee = BigNumber.from(saleDetails?.pricePerToken).add(ZORA_FEE).toHexString()

      const minterArguments = getEncodedMinterArgs(connectedWallet, "!!!")

      const response = await sendTransaction(
        HYDROPLANING_DROP_ADDRESS,
        chainId,
        zoraCreator1155ImplABI,
        "mint",
        [
          zoraCreatorFixedPriceSaleStrategyAddress[chainId],
          1,
          1,
          [HYDROPLANING_REWRARDS_RECEIPIENT],
          minterArguments,
        ],
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

export default useHydroCollect
