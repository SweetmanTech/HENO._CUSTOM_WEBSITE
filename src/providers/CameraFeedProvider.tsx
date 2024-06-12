"use client"

import { createContext, useCallback, useContext, useMemo } from "react"
import feedsData from "./feeds.json"

const CameraFeedContext = createContext(null)

const CameraFeedProvider = ({ children }) => {
  const wrapTreeViewItems = (items) =>
    items.map((item) => ({ ...item, items: item.items && wrapTreeViewItems(item.items) }))

  const feeds = useMemo(
    () => wrapTreeViewItems(feedsData),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [feedsData],
  )

  const onExpandChange = useCallback((event: any) => {
    // eslint-disable-next-line no-param-reassign
    event.item.expanded = !event.item.expanded
  }, [])

  const value = useMemo(
    () => ({
      feeds,
      onExpandChange,
    }),
    [feeds, onExpandChange],
  )

  return <CameraFeedContext.Provider value={value}>{children}</CameraFeedContext.Provider>
}

export const useCameraFeed = () => {
  const context = useContext(CameraFeedContext)
  if (!context) {
    throw new Error("useCameraFeed must be used within a CameraFeedProvider")
  }
  return context
}

export default CameraFeedProvider
