import abi from "@/lib/abi/abi-ERC721Drop.json"
import handleTxError from "@/lib/handleTxError"
import get721SaleStatus from "@/lib/get721SaleStatus"
import { BigNumber } from "ethers"
import { useState } from "react"
import usePrivySendTransaction from "./usePrivySendTransaction"
import usePreparePrivyWallet from "./usePreparePrivyWallet"
import useConnectedWallet from "./useConnectedWallet"
import { CHAIN_ID, ZORA_FEE } from "../lib/consts"

const use721Collect = () => {
  const { sendTransaction } = usePrivySendTransaction()
  const { connectedWallet } = useConnectedWallet()
  const { prepare } = usePreparePrivyWallet()
  const [loading, setLoading] = useState(false)

  const collect721 = async (dropAddress, chainId) => {
    try {
      if (!(await prepare(chainId))) return false
      if (!connectedWallet) return false
      setLoading(true)

      const saleStatus = await get721SaleStatus(dropAddress)
      const totalFee = BigNumber.from(saleStatus?.publicSalePrice).add(ZORA_FEE).toHexString()

      const response = await sendTransaction(
        dropAddress,
        CHAIN_ID,
        abi,
        "mintWithRewards",
        [connectedWallet, 1, "!!!", connectedWallet],
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

  return { collect721, loading }
}

export default use721Collect
