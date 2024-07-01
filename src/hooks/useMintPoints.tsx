import { Address } from "viem"

import useConnectedWallet from "@/hooks/useConnectedWallet"
import { useCallback, useEffect } from "react"
import getMintPoints from "@/lib/stack/getMintPoints"
import getTotalPoints from "@/lib/getTotalPoints"
import getStackClient from "@/lib/stack/getStackClient"
import { toast } from "react-toastify"

const useMintPoints = () => {
  const { connectedWallet } = useConnectedWallet()

  const updateMintPoints = useCallback(async () => {
    if (!connectedWallet) return

    const points = await getTotalPoints(connectedWallet as Address)
    const mintPoints = await getMintPoints(connectedWallet as Address)

    const newPoints = points - mintPoints
    const stackClient = getStackClient()

    if (newPoints) {
      await stackClient.track("heno_mints_500", {
        points: newPoints,
        account: connectedWallet as Address,
        uniqueId: `${Date.now()}`,
      })
      toast.success(`${newPoints} awarded!!!`)
    }
  }, [connectedWallet])

  useEffect(() => {
    updateMintPoints()
  }, [updateMintPoints])

  return {
    updateMintPoints,
  }
}

export default useMintPoints
