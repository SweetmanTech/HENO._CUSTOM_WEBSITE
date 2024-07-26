import { useWeb3Drops } from "@/providers/Web3Provider"
import VideoPlayer from "@/components/VideoPlayer"
import CollectAllButton from "@/components/CollectAllButton"
import data from "../../../lib/zora-drops"

const DropSection = ({ isPopup }) => {
  const { nextDrop, selectedDrop } = useWeb3Drops() as any

  return (
    <div className="w-full flex flex-col gap-1.5">
      {data.slice(1).map((item, i) => (
        <VideoPlayer
          src={item.ipfs}
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          isActive={selectedDrop === i + 1}
          nextDrop={nextDrop}
          selectedDrop={selectedDrop}
          isPopup={isPopup}
        />
      ))}
      <CollectAllButton />
      <span className="uppercase">
        {data[selectedDrop].title} By {data[selectedDrop].artist}
      </span>
    </div>
  )
}

export default DropSection
