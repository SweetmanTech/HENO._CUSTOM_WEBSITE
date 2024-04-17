import { useWeb3Drops } from "@/providers/Web3Provider"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

const VideoPlayer = ({ src, isPopup, index }) => {
  const [ref, inView] = useInView()
  const { setSelectedDrop } = useWeb3Drops()

  useEffect(() => {
    if (inView) setSelectedDrop(index)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, index])

  return (
    <video
      src={src}
      preload="auto"
      controls
      playsInline
      webkit-playsinline
      x5-playsinline
      muted
      ref={ref}
      className={`${isPopup ? "h-[200px]" : "h-[300px]"}`}
    />
  )
}

export default VideoPlayer
