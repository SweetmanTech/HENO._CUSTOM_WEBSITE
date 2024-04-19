import CollectArbitrum from "@/components/CollectArbitrum"
import useIsMobile from "@/hooks/useIsMobile"
import { useWeb3Drops } from "@/providers/Web3Provider"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

const TopArbitrumSection = ({ isPopup, isCam }) => {
  const { setZoraDropActive, setSelectedDrop } = useWeb3Drops()
  const [ref, inView] = useInView()
  const isMobile = useIsMobile()

  useEffect(() => {
    if (inView) {
      setZoraDropActive(false)
      setSelectedDrop(0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return (
    <div className="w-full flex flex-col gap-1.5" ref={ref}>
      <video
        src="https://ipfs.decentralized-content.com/ipfs/bafybeicmqcva4bw7psql7hhfa4ugxi743i2ytuhhpfugxzhrfpvrffhwku"
        preload="auto"
        controls
        playsInline
        webkit-playsinline
        x5-playsinline
        muted
        className={`${isPopup || isMobile || isCam ? "h-[200px]" : "h-[300px]"}`}
      />
      <CollectArbitrum />
    </div>
  )
}

export default TopArbitrumSection
