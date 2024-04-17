import VideoPlayer from "../../VideoPlayer"
import data from "../../../lib/zora-drops"

const ZoraDropPlayers = ({ isPopup }) => (
  <div
    className={`${isPopup ? "h-[200px]" : "h-[300px]"} overflow-y-auto overflow-x-hidden
      flex flex-col items-center`}
  >
    {data.map((item, i) => (
      <VideoPlayer src={item.ipfs} key={item.ipfs} isPopup={isPopup} index={i} />
    ))}
  </div>
)

export default ZoraDropPlayers
