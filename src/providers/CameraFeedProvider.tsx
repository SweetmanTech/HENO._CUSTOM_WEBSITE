"use client"

import useCameraFeedData from "@/hooks/useCameraFeedData"
import { createContext, useContext, useMemo } from "react"

const CameraFeedContext = createContext(null)

const CameraFeedProvider = ({ children }) => {
  const cameraFeedData = useCameraFeedData()

  const value: any = useMemo(
    () => ({
      ...cameraFeedData,
    }),
    [cameraFeedData],
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
