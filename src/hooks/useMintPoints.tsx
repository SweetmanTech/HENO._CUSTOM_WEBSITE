import { Address } from "viem"

import useConnectedWallet from "@/hooks/useConnectedWallet"
import { useCallback, useEffect } from "react"
import getStackPoints from "@/lib/stack/getStackPoints"
import getCollectionBalanceOf from "@/lib/getCollectionBalanceOf"
import getStackClient from "@/lib/stack/getStackClient"

const useMintPoints = () => {
  const { connectedWallet } = useConnectedWallet()

  const updateMintPoints = useCallback(async () => {
    if (!connectedWallet) return
    const balance = await getCollectionBalanceOf(connectedWallet as Address)
    const points = balance * 500
    const stackPoints = await getStackPoints(connectedWallet as Address)

    const newPoints = points - stackPoints
    const stackClient = getStackClient()

    if (newPoints)
      await stackClient.track("heno_mints_500", {
        points: newPoints,
        account: connectedWallet as Address,
        uniqueId: `${Date.now()}`,
      })
  }, [connectedWallet])

  useEffect(() => {
    updateMintPoints()
  }, [updateMintPoints])

  return {
    updateMintPoints,
  }
}

export default useMintPoints
