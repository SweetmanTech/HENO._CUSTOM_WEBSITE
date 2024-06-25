import { useMemo } from "react"
import feedsData from "@/providers/feeds.json"
import { usePrivy } from "@privy-io/react-auth"
import useConnectedWallet from "@/hooks/useConnectedWallet"
import usePrivyWalletClient from "@/hooks/usePrivyWalletClient"
import { Address } from "viem"
import handleTxError from "@/lib/handleTxError"

const useCameraFeedData = () => {
  const { login, authenticated, ready } = usePrivy()
  const { connectedWallet } = useConnectedWallet()
  const { walletClient } = usePrivyWalletClient()

  const wrapTreeViewItems = (items) =>
    items.map((item) => ({ ...item, items: item.items && wrapTreeViewItems(item.items) }))

  const feeds = useMemo(
    () => wrapTreeViewItems(feedsData),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [feedsData],
  )

  const verifyMints = async () => {
    try {
      const isAuthenticated = ready && authenticated && connectedWallet
      if (!isAuthenticated) login()
      if (!walletClient) return

      const verifyMintsSignature = await walletClient.signMessage({
        account: connectedWallet as Address,
        message: "Verify Mints",
      })

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
