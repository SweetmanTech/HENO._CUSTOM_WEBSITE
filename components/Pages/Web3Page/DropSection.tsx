import { useWeb3Drops } from "@/providers/Web3Provider"
import VideoPlayer from "@/components/VideoPlayer"
import CollectAllButton from "@/components/CollectAllButton"
import data from "../../../lib/zora-drops"

const DropSection = ({ isPopup }) => {
  const { nextDrop, selectedDrop } = useWeb3Drops()
  return (
    <div className="w-full flex flex-col gap-1.5">
      {data.map((item, i) => (
        <VideoPlayer
          src={item.ipfs}
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          isActive={selectedDrop === i}
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
