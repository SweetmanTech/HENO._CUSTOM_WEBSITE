import { useMemo } from "react"
import feedsData from "@/providers/feeds.json"
import { useLogin, usePrivy } from "@privy-io/react-auth"
import useConnectedWallet from "@/hooks/useConnectedWallet"
import handleTxError from "@/lib/handleTxError"
import { Address } from "viem"
import useMintPoints from "./useMintPoints"
import usePrivyWalletClient from "./usePrivyWalletClient"

const useCameraFeedData = () => {
  const { authenticated, ready } = usePrivy()
  const { connectedWallet } = useConnectedWallet()
  const { updateMintPoints } = useMintPoints()
  const isAuthenticated = ready && authenticated && connectedWallet
  const { walletClient } = usePrivyWalletClient()

  const { login } = useLogin({
    onComplete: (user) => {
      const address = user?.wallet?.address
      if (address) updateMintPoints(address as Address)
    },
  })

  const wrapTreeViewItems = (items) =>
    items.map((item) => ({ ...item, items: item.items && wrapTreeViewItems(item.items) }))

  const feeds = useMemo(
    () => wrapTreeViewItems(feedsData),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [feedsData],
  )

  const verifyMints = async () => {
    try {
      if (!isAuthenticated) {
        login()
        return
      }
      if (!walletClient) return
      const verifyMintsSignature = await walletClient.signMessage({
        account: connectedWallet as Address,
        message: "Verify Mints",
      })
      await updateMintPoints(connectedWallet as Address)
      // eslint-disable-next-line consistent-return
      return verifyMintsSignature
    } catch (error) {
      handleTxError({ message: "Verify mints failed." })
      // eslint-disable-next-line consistent-return
      return false
    }
  }

  const onItemClick = (event: any) => {
    const { id } = event.item
    if (id === "verify-mints") verifyMints()
  }

  const onExpandChange = (event: any) => {
    // eslint-disable-next-line no-param-reassign
    event.item.expanded = !event.item.expanded
  }

  return {
    onExpandChange,
    onItemClick,
    feeds,
  }
}

export default useCameraFeedData
