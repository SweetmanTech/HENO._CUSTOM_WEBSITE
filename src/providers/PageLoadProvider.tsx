"use client"

import useLiveTime from "@/hooks/useLiveTime"
import handleTxError from "@/lib/handleTxError"
import { usePathname } from "next/navigation"
import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react"
import getStackClient from "@/lib/stack/getStackClient"
import { Address } from "viem"
import { COLLECTIONS } from "@/lib/consts"
import { getPublicClient } from "@/lib/clients"
import zora1155Abi from "@/lib/abi/zora-drop.json"
import useConnectedWallet from "@/hooks/useConnectedWallet"

const PageLoadContext = createContext(null)

const PageLoadProvider = ({ children }) => {
  const [entered, setEntered] = useState(false)
  const { liveTime } = useLiveTime()
  const [granted, setGranted] = useState(false)
  const [stream, setStream] = useState(null) as any
  const videoRef = useRef(null) as any
  const pathname = usePathname()
  const { connectedWallet } = useConnectedWallet()

  const isEmployeePage = pathname.includes("/employee")

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const grantCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      setStream(mediaStream)
      setGranted(true)
    } catch (error) {
      handleTxError(error)
    }
  }

  useEffect(() => {
    if (stream) {
      videoRef.current.srcObject = stream
      videoRef.current.muted = true
      videoRef.current.play()
    }
  }, [stream])

  useEffect(() => {
    if (isEmployeePage) setEntered(true)
  }, [isEmployeePage])

  useEffect(() => {
    const init = async () => {
      const balancesPromise = COLLECTIONS.map(async (collection) => {
        const publicClient = getPublicClient(collection.chain.id as number)
        const response: any = await publicClient.readContract({
          address: collection.collectionAddress as Address,
          abi: zora1155Abi,
          functionName: "nextTokenId",
        })

        const nextTokenId = parseInt(response.toString(), 10)
        const tokenIds = Array.from({ length: nextTokenId - 1 }, (_, i) => i + 1)
        const multicallCalls = tokenIds.map((tokenId) => ({
          address: collection.collectionAddress as Address,
          abi: zora1155Abi,
          functionName: "balanceOf",
          args: [connectedWallet, tokenId],
        }))

        const results = await publicClient.multicall({
          contracts: multicallCalls as any,
        })

        return results
      })

      const balances = await Promise.all(balancesPromise)
      const formattedBalances = balances
        .flat()
        .map((balance: any) => parseInt(balance.result.toString(), 10))
      const totalPoints = formattedBalances.reduce((acc, num) => acc + num, 0) * 500

      const stackClient = getStackClient()
      const stackPoints = await stackClient.getPoints(connectedWallet as Address, {
        event: "heno_mints_500",
      })
      const newPoints = totalPoints - stackPoints

      console.log("ZIAD newPoints", newPoints, stackPoints)

      try {
        console.log("ZIAD newPoints", newPoints, stackPoints)
        await stackClient.track("heno_mints_500", {
          points: newPoints,
          account: connectedWallet as Address,
          uniqueId: `${Date.now()}`,
        })
      } catch (error) {
        console.log("ZIAD", error, newPoints)
      }
    }

    if (!connectedWallet) return
    init()
  }, [connectedWallet])

  const value: any = useMemo(
    () => ({
      entered,
      setEntered,
      liveTime,
      setGranted,
      granted,
      stream,
      setStream,
      grantCamera,
      videoRef,
    }),
    [entered, setEntered, liveTime, granted, setGranted, stream, setStream, grantCamera, videoRef],
  )

  return <PageLoadContext.Provider value={value}>{children}</PageLoadContext.Provider>
}

export const usePageLoad = () => {
  const context = useContext(PageLoadContext)
  if (!context) {
    throw new Error("usePageLoad must be used within a PageLoadProvider")
  }
  return context
}

export default PageLoadProvider
