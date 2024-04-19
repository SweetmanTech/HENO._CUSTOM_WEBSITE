import { ONE_MILLISECOND } from "@/lib/consts"
import { useEffect, useState } from "react"

const useLiveTime = () => {
  const [liveTime, setLiveTime] = useState(Date.now())

  useEffect(() => {
    const timer = setInterval(() => {
      setLiveTime((prev) => prev + ONE_MILLISECOND)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return {
    liveTime,
  }
}

export default useLiveTime
