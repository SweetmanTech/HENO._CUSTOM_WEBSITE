import VideoPlayer from "../../VideoPlayer"
import data from "../../../lib/zora-drops"
import { useWeb3Drops } from "../../../providers/Web3Provider"

const ZoraDropPlayers = ({ isPopup }) => {
  const { nextDrop, selectedDrop } = useWeb3Drops()
  return (
    <div
      className={`!overflow-y-auto
       ${isPopup ? "!h-[200px]" : "!h-[300px]"}`}
    >
      {data.map((item, i) => (
        <VideoPlayer
          src={item.ipfs}
          key={item.ipfs}
          nextDrop={nextDrop}
          selectedDrop={selectedDrop}
          isPopup={isPopup}
        />
      ))}
    </div>
  )
}

export default ZoraDropPlayers
