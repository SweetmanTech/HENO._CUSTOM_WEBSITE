import { useWeb3Drops } from "@/providers/Web3Provider"
import VideoPlayer from "@/components/VideoPlayer"
import CollectAllButton from "@/components/CollectAllButton"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import data from "../../../lib/zora-drops"

const DropSection = ({ isPopup }) => {
  const { nextDrop, selectedDrop, setZoraDropActive, setSelectedDrop, zoraDropActive } =
    useWeb3Drops()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      setZoraDropActive(true)
      setSelectedDrop(1)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return (
    <div className="w-full flex flex-col gap-1.5" ref={ref}>
      {data.slice(1).map((item, i) => (
        <VideoPlayer
          src={item.ipfs}
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          isActive={selectedDrop === i + 1 || (i === 0 && !zoraDropActive)}
          nextDrop={nextDrop}
          selectedDrop={selectedDrop}
          isPopup={isPopup}
        />
      ))}
      <CollectAllButton />
    </div>
  )
}

export default DropSection
