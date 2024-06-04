import useLiveTime from "@/hooks/useLiveTime"
import handleTxError from "@/lib/handleTxError"
import { useRouter } from "next/router"
import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react"

const PageLoadContext = createContext(null)

const PageLoadProvider = ({ children }) => {
  const [entered, setEntered] = useState(false)
  const { liveTime } = useLiveTime()
  const [granted, setGranted] = useState(false)
  const [stream, setStream] = useState(null)
  const videoRef = useRef(null)
  const { isReady, pathname } = useRouter()

  const isEmployeePage = pathname.includes("/employee")

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
  }, [stream, videoRef?.current])

  useEffect(() => {
    if (isEmployeePage) setEntered(true)
  }, [isEmployeePage])

  const value = useMemo(
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
