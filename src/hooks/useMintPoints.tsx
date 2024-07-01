import { Address } from "viem"

import useConnectedWallet from "@/hooks/useConnectedWallet"
import { useEffect, useState } from "react"
import getStackPoints from "@/lib/stack/getStackPoints"
import getTotalPoints from "@/lib/getTotalPoints"
import getStackClient from "@/lib/stack/getStackClient"

const useMintPoints = () => {
  const { connectedWallet } = useConnectedWallet()
  const [totalPoints, setTotalPoints] = useState(0)

  useEffect(() => {
    const init = async () => {
      const points = await getTotalPoints(connectedWallet as Address)
      const stackPoints = await getStackPoints(connectedWallet as Address)

      setTotalPoints(points)
      const newPoints = points - stackPoints
      const stackClient = getStackClient()

      if (newPoints)
        await stackClient.track("heno_mints_500", {
          points: newPoints,
          account: connectedWallet as Address,
          uniqueId: `${Date.now()}`,
        })
    }

    if (!connectedWallet) return
    init()
  }, [connectedWallet])

  return {
    totalPoints,
    setTotalPoints,
  }
}

export default useMintPoints
