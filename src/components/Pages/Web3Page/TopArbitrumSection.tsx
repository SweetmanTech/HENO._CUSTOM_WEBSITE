import CollectArbitrum from "@/components/CollectArbitrum"
import { useWeb3Drops } from "@/providers/Web3Provider"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import data from "@/lib/zora-drops"

const TopArbitrumSection = ({ isPopup }) => {
  const { setZoraDropActive, setSelectedDrop } = useWeb3Drops() as any
  const [ref, inView] = useInView()

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
        className={`${isPopup ? "h-[200px]" : "h-[300px]"}`}
      />
      <CollectArbitrum />
      <span className={`uppercase text-[12px] ${isPopup ? "md:text-[14px]" : "md:text-[16px]"}`}>
        {data[0].title} By {data[0].artist}
      </span>
    </div>
  )
}

export default TopArbitrumSection
