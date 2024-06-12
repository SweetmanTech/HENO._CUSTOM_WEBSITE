import { useEffect, useRef } from "react"

const useVideoPlayer = (nextDrop, selectedDrop) => {
  const ref = useRef() as any

  useEffect(() => {
    const video = ref.current
    if (video) {
      video.play()
      video.muted = true
      video.addEventListener("ended", nextDrop)
    }

    return () => {
      if (video) {
        video.removeEventListener("ended", nextDrop)
      }
    }
  }, [selectedDrop, nextDrop])

  return {
    ref,
  }
}

export default useVideoPlayer
