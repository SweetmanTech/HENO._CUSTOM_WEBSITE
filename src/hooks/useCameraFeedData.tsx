import { useMemo } from "react"
import feedsData from "@/providers/feeds.json"
import useVerifyMints from "./useVerifyMints"

const useCameraFeedData = () => {
  const { verifyMints, verifyingMint } = useVerifyMints()

  const wrapTreeViewItems = (items) =>
    items.map((item) => ({ ...item, items: item.items && wrapTreeViewItems(item.items) }))

  const feeds = useMemo(
    () => wrapTreeViewItems(feedsData),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [feedsData],
  )

  const onItemClick = (event: any) => {
    const { id } = event.item
    if (id === "verify-mints" && !verifyingMint) verifyMints()
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
