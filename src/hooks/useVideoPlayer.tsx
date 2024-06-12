import { useEffect, useRef } from "react"

const useVideoPlayer = (nextDrop, selectedDrop) => {
  const ref = useRef() as any

  useEffect(() => {
    if (ref.current) {
      const video = ref.current
      video.play()
      video.muted = true
      video.addEventListener("ended", nextDrop)
    }

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (ref.current) ref.current.removeEventListener("ended", nextDrop)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDrop, ref])

  return {
    ref,
  }
}

export default useVideoPlayer
