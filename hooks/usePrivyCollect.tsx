import { useCollection } from "onchain-magic"
import { BASE_MINTER, CHAIN_ID, IS_TESTNET } from "../lib/consts"
import usePrivyMulticall from "./usePrivyMulticall"
import useConnectedWallet from "./useConnectedWallet"
import getMintData from "../lib/zora/getMintData"
import { useMemo } from "react"
import getMulticallFromDrops from "../lib/getMulticallFromDrops"
import usePreparePrivyWallet from "./usePreparePrivyWallet"
import { toast } from "react-toastify"
import handleTxError from "../lib/handleTxError"
import { BigNumber } from "ethers"
import _ from "lodash"

const usePrivyCollect = () => {
  const zoraDropAddress = process.env.NEXT_PUBLIC_DROP_ADDRESS
  const { aggregate3Value } = usePrivyMulticall()
  const { prepare } = usePreparePrivyWallet()
  const { connectedWallet } = useConnectedWallet()
  const mintData = useMemo(() => getMintData(connectedWallet), [connectedWallet])

  const { drops, priceValues } = useCollection({
    collectionAddress: zoraDropAddress,
    chainId: CHAIN_ID,
    minterOverride: IS_TESTNET ? "" : BASE_MINTER,
  })

  const totalPrice = useMemo(() => {
    return priceValues.reduce((acc, price) => acc.add(BigNumber.from(price)), BigNumber.from(0))
  }, [priceValues])

  const onClick = async () => {
    if (!drops.length && !priceValues.length) return
    const calls = getMulticallFromDrops(drops, priceValues, mintData)
    if (!prepare()) return
    try {
      const response = await aggregate3Value(calls, totalPrice.toString())
      const { error } = response as any
      if (error) {
        return
      }
      toast.success("collected!")
    } catch (err) {
      handleTxError(err)
    }
  }

  return {
    onClick,
  }
}

export default usePrivyCollect
