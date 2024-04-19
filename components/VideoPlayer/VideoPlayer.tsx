import useVideoPlayer from "@/hooks/useVideoPlayer"
import useIsMobile from "@/hooks/useIsMobile"

const VideoPlayer = ({ src, isPopup, isActive, nextDrop, selectedDrop, isCam }) => {
  const { ref } = useVideoPlayer(nextDrop, selectedDrop)
  const isMobile = useIsMobile()

  return (
    <>
      {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
      {isActive && (
        <video
          src={src}
          preload="auto"
          controls
          playsInline
          webkit-playsinline
          x5-playsinline
          muted
          ref={ref}
          className={`${isPopup || isMobile || isCam ? "h-[200px]" : "h-[300px]"}`}
        />
      )}
    </>
  )
}

export default VideoPlayer
